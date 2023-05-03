const { Product } = require('../models');

const productData = [
  {
    product_name: 'Plain T-Shirt',
    price: 14.99,
    stock: 14,
    CategoryId: 1,
  },
  {
    product_name: 'Running Sneakers',
    price: 90.0,
    stock: 25,
    CategoryId: 5,
  },
  {
    product_name: 'Branded Baseball Hat',
    price: 22.99,
    stock: 12,
    CategoryId: 4,
  },
  {
    product_name: 'Top 40 Music Compilation Vinyl Record',
    price: 12.99,
    stock: 50,
    CategoryId: 3,
  },
  {
    product_name: 'Cargo Shorts',
    price: 29.99,
    stock: 22,
    CategoryId: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
