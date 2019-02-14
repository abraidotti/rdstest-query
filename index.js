const sql = require('mssql')

async function tryQuery() {
    try {
        await sql.connect('mssql://rdstest:rdstestpwd@rdstest.cnx7jaqol3o2.us-east-1.rds.amazonaws.com:1433')
        const result = await sql.query `select @@version`
        console.log(result)
    } catch (err) {
        console.log(err)
    }
};

tryQuery();