export const isObject = (value?: unknown): value is Record<string, unknown> =>
    typeof value === 'object' && !!value

export const isObjectWithProps = <K extends string>(
    value?: unknown,
    ...props: K[]
): value is { [k in K]: unknown } =>
    isObject(value) && props.every((prop) => prop in value)

type MatchFunc<T> = (param: T) => boolean

interface MatchWithPropFunc<T extends object> {
    <K extends keyof T>(
        key: K,
        match: MatchFunc<T[K]>
    ): CheckObjectIntermediate<T>
}

interface CheckObjectIntermediate<T extends object> {
    isMatch: () => boolean
    object: T
    withProp: MatchWithPropFunc<T>
}

export const checkObject = <T extends object>(
    value: T
): CheckObjectIntermediate<T> => {
    const withProp = <K extends keyof T>(key: K, matchFunc: MatchFunc<T[K]>) =>
        next(matchFunc(value[key]), value)

    const next = (result: boolean, object: T): CheckObjectIntermediate<T> => ({
        isMatch: () => result,
        object,
        withProp,
    })

    return next(!!value, value)
}

export const matchesString = (value: unknown): value is string =>
    typeof value === 'string'

export const matchesNumber = (value: unknown): value is number =>
    typeof value === 'number'

export const matchesOneOf = <K extends string>(
    value: unknown,
    sample: K[]
): value is K => matchesString(value) && sample.some((key) => value === key)

export const matchesEnum =
    (enumerated: Record<string, string>) => (value: unknown) =>
        matchesString(value) && Object.keys(enumerated).includes(value)

export const matchesList =
    <T>(matchFunc: MatchFunc<T>) =>
    (value: unknown) =>
        Array.isArray(value) && value.every(matchFunc)

export const matchesValue = <T>(value: unknown, sample: T) => value === sample
