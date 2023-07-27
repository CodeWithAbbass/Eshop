const ColorFinder = (status) => {
  switch (status) {
    case "pending":
      return "warning text-muted";
    case "shipped":
      return "info text-white";
    case "cancelled":
      return "danger text-white";
    case "returned":
      return "danger text-white";
    case "delivered":
      return "success text-white";
    default:
      return "warning text-muted";
  }
};

export default ColorFinder;
