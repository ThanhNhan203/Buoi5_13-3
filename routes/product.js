var express = require('express');
var router = express.Router();
let productModel = require('../schemas/products')

/* GET users listing. */
router.get('/', async function(req, res, next) {
  let products = await productModel.find({})
  res.send(products);
});

router.post('/', async function(req, res, next) {
  let body = req.body;
  let newProduct = new productModel({
    name: body.name,
    price: body.price,
    quantity: body.quantity,
    description: body.description,
    urlImg: body.urlImg,
    //category: body.category
  })
  await newProduct.save();
  res.status(201).send(newProduct);
});

module.exports = router;