const { customers, stock } = require("./inventory.js");

const nodePost = (req, res) => {
  const orderDetails = req.body;
  const existingCustomerName = customers.map((element) => {
    if (
      (element.givenName + " " + element.surname).toLowerCase() !==
      (orderDetails.givenName + " " + orderDetails.surname).toLowerCase()
    ) {
      return false;
    } else return true;
  });

  const existingCustomerEmail = customers.map((element) => {
    if (element.email !== orderDetails.email) {
      return false;
    } else {
      return true;
    }
  });

  const validEmail = orderDetails.email.includes("@");

  const validCountry = orderDetails.country.toLowerCase() === "canada";

  let isInStock = stock[orderDetails.order] !== "0";

  let validTshirtSize = false;

  if (orderDetails.order === "tshirt") {
    if (stock.tshirt[orderDetails.size] === "0") {
      isInStock = false;
    } else {
      isInStock = true;
    }
    if (orderDetails.size !== "undefined") {
      validTshirtSize = true;
    } else {
      validTshirtSize = false;
    }
  }

  if (existingCustomerName.includes(true) || existingCustomerEmail === true) {
    res.status(404).json({
      status: "error",
      error: "repeat-customer",
    });
  } else if (!validEmail) {
    res.status(404).json({
      status: "error",
      error: "missing-data",
    });
  } else if (!validCountry) {
    res.status(404).json({
      status: "error",
      error: "undeliverable",
    });
  } else if (!isInStock) {
    res.status(404).json({
      status: "error",
      error: "unavailable",
    });
  } else if (orderDetails.order === "tshirt" && !validTshirtSize) {
    res.status(404).json({
      status: "error",
      error: "missing-data",
    });
  } else {
    customers.push({
      givenName: orderDetails.givenName,
      surname: orderDetails.surname,
      email: orderDetails.email,
      address: orderDetails.address,
      city: orderDetails.city,
      province: orderDetails.province,
      postcode: orderDetails.postcode,
      country: orderDetails.country,
    });
    res.status(200).json({
      status: "success",
    });
  }
};

module.exports = { nodePost };
