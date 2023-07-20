const validator = require("../helpers/validate");
const productFormValidation = async (req, res, next) => {
  const validationRule = {
    title: "required|string|min:5",
    price: "required",
    stock: "required",
    images: "required",
    smalldesc: "required|string|min:8",
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
  productFormValidation,
};
