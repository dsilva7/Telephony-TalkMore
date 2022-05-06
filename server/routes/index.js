const { Router } = require("express");
const { calculatePrice } = require("../controllers/priceController");
const router = Router();

router.get("/price", (req, res) => {
  const { originDDD, targetDDD, time, planId } = req.query;
  try {
    const price = calculatePrice(
      originDDD,
      targetDDD,
      Number(planId),
      Number(time)
    );

    res.send(price);
    res.status(200);
  } catch (e) {
    res.send({ message: e.message || e });
    res.status(400);
  }
});

module.exports = router;
