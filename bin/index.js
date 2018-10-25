#!/usr/bin/env node

const program = require('commander');
const pick = require('lodash/pick');

var sqlToMarkdown = require('../lib');

program
    .version('1.0.0')
    .option('-h, --host [s]', '数据库连接')
    .option('-u, --user [s]', '数据库用户名')
    .option('-p, --password [s]', '数据库密码')
    .option('--database <s>', '数据名称')
    .option('-o, --output-file [s]', '输出文件名')
    .parse(process.argv);

const params = pick(program, ['host', 'user', 'password', 'database', 'outputFile']);

sqlToMarkdown(params);
