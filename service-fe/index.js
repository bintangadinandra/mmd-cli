const program = require('commander')
const {createReactNativeApp} = require('./react-native')

program
  .command('react-native <projectName>')
  .alias('rn')
  .action((projectName) => createReactNativeApp(projectName))