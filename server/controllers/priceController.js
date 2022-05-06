const { EXCESS_FEE } = require("../../constants");

function getDDDs() {
  return ["011", "016", "017", "018"];
}

function calculatePrice(originDDD, targetDDD, planId, time) {
  //console.log(originDDD, targetDDD, planId, time);
  const tablePrice = [
    {
      origin: "011",
      destiny: "016",
      price: 1.9,
    },

    {
      origin: "016",
      destiny: "011",
      price: 2.9,
    },
    {
      origin: "011",
      destiny: "017",
      price: 1.7,
    },

    {
      origin: "017",
      destiny: "011",
      price: 2.7,
    },

    {
      origin: "011",
      destiny: "018",
      price: 0.9,
    },

    {
      origin: "018",
      destiny: "011",
      price: 1.9,
    },
  ];

  const tablePlan = [
    {
      id: 1,
      name: "FaleMais 30",
      maxTime: 30,
    },
    {
      id: 2,
      name: "FaleMais 60",
      maxTime: 60,
    },
    {
      id: 3,
      name: "FaleMais 120",
      maxTime: 120,
    },
  ];

  const priceItem = tablePrice.find(
    (item) => item.origin === originDDD && item.destiny === targetDDD
  );

  if (!priceItem) throw new Error("Price not found.");

  const plan = tablePlan.find((item) => item.id === planId);

  if (!plan) throw new Error("Plan not found.");

  const surplus = Math.abs(plan.maxTime - time);

  const withPlan = surplus * (priceItem.price * EXCESS_FEE);

  const withoutPlan = time * priceItem.price;

  if (plan.maxTime >= time) {
    return { withPlan: 0, withoutPlan };
  }

  return { withPlan, withoutPlan };
}

module.exports = { calculatePrice };
