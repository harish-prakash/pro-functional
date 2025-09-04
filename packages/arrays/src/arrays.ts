import { isDefined } from '@pro-functional/basic'

export const onlyDefined = <T>(item?: T | null): item is T => isDefined(item)

export const itemToProp =
    <T extends object, K extends keyof T>(prop: K) =>
    (object: T): T[K] =>
        object[prop]

interface WithOrdinal {
    ordinal: number
}

export const orderByOrdinals = (left: WithOrdinal, right: WithOrdinal) =>
    left.ordinal - right.ordinal
