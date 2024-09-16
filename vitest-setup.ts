/* eslint-disable import/no-extraneous-dependencies */
import failOnConsole from "vitest-fail-on-console"

failOnConsole({
  shouldFailOnDebug: true,
  shouldFailOnError: true,
  shouldFailOnInfo: true,
  shouldFailOnLog: true,
  shouldFailOnWarn: true
})
