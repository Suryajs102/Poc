
const methods = require('methods');
const { Car, PurchaseCar,UpdateCar } = require('../service/data.js');

// GET all available cars
const Car = async (req, res) => {
  try {
    const cars = await Car.find({ status: 'AVAILABLE' });
    res.json(cars);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// POST to purchase a car
const purchaseCar = async (req, res) => {
  try {
    const { brand, model, carId } = req.body;

    // Create a new purchase record
    const purchase = new Purchase({
      orderId, // You can generate a unique order ID here
      brand,
      model,
      carId,
      price: 0, // You need to set the actual price
      orderDate: new Date().toLocaleDateString(),
    });

    // Update the car status to 'SOLD'
    await Car.findOneAndUpdate({ brand, model, carId }, { status: 'SOLD' });

    await purchase.save();
    
    res.json({ message: 'Thank you for purchasing '({brand,model}) });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// GET all sold cars
const UpdateCar = async (req, res) => {
  try {
    const soldCars = await Car.find({ status: 'SOLD' });
    res.json(soldCars);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

//module.exports = router;
module.exports ={Car, purchaseCar, UpdateCar}