const { ProductTag } = require('../models');

const productTagData = [
  {
    product_id: 1,
    tagId: 6,
  },
  {
    product_id: 1,
    tagId: 7,
  },
  {
    product_id: 1,
    tagId: 8,
  },
  {
    product_id: 2,
    tagId: 6,
  },
  {
    product_id: 3,
    tagId: 1,
  },
  {
    product_id: 3,
    tagId: 3,
  },
  {
    product_id: 3,
    tagId: 4,
  },
  {
    product_id: 3,
    tagId: 5,
  },
  {
    product_id: 4,
    tagId: 1,
  },
  {
    product_id: 4,
    tagId: 2,
  },
  {
    product_id: 4,
    tagId: 8,
  },
  {
    product_id: 5,
    tagId: 3,
  },
];

const seedProductTags = () => ProductTag.bulkCreate(productTagData);

module.exports = seedProductTags;
