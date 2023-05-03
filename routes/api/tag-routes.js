const router = require("express").Router();
const { Tag, Product, Category, ProductTag } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  try {
    const data = await Tag.findAll({
      include: [
        {
          model: Product,
          through: { ProductTag },
        },
      ],
    });
    if (data.length === 0) {
      return res.status(404).json({ msg: "No Tags in database" });
    }
    return res.json(data);
  } catch (err) {
    console.log("err:", err);
    return res.status(500).json({ msg: "there was an error", err: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const data = await Tag.findOne({
      where: { id: req.params.id },
      // include: [Category],
    });
    if (!data) {
      return res.status(404).json({ msg: "Could not find Tag with that id" });
    }
    return res.json(data);
  } catch (err) {
    console.log("err:", err);
    return res.status(500).json({ msg: "error occured", err: err });
  }
});

router.post("/", async (req, res) => {
  try {
    const data = await Tag.create({
      tag_name: req.body.tag_name,
    });
    return res.json(data);
  } catch (err) {
    console.log("err:", err);
    return res.status(500).json({ msg: "error occured", err: err });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const data = await Tag.update(
      {
        tag_name: req.body.tag_name,
      },
      { where: { id: req.params.id } }
    );
    if (!data[0]) {
      return res.status(404).json({ msg: "no Tag with this id in database!" });
    }
    return res.json(data);
  } catch (err) {
    console.log("err:", err);
    return res.status(500).json({ msg: "error occured", err: err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const data = await Tag.destroy({ where: { id: req.params.id } });
    if (!data) {
      return res.status(404).json({ msg: "no Tag with this id in database!" });
    }
    return res.json(data);
  } catch (err) {
    console.log("err:", err);
    return res.status(500).json({ msg: "error occured", err: err });
  }
});

module.exports = router;
