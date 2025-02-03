# Objects

## Installation

```sh
yarn add --exact @pro-functional/objects
```

## Tools

**isObject** A type checker to evaluate the given value as an
`NonNullable<object>`

```ts
isObject(null)
// false

isObject(undefined)
// false

isObject(5)
// false

isObject('random value')
// false

isObject({})
// true
```

**isObjectWithProps** A type checker that verifies the provided value to be an
object with the provided property keys

```ts
isObjectWithProps(null, 'name', 'id')
// false

isObjectWithProps(undefined, 'name', 'id')
// false

isObjectWithProps(5, 'name', 'id')
// false

isObjectWithProps('random value', 'name', 'id')
// false

isObjectWithProps({}, 'name', 'id')
// false

isObjectWithProps({ name: 'bob' }, 'name', 'id')
// false

isObjectWithProps({ name: 'bob', id: '007', uid: 'ga98as7fuhk' }, 'name', 'id')
// true

interface User {
    name: string
    id: string
}

const maybeUser = { name: 'bob', id: '007', uid: 'ga98as7fuhk' }

const user: User | null = isObjectWithProps(maybeUser, 'name', 'id')
    ? maybeUser
    : null
// ✅ assignment is type-correct
```

**makeEnumResolver** Create a resolver for an Enum allowing you to map a text
back to the enum. The fallback allows a guaranteed response.

```ts
enum Colors {
    Green = 'green',
    Blue = 'blue',
    Invalid = 'invalid',
}

const resolveColor = makeEnumResolver(Colors, Colors.Invalid)

resolveColor('green')
// Colors.Green

resolveColor('blue')
// Colors.Blue

resolveColor('purple')
// Colors.Invalid
```
