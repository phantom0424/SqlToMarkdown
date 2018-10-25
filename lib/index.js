var mysql = require('mysql');
var _ = require('lodash');
var mdTable = require('markdown-table')
const fs = require('fs');

async function sqlToMarkdown ({host, user, password, database, outputFile}) {
    host = host || 'localhost';
    user = user || 'root';
    outputFile = outputFile || 'sql.md';
    if (!database) {
        throw new Error('database is required!')
    }
    var connection = mysql.createConnection({ host, user, password, database });
    
    connection.connect();
    
    const query = sql => new Promise((resolve) => {
        connection.query(sql, function (error, results, fields) {
            if (error) throw error;
            resolve(results)
        })
    });

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
}

module.exports = sqlToMarkdown
