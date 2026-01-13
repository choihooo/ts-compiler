import re
from pathlib import Path
import statistics as stats

try:
    import matplotlib
    matplotlib.use('Agg')  # Use non-interactive backend to avoid font cache building message
    import matplotlib.pyplot as plt
    import numpy as np
    HAS_MATPLOTLIB = True
except ImportError:
    HAS_MATPLOTLIB = False
    print("Warning: matplotlib not found. Install it with: pip3 install matplotlib")
    print("Will output text-based results instead.")

# Handle both running from scripts/ and root directory
SCRIPT_DIR = Path(__file__).parent
ROOT_DIR = SCRIPT_DIR.parent if SCRIPT_DIR.name == 'scripts' else SCRIPT_DIR
LOG_DIR = ROOT_DIR / "logs"
OUT_DIR = ROOT_DIR / "plots"  # Save to root/plots directory
OUT_DIR.mkdir(exist_ok=True)

def read_time_reals(pattern: str):
    vals = []
    for p in sorted(LOG_DIR.glob(pattern)):
        s = p.read_text(encoding="utf-8", errors="ignore")
        m = re.search(r"^real\s+([0-9.]+)\s*$", s, re.MULTILINE)
        if m:
            vals.append(float(m.group(1)))
    return vals

def read_diag_times(pattern: str):
    """Read Parse, Check, Emit times from diagnostic files"""
    parse_times = []
    check_times = []
    emit_times = []
    
    for p in sorted(LOG_DIR.glob(pattern)):
        s = p.read_text(encoding="utf-8", errors="ignore")
        # Look for aggregate times first, then individual project times
        parse_match = re.search(r"Aggregate Parse time:\s+([0-9.]+)s", s)
        check_match = re.search(r"Aggregate Check time:\s+([0-9.]+)s", s)
        emit_match = re.search(r"Aggregate Emit time:\s+([0-9.]+)s", s)
        
        if not parse_match:
            # Fallback to individual project times (sum them)
            parse_matches = re.findall(r"Parse time:\s+([0-9.]+)s", s)
            check_matches = re.findall(r"Check time:\s+([0-9.]+)s", s)
            emit_matches = re.findall(r"Emit time:\s+([0-9.]+)s", s)
            
            if parse_matches:
                parse_times.append(sum(float(x) for x in parse_matches))
            if check_matches:
                check_times.append(sum(float(x) for x in check_matches))
            if emit_matches:
                emit_times.append(sum(float(x) for x in emit_matches))
        else:
            if parse_match:
                parse_times.append(float(parse_match.group(1)))
            if check_match:
                check_times.append(float(check_match.group(1)))
            if emit_match:
                emit_times.append(float(emit_match.group(1)))
    
    return parse_times, check_times, emit_times

def median(x): 
    return stats.median(x)

def mean(x):
    return sum(x) / len(x)

# 1) time real (클린/증분)
ts3_clean = read_time_reals("ts3_clean_build_*.time")
ts58_clean = read_time_reals("ts58_clean_build_*.time")
ts3_inc = read_time_reals("ts3_incremental_*.time")
ts58_inc = read_time_reals("ts58_incremental_*.time")

# fallback: 네가 콘솔로 준 값으로라도 돌리고 싶으면 아래 주석 해제
# ts3_clean = [2.63, 2.54, 2.11, 2.14, 2.96]
# ts58_clean = [2.41, 2.24, 2.37, 2.43, 2.36]
# ts3_inc = [1.25, 1.25, 1.37, 1.56, 1.28]
# ts58_inc = [0.85, 0.89, 0.92, 0.88, 0.91]

# Print text-based results
print("\n=== Benchmark Results ===")
if ts3_clean:
    print(f"\nTypeScript 3.9.5 - Clean Build:")
    print(f"  Values: {ts3_clean}")
    print(f"  Mean: {mean(ts3_clean):.2f}s")
    print(f"  Median: {median(ts3_clean):.2f}s")
    print(f"  Min: {min(ts3_clean):.2f}s")
    print(f"  Max: {max(ts3_clean):.2f}s")

if ts58_clean:
    print(f"\nTypeScript 5.8.3 - Clean Build:")
    print(f"  Values: {ts58_clean}")
    print(f"  Mean: {mean(ts58_clean):.2f}s")
    print(f"  Median: {median(ts58_clean):.2f}s")
    print(f"  Min: {min(ts58_clean):.2f}s")
    print(f"  Max: {max(ts58_clean):.2f}s")

if ts3_inc:
    print(f"\nTypeScript 3.9.5 - Incremental Build:")
    print(f"  Values: {ts3_inc}")
    print(f"  Mean: {mean(ts3_inc):.2f}s")
    print(f"  Median: {median(ts3_inc):.2f}s")

if ts58_inc:
    print(f"\nTypeScript 5.8.3 - Incremental Build:")
    print(f"  Values: {ts58_inc}")
    print(f"  Mean: {mean(ts58_inc):.2f}s")
    print(f"  Median: {median(ts58_inc):.2f}s")

if ts3_clean and ts58_clean:
    speedup = mean(ts3_clean) / mean(ts58_clean)
    print(f"\n=== Performance Comparison ===")
    print(f"TS 5.8.3 is {speedup:.2f}x faster than TS 3.9.5 (clean build)")

if HAS_MATPLOTLIB:
    # Read diagnostic data for breakdown
    ts3_parse, ts3_check, ts3_emit = read_diag_times("ts3_build_clean_diag.txt")
    ts58_parse, ts58_check, ts58_emit = read_diag_times("ts58_build_clean_diag.txt")
    
    # 1. Build Boxplot (Clean + Incremental, 4 boxes with strip plot)
    if (ts3_clean or ts58_clean) or (ts3_inc or ts58_inc):
        fig, ax = plt.subplots(figsize=(10, 6))
        data_box = []
        labels_box = []
        positions = []
        pos = 1
        
        if ts3_clean:
            data_box.append(ts3_clean)
            labels_box.append('TS 3.9.5\nClean')
            positions.append(pos)
            pos += 1
        if ts58_clean:
            data_box.append(ts58_clean)
            labels_box.append('TS 5.8.3\nClean')
            positions.append(pos)
            pos += 1
        if ts3_inc:
            data_box.append(ts3_inc)
            labels_box.append('TS 3.9.5\nIncremental')
            positions.append(pos)
            pos += 1
        if ts58_inc:
            data_box.append(ts58_inc)
            labels_box.append('TS 5.8.3\nIncremental')
            positions.append(pos)
            pos += 1
        
        if data_box:
            bp = ax.boxplot(data_box, positions=positions, patch_artist=True, widths=0.6)
            ax.set_xticks(positions)
            ax.set_xticklabels(labels_box)
            
            # Color the boxes
            colors = ['lightblue', 'lightgreen', 'lightblue', 'lightgreen']
            for i, patch in enumerate(bp['boxes']):
                patch.set_facecolor(colors[i % len(colors)])
                patch.set_alpha(0.7)
            
            # Add strip plot (individual points) on top
            for i, (data, pos) in enumerate(zip(data_box, positions)):
                # Add jitter to x position to avoid overlap
                jitter = np.random.normal(0, 0.05, len(data))
                ax.scatter([p + j for p, j in zip([pos] * len(data), jitter)], data, 
                          color='black', alpha=0.6, s=30, zorder=3)
            
            ax.set_title('Build Time Comparison (Boxplot with Individual Runs)', 
                        fontsize=14, fontweight='bold')
            ax.set_ylabel('Time (seconds)', fontsize=12)
            ax.grid(True, alpha=0.3, axis='y')
            all_values = [v for sublist in data_box for v in sublist]
            if all_values:
                y_min = max(0, min(all_values) * 0.9)
                y_max = max(all_values) * 1.1
                ax.set_ylim(y_min, y_max)
            plt.tight_layout()
            plt.savefig(OUT_DIR / 'build_boxplot.png', dpi=150)
            print(f"Plot 1 saved: {OUT_DIR / 'build_boxplot.png'}")
            plt.close()
    
    # 2. Build Median Comparison (Clean + Incremental, 2 groups)
    has_clean = ts3_clean and ts58_clean
    has_inc = ts3_inc and ts58_inc
    
    if has_clean or has_inc:
        fig, ax = plt.subplots(figsize=(12, 6))
        
        # Position bars with clear group separation
        x_clean = [0, 1] if has_clean else []
        x_inc = [3, 4] if has_inc else []  # More space between groups
        width = 0.35
        
        if has_clean:
            medians_clean = [median(ts3_clean), median(ts58_clean)]
            means_clean = [mean(ts3_clean), mean(ts58_clean)]
            
            bars1 = ax.bar([x - width/2 for x in x_clean], medians_clean, width, 
                          label='Median', color='lightblue', alpha=0.8)
            bars2 = ax.bar([x + width/2 for x in x_clean], means_clean, width,
                          label='Mean', color='lightgreen', alpha=0.8)
            
            # Add value labels
            for bars in [bars1, bars2]:
                for i, bar in enumerate(bars):
                    height = bar.get_height()
                    ax.text(bar.get_x() + bar.get_width()/2., height,
                           f'{height:.2f}s',
                           ha='center', va='bottom', fontsize=9)
        
        if has_inc:
            medians_inc = [median(ts3_inc), median(ts58_inc)]
            means_inc = [mean(ts3_inc), mean(ts58_inc)]
            
            bars3 = ax.bar([x - width/2 for x in x_inc], medians_inc, width, 
                          color='lightblue', alpha=0.8)
            bars4 = ax.bar([x + width/2 for x in x_inc], means_inc, width,
                          color='lightgreen', alpha=0.8)
            
            # Add value labels
            for bars in [bars3, bars4]:
                for i, bar in enumerate(bars):
                    height = bar.get_height()
                    ax.text(bar.get_x() + bar.get_width()/2., height,
                           f'{height:.2f}s',
                           ha='center', va='bottom', fontsize=9)
        
        # Set labels and title
        all_x = x_clean + x_inc
        all_labels = []
        if has_clean:
            all_labels.extend(['TS 3.9.5', 'TS 5.8.3'])
        if has_inc:
            all_labels.extend(['TS 3.9.5', 'TS 5.8.3'])
        
        ax.set_ylabel('Time (seconds)', fontsize=12)
        title = 'Build Time Comparison (n=5): Median vs Mean'
        ax.set_title(title, fontsize=14, fontweight='bold')
        ax.set_xticks(all_x)
        ax.set_xticklabels(all_labels)
        
        # Add group labels with vertical lines
        if has_clean and has_inc:
            # Add vertical line to separate groups
            ax.axvline(x=2, color='gray', linestyle='--', linewidth=1, alpha=0.5)
            # Add group labels above x-axis
            ax.text(0.2, -0.12, 'Clean Build', transform=ax.transAxes, 
                   ha='center', fontsize=11, fontweight='bold')
            ax.text(0.55, -0.18, '(n=5)', transform=ax.transAxes, 
                   ha='center', fontsize=9, style='italic')
            ax.text(0.8, -0.12, 'Incremental Build', transform=ax.transAxes, 
                   ha='center', fontsize=11, fontweight='bold')
            ax.text(0.875, -0.18, '(n=5)', transform=ax.transAxes, 
                   ha='center', fontsize=9, style='italic')
        elif has_clean:
            ax.text(0.5, -0.12, 'Clean Build (n=5)', transform=ax.transAxes, 
                   ha='center', fontsize=11, fontweight='bold')
        elif has_inc:
            ax.text(0.5, -0.12, 'Incremental Build (n=5)', transform=ax.transAxes, 
                   ha='center', fontsize=11, fontweight='bold')
        
        if has_clean or has_inc:
            ax.legend(loc='upper right')
        ax.grid(True, alpha=0.3, axis='y')
        ax.set_ylim(bottom=0)
        ax.set_xlim(-0.5, max(all_x) + 0.5 if all_x else 4.5)
        
        plt.tight_layout()
        plt.savefig(OUT_DIR / 'build_median.png', dpi=150)
        print(f"Plot 2 saved: {OUT_DIR / 'build_median.png'}")
        plt.close()
    
    # 3. Breakdown (Check/Emit) Comparison
    if (ts3_check and ts3_emit) or (ts58_check and ts58_emit):
        fig, ax = plt.subplots(figsize=(10, 6))
        
        x = np.arange(2)  # TS 3.9.5 and TS 5.8.3
        width = 0.35
        
        ts3_check_med = [median(ts3_check)] if ts3_check else [0]
        ts3_emit_med = [median(ts3_emit)] if ts3_emit else [0]
        ts58_check_med = [median(ts58_check)] if ts58_check else [0]
        ts58_emit_med = [median(ts58_emit)] if ts58_emit else [0]
        
        check_data = []
        emit_data = []
        if ts3_check and ts3_emit:
            check_data.append(ts3_check_med[0])
            emit_data.append(ts3_emit_med[0])
        else:
            check_data.append(0)
            emit_data.append(0)
            
        if ts58_check and ts58_emit:
            check_data.append(ts58_check_med[0])
            emit_data.append(ts58_emit_med[0])
        else:
            check_data.append(0)
            emit_data.append(0)
        
        bars1 = ax.bar(x - width/2, check_data, width, label='Check time', 
                      color='lightcoral', alpha=0.8)
        bars2 = ax.bar(x + width/2, emit_data, width, label='Emit time',
                      color='lightblue', alpha=0.8)
        
        ax.set_ylabel('Time (seconds)', fontsize=12)
        ax.set_title('Compiler Pipeline Breakdown\n(tsc --extendedDiagnostics)', 
                    fontsize=14, fontweight='bold')
        ax.set_xticks(x)
        ax.set_xticklabels(['TS 3.9.5', 'TS 5.8.3'])
        ax.legend()
        ax.grid(True, alpha=0.3, axis='y')
        ax.set_ylim(bottom=0)
        
        # Add value labels
        for bars in [bars1, bars2]:
            for bar in bars:
                height = bar.get_height()
                if height > 0:
                    ax.text(bar.get_x() + bar.get_width()/2., height,
                           f'{height:.2f}s',
                           ha='center', va='bottom', fontsize=9)
        
        # Add caption
        caption = "Note: Internal compiler phase measurements. Values do not sum to OS time (real)."
        ax.text(0.5, -0.12, caption, transform=ax.transAxes, 
               ha='center', fontsize=9, style='italic', color='gray')
        
        plt.tight_layout()
        plt.savefig(OUT_DIR / 'breakdown_check_emit.png', dpi=150)
        print(f"Plot 3 saved: {OUT_DIR / 'breakdown_check_emit.png'}")
        plt.close()
    
    print(f"\nAll plots saved to {OUT_DIR}/")
else:
    print("\n(Install matplotlib to generate plots: pip3 install matplotlib)")
