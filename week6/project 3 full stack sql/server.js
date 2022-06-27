const express = require("express");
const cors = require('cors');
const mysql = require("mysql2");
const app = express();
const bodyParser= require('body-parser')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Todos'
})


app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));


const PORT = 9000;

db.connect((err) => {
    if (err){
        throw err;
    }
    console.log("MySql Database Connection Established Successfully!");
})

app.post('/addTodo', (req, res) => {
    const text = req.body.text;
    let sql = "INSERT INTO todos (text) VALUES (?)";
    db.query(sql,[text], (err, result) => {
        if(err) {
            throw err;
        }
        res.send(result); 
        console.log("Record Inserted in the Table Successfully!")
    })
})

app.get('/allTodos', (req, res) => {
    let sql = "SELECT * FROM todos";
    db.query(sql, (err, result) => {
        if(err) {
            throw err;
        }
        res.send(result); 
        console.log(result)
    })
})

app.put('/UpdateTodo/:id', (req, res) => {
    const text = req.body.text
    const id= req.body.id
    let sql = `UPDATE todos SET text = '${text}' WHERE id = ${id}`;
    db.query(sql, [text, id], (err, result) => {
        if(err) {
            throw err;
        }
        res.send("Updated Row Successfully!"); 
        console.log(result)
    })
})


app.delete('/DeleteTodo/:id', (req, res) => {
    const id = req.params.id;
    let sql = 'DELETE FROM todos WHERE id = ?';
    db.query(sql,id, (err, result) => {
        if(err) {
            throw err;
        }
        res.send("Row Deleted Successfully"); 
        console.log(result)
    })
})

app.get('/completeTodo/:id/:boolean', (req, res) => {
    let sql = `UPDATE todos SET isCompleted = ${req.params.boolean} WHERE id = ${req.params.id} `;
    console.log(sql)
    db.query(sql, (err, result) => {
        if(err) {
            throw err;
        }
        res.send(result); 
        console.log(result)
    })
})

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
})
