
const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  brand: 'string',
  model: 'string',
  carId: 'number',
  price: 'number',
  status: 'string'
});

const purchaseSchema = new mongoose.Schema({
  orderId: 'string',
  brand: 'string',
  model: 'string',
  carId: 'number',
  price: 'number',
  orderDate: 'string'
});

const UpdateSchema = new mongoose.Schema({
    brand: 'string',
    model: 'string',
    carId: 'number',
    price: 'number',
    status: 'string'
  }); 

const Car = mongoose.model('Car', carSchema);
const Purchase = mongoose.model('PurchaseCar', purchaseSchema);
const Update = mongoose.model('UpdateCar', UpdateSchema);

module.exports = { Car, Purchase, Update };  