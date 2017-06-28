/*
  Test path configuration file
 */
const testsContext = require.context('./test', true, /Test\.js$/)
testsContext.keys().forEach(testsContext)
