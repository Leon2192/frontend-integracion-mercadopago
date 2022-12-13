const express = require("express");
const router = express.Router();

const PaymentController = require("../Controllers/PaymentsController");
const PaymentService = require("../Services/PaymentsService");

const PaymentInstance = new PaymentController(new PaymentService());

//API - PARA CREAR LOS LINK DE PAGO

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json({
    "/payment": "Genera un payment Link",
    "/subscription": "Genera un Link de subscripción",
  });
});

router.post("/payment", function (req, res, next) {
  PaymentInstance.getPaymentLink(req, res);
});

router.post("/subscription", function (req, res, next) {
  PaymentInstance.getSubscriptionLink(req, res);
});

module.exports = router;
