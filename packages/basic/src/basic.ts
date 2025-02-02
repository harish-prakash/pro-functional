export const isDefined = <T>(value?: T | null) =>
    !(typeof value === 'undefined' || value === null)
