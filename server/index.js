const express = require('express');
const mongos = require('mongoose');
const products = require('./routes/products')
const users = require('./routes/users')
const port = process.env.PORT || 3000;

mongos.connect('mongodb://localhost/mydb', { useNewUrlParser: true })
  .then(() => console.log("Conncected to MongoDB"))
  .catch(err => console.log('Not connceted'));

const app = express();
app.use('/products', products);  
app.use('/users', users); 


app.listen(port, () =>{
  console.log(`Ekart app listining on port ${port}`)
})

