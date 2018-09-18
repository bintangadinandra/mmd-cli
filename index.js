#!/usr/bin/env node
const program = require('commander')

require('./service-fe')
require('./service-be')
require('./service-db')

program
  .version('0.0.1')
  .description(`CLI for Bintang's Project`)


program
  .command('test <name>')
  .alias('t')
  .description('Test CLI')
  .action((name) => {
    console.log(`Whats up? ${name}, welcome to mamad CLI!`)
  })

program.parse(process.argv);