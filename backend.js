const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
const port = 3000

app.use(cors())
app.use(express.static('kepek'))
app.use(express.json())

var connection
function kapcsolat(){
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'stephen_king'
      })
      
      connection.connect()
}

/*app.get('/', (req, res) => {
  res.send('Hello World!')
})*/


//---------kapcsolatok-------------\\
app.get('/konyv', (req, res) => {
    kapcsolat()
  
    connection.query('SELECT * FROM konyv', (err, rows, fields) => {
    if (err) throw err
  
    console.log(rows)
    res.send(rows)
  })
  
  connection.end()
  })
//---------kapcsolatok-------------\\


  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
