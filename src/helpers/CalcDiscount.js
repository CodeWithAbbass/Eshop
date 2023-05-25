// Minus discount
const CalcDiscount = (discount, amount) => {
  if (+discount > 0) {
    let NewAmount = +amount - (+amount * +discount) / 100;
    return NewAmount;
  } else {
    return +amount;
  }
};
export default CalcDiscount;
