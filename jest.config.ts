import { createDefaultEsmPreset, type JestConfigWithTsJest, pathsToModuleNameMapper } from 'ts-jest'

import { compilerOptions } from './tsconfig.json'

function  replacePrefix(value: string, prefix: string, newPrefix: string): string {
  return value.startsWith(prefix) ? value.replace(prefix, newPrefix) : value
}

const defaultModuleMapper = pathsToModuleNameMapper(compilerOptions.paths, {useESM: true}) ?? {}
const rootFixingModuleMapper =  Object.fromEntries(
  Object.entries(defaultModuleMapper)
    .map(([key, value]) => [
      key,
      Array.isArray(value)
        ? value.map((v) => replacePrefix(v, './', '<rootDir>'))
        : replacePrefix(value, './', '<rootDir>')
    ])
)

const jestConfig: JestConfigWithTsJest = {
  ...createDefaultEsmPreset({}),
  globalSetup: './test/setup.ts',
  restoreMocks: true,
  resetModules: true,
  // for some reason ./ is not treated as root even though rootDir and baseUrl is .
  moduleNameMapper: rootFixingModuleMapper,
}

export default jestConfig