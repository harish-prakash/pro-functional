# Functions

## Installation

```sh
yarn add --exact @pro-functional/functions
```

## Tools

**paramOptional** Creates a wrapper function similar to the seed function passed
in albeit with an optional parameter instead of the required parameter of seed
the function.

```ts
const setSelect = (value: string) => api.setSelected(value)

const handleSelect = paramOptional(setSelect)
// handleSelect = (value?: string) => void
```

**action** A function typically has 4 parts; input validation, input
tranformation, business logic/handler and fallback. Conditional decisions are
often made at validation and mapping, building a pure function with all these
pieces could be verbose. The `action` function makes it easier to configure
these and internally takes care of the conditional branching.

```ts
const isEditable = (data?: RowData) => {
    const mapper = (data: RowData) => {
        const { name, id } = data

        return { name, id }
    }

    const handler = ({ name, id }: SubsetRowData) => name !== id

    const fallback = false

    return action({ mapper, handler, fallback, input })
}
```
