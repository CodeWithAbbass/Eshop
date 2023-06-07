const validator = require("../helpers/validate");
const FormValidator = async (req, res, next) => {
  const validationRule = {
    name: "required|string|min:3",
    email: "required|string|email",
    phone: "required|string|min:11",
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
  FormValidator,
};
