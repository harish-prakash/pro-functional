import { isDefined } from './objects.js'

export const paramOptional =
    <P, R>(fnc: (params: P) => R) =>
    (params?: P | null) =>
        isDefined(params) ? fnc(params) : undefined

interface ActionParams<MapperParam, Param, Resp> {
    mapper: (param: MapperParam) => Param | undefined
    handler: (param: Param) => Resp
    fallback: Resp
    input?: MapperParam | null
}

export const action = <MapperParam, Param, Resp>({
    mapper,
    handler,
    fallback,
    input,
}: ActionParams<MapperParam, Param, Resp>) =>
    paramOptional(handler)(paramOptional(mapper)(input)) || fallback
