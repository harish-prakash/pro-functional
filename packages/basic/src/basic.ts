export const isDefined = <T>(value?: T | null): value is NonNullable<T> => {
    const isNotDefined = typeof value === 'undefined'

    const isNull = value === null

    const isBadNumber = typeof value === 'number' && isNaN(value)

    const isUndefined = isNotDefined || isNull || isBadNumber

    return !isUndefined
}
