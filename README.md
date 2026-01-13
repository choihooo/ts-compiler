# TypeScript 컴파일러 성능 비교 데모

TypeScript 3.9.5와 5.8.3 간의 빌드 타임(특히 incremental/build mode) 성능 차이를 측정하는 데모 프로젝트입니다.

## 프로젝트 구조

이 프로젝트는 pnpm 기반 모노레포로 구성되어 있으며, TypeScript Project References를 사용하여 빌드 그래프를 구성합니다.

```
ts-compiler-bench/
├── packages/
│   ├── core/          # 타입/유틸이 많은 라이브러리
│   ├── ui/            # 제네릭/컴포넌트 타입이 많은 라이브러리 (core 참조)
│   └── app/           # core+ui를 import해서 사용하는 앱 (core, ui 참조)
├── scripts/           # 벤치마크 스크립트
└── logs/              # 벤치마크 결과 저장
```

### 패키지 설명

#### `packages/core`
- **목적**: 타입 유틸리티와 DTO 변환 타입이 많은 라이브러리
- **특징**:
  - DeepPartial, DeepReadonly, Path, ValueAtPath 등 유틸 타입
  - 조건부 타입, mapped type 활용
  - API 응답 타입/DTO 변환 타입
  - 100+ 파일로 구성

#### `packages/ui`
- **목적**: 제네릭/컴포넌트 타입이 많은 라이브러리
- **특징**:
  - React 없이도 컴파일 가능한 "가짜 컴포넌트 타입" (FC, PropsWithChildren, ComponentProps 등)
  - 제네릭 컴포넌트 (Polymorphic as prop 패턴)
  - variant props, forwardRef 흉내
  - core 타입을 많이 import하여 타입 전파 발생
  - 50+ 컴포넌트 파일

#### `packages/app`
- **목적**: core+ui를 광범위하게 사용하는 앱
- **특징**:
  - 여러 엔트리 (pages/, features/)에서 ui/core 사용
  - 타입 유추가 깊게 이어지는 컴포넌트 조합
  - 30+ 페이지, 20+ 기능 컴포넌트

## 설치

```bash
# pnpm 설치 (없는 경우)
npm install -g pnpm

# 의존성 설치
pnpm install
```

## TypeScript Project References

각 패키지는 TypeScript Project References를 사용하여 빌드 그래프를 구성합니다:

- **core**: `composite: true`, `declaration: true`, `declarationMap: true`, `incremental: true`
- **ui**: core를 참조, 동일한 설정
- **app**: core와 ui를 참조, 동일한 설정

이 구조를 통해:
- 의존성 그래프에 따라 순서대로 빌드
- 변경된 프로젝트만 재빌드 (증분 빌드)
- 타입 체크 성능 향상

## 벤치마크 실행

### 클린 빌드 벤치마크

각 TypeScript 버전에 대해 5회 반복 실행하고 통계를 계산합니다:

```bash
# TypeScript 3.9.5
pnpm bench:ts3

# TypeScript 5.8.3
pnpm bench:ts58
```

결과는 `logs/` 폴더에 저장됩니다:
- `logs/ts3_build_1.txt` ~ `logs/ts3_build_5.txt`: 각 실행 로그
- `logs/ts3_summary.json`: 통계 결과 (min, max, median, avg)
- `logs/ts58_build_1.txt` ~ `logs/ts58_build_5.txt`
- `logs/ts58_summary.json`
- `logs/summary.json`: 전체 요약

### 증분 빌드 벤치마크

최초 빌드 후, app의 특정 파일만 수정하고 재빌드하여 증분 빌드 성능을 측정합니다:

```bash
# TypeScript 3.9.5
pnpm bench:incremental:ts3

# TypeScript 5.8.3
pnpm bench:incremental:ts58
```

결과는 `logs/` 폴더에 저장됩니다:
- `logs/ts3_incremental_initial.txt`: 최초 빌드 로그
- `logs/ts3_incremental_rebuild.txt`: 증분 빌드 로그
- `logs/ts3_incremental_results.json`: 결과 통계
- `logs/summary.json`: 전체 요약에 incremental 결과 포함

### 수동 빌드

```bash
# TypeScript 3.9.5로 빌드
pnpm build:ts3

# TypeScript 5.8.3로 빌드
pnpm build:ts58

# 타입 체크만 (빌드 없이)
pnpm check:ts3
pnpm check:ts58
```

### 클린

빌드 산출물과 캐시 삭제:

```bash
pnpm clean
```

## 결과 해석

### 클린 빌드 결과

`logs/summary.json`에서 각 버전의 통계를 확인할 수 있습니다:

```json
{
  "ts3": {
    "version": "3.9.5",
    "iterations": 5,
    "times": [1234, 1256, 1245, 1238, 1242],
    "min": 1234,
    "max": 1256,
    "median": 1242,
    "avg": 1243.0,
    "unit": "ms"
  },
  "ts58": {
    "version": "5.8.3",
    "iterations": 5,
    "times": [856, 872, 861, 858, 864],
    "min": 856,
    "max": 872,
    "median": 861,
    "avg": 862.2,
    "unit": "ms"
  }
}
```

### 증분 빌드 결과

`logs/summary.json`의 `incremental` 섹션에서 증분 빌드 성능을 확인할 수 있습니다:

```json
{
  "incremental": {
    "ts3": {
      "version": "3.9.5",
      "initialBuild": { "duration": 1234, "unit": "ms" },
      "incrementalBuild": { "duration": 456, "unit": "ms" },
      "speedup": "270.61%",
      "improvement": 778
    },
    "ts58": {
      "version": "5.8.3",
      "initialBuild": { "duration": 856, "unit": "ms" },
      "incrementalBuild": { "duration": 234, "unit": "ms" },
      "speedup": "365.81%",
      "improvement": 622
    }
  }
}
```

### 빌드 그래프 확인

`tsc -b -v` 옵션으로 어떤 프로젝트가 빌드되었는지 확인할 수 있습니다:

```bash
pnpm build:ts3
# 또는
pnpm build:ts58
```

출력에서 다음과 같은 정보를 확인할 수 있습니다:
- 어떤 프로젝트가 빌드되었는지
- 증분 빌드 시 어떤 프로젝트가 재빌드되었는지
- 의존성 그래프가 올바르게 구성되었는지

## 증분 빌드의 동작 원리

### 최초 빌드

1. `core` 프로젝트 빌드 → `packages/core/dist/*.d.ts`, `packages/core/*.tsbuildinfo` 생성
2. `ui` 프로젝트 빌드 (core 의존) → `packages/ui/dist/*.d.ts`, `packages/ui/*.tsbuildinfo` 생성
3. `app` 프로젝트 빌드 (core, ui 의존) → `packages/app/dist/*.d.ts`, `packages/app/*.tsbuildinfo` 생성

### 증분 빌드 (app 파일만 수정)

1. `core` 프로젝트: 변경 없음 → 재빌드 불필요 (`.tsbuildinfo` 확인)
2. `ui` 프로젝트: 변경 없음 → 재빌드 불필요
3. `app` 프로젝트: 파일 변경 감지 → 변경된 파일만 재빌드

이를 통해 증분 빌드는 전체 빌드보다 훨씬 빠릅니다.

## 왜 TypeScript 업그레이드로 빌드가 빨라질 수 있는가?

이 데모에서 관찰할 수 있는 주요 개선 사항:

### 1. 타입 체크 성능 향상
- TypeScript 5.x는 타입 체크 알고리즘이 개선되어 복잡한 제네릭 타입과 조건부 타입을 더 빠르게 처리합니다.
- 특히 깊은 타입 전파가 있는 코드에서 성능 향상이 두드러집니다.

### 2. 증분 빌드 최적화
- `.tsbuildinfo` 파일 형식과 증분 빌드 알고리즘이 개선되어 변경 감지가 더 정확하고 빠릅니다.
- 불필요한 재빌드를 줄여 전체 빌드 시간을 단축합니다.

### 3. 메모리 사용 최적화
- 타입 정보 캐싱이 개선되어 대규모 프로젝트에서 메모리 사용이 효율적입니다.

### 4. Project References 최적화
- 의존성 그래프 분석이 개선되어 빌드 순서 결정이 더 빠릅니다.

## 주의사항

- 이 데모는 **실제 프론트엔드 코드베이스에서 자주 보는 타입 전파/제네릭/props inference 워크로드**를 모사합니다.
- 병리적인 벤치가 아닌 현실적인 사용 사례를 재현합니다.
- 실제 프로젝트에서의 성능 차이는 코드베이스 크기와 복잡도에 따라 다를 수 있습니다.

## 라이선스

MIT
