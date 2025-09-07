import { throwError } from '@pro-functional/basic'

const exitForEnv = (env: string) =>
    throwError(`Exiting: missing environment ${env}`)

const exitWhenEnvNotFound = (value: string) =>
    process.env[value] ? undefined : exitForEnv(value)

interface ExitWhenEnvIsNotSetupFunc {
    (params: string | string[]): void
}

export const exitWhenEnvIsNotSetup: ExitWhenEnvIsNotSetupFunc = (envs) =>
    typeof envs === 'string'
        ? exitWhenEnvNotFound(envs)
        : envs.forEach(exitWhenEnvNotFound)
