# Basic

## Installation

```sh
yarn add --exact @pro-functional/basic
```

## Tools

**isDefined** Evaluates the provided value and performs an opinionated truthy
check allowing values like `0` and `""` (empty string) to correctly evaluate as
_valid_. A `NaN` number is also marked as invalid.

    ```ts
    isDefined(undefined)
    // false

    isDefined(null)
    // false

    isDefined(+'bad number')
    // false

    isDefined({})
    // true

    isDefined('')
    // true

    isDefined(0)
    // true

    isDefined('text')
    // true

    isDefined({ type: 'kilogram', value: 5 })
    // true
    ```
