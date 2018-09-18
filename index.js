#!/usr/bin/env node
const program = require('commander')

program
  .version('0.0.1')
  .description(`CLI for Bintang's Project`)

program
  .command('whatsup <name>')
  .alias('w')
  .description('Tell you whats up')
  .action((name) => {
    console.log(`Whats up? ${name}, you are great!`)
  })

program.parse(process.argv);