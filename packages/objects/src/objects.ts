export const isObject = (value?: unknown): value is Record<string, unknown> =>
    typeof value === 'object' && !!value

export const isObjectWithProps = <K extends string>(
    value?: unknown,
    ...props: K[]
): value is { [k in K]: unknown } =>
    isObject(value) && props.every((prop) => prop in value)

type MatchFunc<T> = (param: T) => boolean

export const checkObject = <T extends object>(value: T) => {
    const withProp = <K extends keyof T>(key: K, matchFunc: MatchFunc<T[K]>) =>
        next(matchFunc(value[key]))

    const next = (result: boolean) => ({ result, withProp })

    return next(!!value)
}

export const matchesString = (value: unknown): value is string =>
    typeof value === 'string'

export const matchesEnum =
    (enumerated: Record<string, string>) => (value: unknown) =>
        matchesString(value) && Object.keys(enumerated).includes(value)
