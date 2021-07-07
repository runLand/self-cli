#!/usr/bin/env node
// 处理用户输入的命令
const commander = require('commander');
const initAction = require("./commands")
 

commander.version(require('./package.json').version, '-v, --version')
  .command('init <name>')
  .action(initAction);
commander.parse(process.argv);