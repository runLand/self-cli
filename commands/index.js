#!/usr/bin/env node
// commands/init.js
const shell = require('shelljs');
const symbols = require('log-symbols');
const clone = require('../utils/clone.js');
const types = require('./types.js')
const fs = require("fs")
const inquirer = require('inquirer')
const chalk = require('chalk')
const ora = require('ora'); // 用于输出loading
const ROMOTEURL = 'gitlab:http://192.168.60.250:81:med-front/med-template';
const initAction = (name, option) => {
  // 0. 检查控制台是否可以运行`git `，
  if (!shell.which('git')) {
    console.log(symbols.error, '对不起，git命令不可用！');
    shell.exit(1);
  }
  // 1. 验证输入name是否合法
  if (fs.existsSync(name)) {
    console.log(symbols.warning, `已存在项目文件夹${name}！`);
    return;
  }
  if (name.match(/[^A-Za-z0-9\u4e00-\u9fa5_-]/g)) {
    console.log(symbols.error, '项目名称存在非法字符！');
    return;
  }
  //一步一步
  inquirer
    .prompt(types)
    .then(answers => {
      //下载模板
      clone(`${ROMOTEURL}#${answers.type}`, name).then(() => {
        //依赖包安装
        shell.cd(name);
        console.log(`cd ${__dirname}\\${name}`)
        shell.exec('npm i')
        const downSpinner = ora('npm install....').start();
        //默认依赖下载
        if (shell.exec(`npm i`).code !== 0) {
          downSpinner.fail();
          console.log(symbols.error, chalk.red("安装依赖失败！！"));
          shell.exit(1);
        }
        //ui库下载
        if (answers.ui != "none") {
          shell.exec(`npm i ${answers.ui}`)
          if (shell.exec(`npm i ${answers.ui}`).code !== 0) {
            downSpinner.fail(chalk.red(`${answers.ui}安装下载失败！！`));
            shell.exit(1);
          }
        }
        downSpinner.succeed(chalk.green('安装依赖成功！！'));
      });
    })
    .catch(error => {
      error.isTtyError ? console.error(`Prompt couldn't be rendered in the current environment`) : console.error(`Something else when wrong`)
    });
};

module.exports = initAction;