const controllers = require('../controller/index.js')
const router = require('express').Router()

router.get('/get', controllers.Car)
router.post('/purchase', controllers.purchaseCar)
router.get('/query', controllers.UpdateCar)

module.exports = router