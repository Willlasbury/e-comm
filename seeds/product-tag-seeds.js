const { ProductTag } = require('../models');

const productTagData = [
  {
    ProductId: 1,
    TagId: 6,
  },
  {
    ProductId: 1,
    TagId: 7,
  },
  {
    ProductId: 1,
    TagId: 8,
  },
  {
    ProductId: 2,
    TagId: 6,
  },
  {
    ProductId: 3,
    TagId: 1,
  },
  {
    ProductId: 3,
    TagId: 3,
  },
  {
    ProductId: 3,
    TagId: 4,
  },
  {
    ProductId: 3,
    TagId: 5,
  },
  {
    ProductId: 4,
    TagId: 1,
  },
  {
    ProductId: 4,
    TagId: 2,
  },
  {
    ProductId: 4,
    TagId: 8,
  },
  {
    ProductId: 5,
    TagId: 3,
  },
];

const seedProductTags = () => ProductTag.bulkCreate(productTagData);

module.exports = seedProductTags;
