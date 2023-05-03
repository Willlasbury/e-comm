const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  try {
    const data = await Category.findAll({
      include: [Product]
    });
    if (data.length === 0) {
      return res.status(404).json({ msg: "No categories in database" });
    }
    return res.json(data);
  } catch (err) {
    console.log("err:", err);
    return res.status(500).json({ msg: "there was an error", err: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const data = await Category.findOne({
      where: { id: req.params.id }, 
        include: [Product]
      
    });
    if (!data) {
      return res
        .status(404)
        .json({ msg: "Could not find category with that id" });
    }
    return res.json(data);
  } catch (err) {
    console.log("err:", err);
    return res.status(500).json({ msg: "error occured", err: err });
  }
});

router.post("/", async (req, res) => {
  try {
    const data = await Category.create({
      category_name: req.body.name,
    });
    return res.json(data);
  } catch (err) {
    console.log("err:", err);
    return res.status(500).json({ msg: "error occured", err: err });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const data = await Category.update(
      { category_name: req.body.name },
      { where: { id: req.params.id } }
    );
    if (!data[0]) {
      return res
        .status(404)
        .json({ msg: "no category with this id in database!" });
    }
    return res.json(data);
  } catch (err) {
    console.log("err:", err);
    return res.status(500).json({ msg: "error occured", err: err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const data = await Category.destroy({where: {id: req.params.id}})
    if (!data) {
      return res
        .status(404)
        .json({ msg: "no category with this id in database!" });
    }
    return res.json(data);
  } catch (err) {
    console.log("err:", err);
    return res.status(500).json({ msg: "error occured", err: err });
  }
});

module.exports = router;
