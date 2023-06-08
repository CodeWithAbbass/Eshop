const validator = require("../helpers/validate");
const orderFormValidation = async (req, res, next) => {
  const validationRule = {
    products: "required",
    paymentmethod: "required|string",
    shipaddress: "required|string",
  };

  await validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: "Validation failed",
        data: err,
      });
    } else {
      next();
    }
  }).catch((err) => console.log(err));
};
module.exports = {
  orderFormValidation,
};
