var mysql = require('mysql');
var _ = require('lodash');
var mdTable = require('markdown-table')
const fs = require('fs');

const database = 'cjyun_2.1';
const outputFile = 'sql.md'
var connection = mysql.createConnection({
    host     : '10.0.3.10',
    user     : 'root',
    password : '111111',
    database
});

connection.connect();

const query = sql => new Promise((resolve) => {
    connection.query(sql, function (error, results, fields) {
        if (error) throw error;
        resolve(results)
    })
});

(async function () {
    let tables = await query('SHOW tables');
    tables = tables.map(table => table[`Tables_in_${database}`])
    fs.existsSync(outputFile) && fs.unlinkSync(outputFile);
    for (table of tables) {
        fs.appendFileSync(outputFile, '## ' + table + '\n')
        let columns = await query(`SHOW FULL COLUMNS FROM ${table}`);
        let fields = columns.map((column, index) => {
            let des = _.values(_.pick(column, ['Field', 'Type', 'Default', 'Comment']))
            des.unshift(index + 1)
            return des
        })
        fields.unshift(['序号', '名称', '类型', '默认值', '备注'])
        fs.appendFileSync(outputFile, mdTable(fields) + '\n')
        fs.appendFileSync(outputFile, '\n')
    }
    connection.end();
})();
