export const isDefined = <T>(value?: T | null): value is NonNullable<T> => {
    const isNotDefined = typeof value === 'undefined'

    const isNull = value === null

    const isBadNumber = typeof value === 'number' && isNaN(value)

    const isUndefined = isNotDefined || isNull || isBadNumber

    return !isUndefined
}

export const getNumber = (
    mayBeNumber?: number | string | null,
    fallback = 0
) =>
    mayBeNumber === undefined || mayBeNumber === null || isNaN(+mayBeNumber)
        ? fallback
        : +mayBeNumber

export const throwError = (message: string) => {
    throw new Error(message)
}
