export const isObject = (value?: unknown): value is Record<string, unknown> =>
    typeof value === 'object' && !!value

export const isObjectWithProps = <K extends string>(
    value?: unknown,
    ...props: K[]
): value is { [k in K]: unknown } =>
    isObject(value) && props.every((prop) => prop in value)
