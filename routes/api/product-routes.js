const router = require("express").Router();
const { Product, Category } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  try {
    const data = await Product.findAll({
      include: [Category],
    });
    if (data.length === 0) {
      return res.status(404).json({ msg: "No products in database" });
    }
    return res.json(data);
  } catch (err) {
    console.log("err:", err);
    return res.status(500).json({ msg: "there was an error", err: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const data = await Product.findOne({
      where: { id: req.params.id },
      include: [Category],
    });
    if (!data) {
      return res
        .status(404)
        .json({ msg: "Could not find Product with that id" });
    }
    return res.json(data);
  } catch (err) {
    console.log("err:", err);
    return res.status(500).json({ msg: "error occured", err: err });
  }
});

router.post("/", async (req, res) => {
  try {
    const data = await Product.create({
      product_name: req.body.product_name,
      price: req.body.price,
      stock: req.body.stock,
    });
    return res.json(data);
  } catch (err) {
    console.log("err:", err);
    return res.status(500).json({ msg: "error occured", err: err });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const data = await Product.update(
      {
        product_name: req.body.product_name,
        price: req.body.price,
        stock: req.body.stock
      },
      { where: { id: req.params.id } }
    );
    if (!data[0]) {
      return res
        .status(404)
        .json({ msg: "no Product with this id in database!" });
    }
    return res.json(data);
  } catch (err) {
    console.log("err:", err);
    return res.status(500).json({ msg: "error occured", err: err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const data = await Product.destroy({ where: { id: req.params.id } });
    if (!data) {
      return res
        .status(404)
        .json({ msg: "no Product with this id in database!" });
    }
    return res.json(data);
  } catch (err) {
    console.log("err:", err);
    return res.status(500).json({ msg: "error occured", err: err });
  }
});

module.exports = router;
