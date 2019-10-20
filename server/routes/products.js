const express = require('express');
const mongos = require('mongoose');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.json());
router.use(express.json());
router.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200'); // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');   // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Credentials', true); // Set to true if you need the website to include cookies in the requests sent
    next();
});

const productSchema = mongos.Schema({
  // "id" : {type: String, required: true},
  "name" :  {type: String, required: true, minlength: 5},
  "price" : {type: String},
  "category" : {type: String},
  "imageUrl" : {type: String}
});
const Product = mongos.model('Product', productSchema);

router.post('/', async(req, res)=> {
    const product = new Product({
        // id: req.body.id,
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        imageUrl: req.body.imageUrl
    });
    // await product.validate();
    try{
        const result = await product.save();
        res.send(result);        
    }
    catch (ex) {
        console.log(ex);
        res.send(ex.message);
    }
});
router.get('/', async(req, res)=> {
    const result = await Product.find();
    res.send(result);
});

module.exports = router;