const express = require('express')
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'kfs985A&',
    database: 'CRUD'
})

app.get('/', (req,res) =>{

    const sql = "insert into CRUDdb (movie, review) values ('inception', 'good movie');"
    
    db.query(sql, (err, result) => {
        
        res.send("hello world")
    })
    res.send();
})

app.listen(8080, () =>{
    console.log("running on port 8080");
})

