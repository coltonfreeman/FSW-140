const express = require('express')
const mysql = require("mysql2")
const app = express()


const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'Todo' 
    }
)
db.connect((err)=>{  
    if(err){
        throw err
    }
    console.log("database connected successfully")
})

app.get('/CreateDB', (req, res)=>{
    let sqlString = "Create DataBase Todo"
    db.query(sqlString, (err, result)=>{
        if(err){
            throw err
        }
        console.log(result)
        res.send('Todo database created successfully')
    })
})

app.get('/createTable', (req,res)=>{
    let myQuery = 'create table Todos (id int auto_increment, Todo varchar(100), message varchar(150), primary key(id))'
    db.query(myQuery, (err, result)=>{
        if(err){
            throw err
        }
        console.log(result)
        res.send('Table was created successfully')
    })
})

app.get('/insertRow1', (req,res)=>{
    let post = {Todo: 'First Todo', message: 'Congrats! First todo via a route'}
    let myQuery = 'insert into Todos set ?'
    db.query(myQuery, post, (err, result)=>{
        if(err){
            throw err
        }
        console.log(result)
        res.send('The first row inserted successfully')
    })
})

app.get('/insertRow2', (req,res)=>{
    let post = {Todo: 'Second Todo', message: 'Congrats! Second todo via a route'}
    let myQuery = 'insert into Todos set ?'
    db.query(myQuery, post, (err, result)=>{
        if(err){
            throw err
        }
        console.log(result)
        res.send('The second row inserted successfully')
    })
})

app.get('/displayRows', (req,res)=>{
    let myQuery = 'select * from Todos'
    db.query(myQuery, (err, result)=>{
        if(err){
            throw err
        }
        console.log(result)
        res.send('SELECT query successful')
    })
})

app.get('/updateRow/:id', (req,res)=>{
    let newTodo = 'Update to the Todo column'
    let myQuery = `Update Todos set Todo = '${newTodo}' where id = ${req.params.id}`
    db.query(myQuery, (err,result)=>{
        if(err){
            throw err
        }
        console.log(result)
        res.send('BAMM! Your Todo UPDATED Successfully')
    })
})

app.get('/deleteRow/:id', (req,res)=>{
    let myQuery = `Deleted from Todos where id = ${req.params.id}`
    db.query(myQuery, (err,result)=>{
        if(err){
            throw err
        }
        console.log(result)
        res.send('Done! The Todo was successfully DELETED')
    })
})

app.listen('3000', ()=>{
    console.log('This server is running ');
});