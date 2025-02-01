export const isDefined = (value?: unknown) =>
    !(typeof value === 'undefined' || value === null)
