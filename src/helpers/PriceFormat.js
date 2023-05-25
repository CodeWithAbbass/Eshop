const PriceFormat = (price) => {
  if (price > 0) {
    return Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
      fixedDecimalScale: true,
    }).format(price);
  }
};
export default PriceFormat;
