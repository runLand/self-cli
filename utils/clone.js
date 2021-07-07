#!/usr/bin/env node
const download = require('download-git-repo');
const symbols = require('log-symbols');  // 用于输出图标
const ora = require('ora'); // 用于输出loading
const chalk = require('chalk'); // 用于改变文字颜色

module.exports = function (remote, name) {
    const downSpinner = ora(`正在下载${remote}，请稍后...`).start();   
    return new Promise((resolve, reject) => {
        download(remote, name, {}, err => {
            if (err) {
                downSpinner.fail();
                console.log(symbols.error, chalk.red(err), remote);
                reject(err);
                return;
            };
            downSpinner.succeed(chalk.green('文件clone成功！'));
            resolve();
        });
    });
};