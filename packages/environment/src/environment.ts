import { throwError } from '@pro-functional/basic'

const exitForEnv = (env: string) =>
    throwError(`Exiting: missing environment ${env}`)

const exitWhenEnvNotFound = (value: string) =>
    process.env[value] ? undefined : exitForEnv(value)

export const exitWhenEnvIsNotSetup = (...envs: string[]) =>
    envs.forEach(exitWhenEnvNotFound)
