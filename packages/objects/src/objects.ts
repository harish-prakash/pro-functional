export const isObject = (value?: unknown): value is Record<string, unknown> =>
    typeof value === 'object' && !!value

export const isObjectWithProps = <K extends string>(
    value?: unknown,
    ...props: K[]
): value is { [k in K]: unknown } =>
    isObject(value) && props.every((prop) => prop in value)

export const makeEnumMap = <V, E extends Record<string, V>>(
    enumObject: E
): Map<string, V> =>
    new Map(Object.values(enumObject).map((item) => [`${item}`, item]))

interface BuildEnumValueParams<V> {
    map: Map<string, V>
    fallback: V
}

export const buildEnumValueResolver =
    <V>({ map, fallback }: BuildEnumValueParams<V>) =>
    (value: string) => {
        const resolved = map.get(value)

        return resolved || fallback
    }
