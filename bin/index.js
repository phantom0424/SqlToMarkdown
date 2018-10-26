#!/usr/bin/env node

const program = require('commander');
const pick = require('lodash/pick');

var sqlToMarkdown = require('../lib');

program
    .version('1.0.0')
    .option('-h, --host [s]', 'database host，default："localhost"')
    .option('-u, --user [s]', 'database user，default："root"')
    .option('-p, --password [s]', 'database password，default：""')
    .option('--database <s>', 'database name')
    .option('-o, --output-file [s]', 'output file name，default："sql.md"')
    .parse(process.argv);

const params = pick(program, ['host', 'user', 'password', 'database', 'outputFile']);

sqlToMarkdown(params);
