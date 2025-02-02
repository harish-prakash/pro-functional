# Arrays

## Installation

```sh
yarn add --exact @pro-functional/arrays
```

## Tools

**onlyDefined** A filter utility to prune a sparse array. The filter removes
`undefined`, `null` and `NaN` and the returned array is type-corrected to
represent "only defined" values.

```ts
type MaybeValue = number | undefined | null

const unchecked: MaybeValue[] = [1, +'bad number', undefined, null, 2, 3]

const values: number[] = maybeValues.filter(onlyDefined)
// [1, 2, 3]
```

