var inquirer = require("inquirer")
var mysql = require("mysql2/promise")
const cTable = require('console.table')

try {
    cli();
}
catch (error) {
    connection.end;
}

async function cli() {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'rootroot',
        database: 'company_db'
    })
}

const { choice } = await inquirer.prompt([
    {
        message: 
    }
])