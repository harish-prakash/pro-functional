import { isDefined } from './objects.js'

export const callIfDefined =
    <P, R>(fnc: (params: P) => R) =>
    (params?: P) =>
        isDefined(params) ? fnc(params) : undefined

interface ActionParams<MapperParam, Param, Resp> {
    mapper: (param: MapperParam) => Param | null
    handler: (param: Param) => Resp
    fallback: Resp
    input?: MapperParam | null
}

export const action = <M, P, R>({
    mapper,
    handler,
    fallback,
    input,
}: ActionParams<M, P, R>) => {
    const params = isDefined(input) ? mapper(input) : null

    const response = isDefined(params) ? handler(params) : fallback

    return response
}
