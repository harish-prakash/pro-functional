import { isDefined } from '@pro-functional/basic'

export const onlyDefined = <T>(item?: T | null): item is T => isDefined(item)
