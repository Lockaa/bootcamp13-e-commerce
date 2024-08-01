const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

//http://localhost:3001/api/categories/
router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  const categories = await Category.findAll({
    include: [{model: Product}]
  });
  res.json(categories);
});

//http://localhost:3001/api/categories/1
router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const category = await Category.findOne({
    include: [{model: Product}],
    where: {
      id: req.params.id
    }
  });
  res.json(category);
});

//http://localhost:3001/api/categories/
router.post('/', async (req, res) => {
  // create a new category
  const category = await Category.create(req.body)
  res.json(category);
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  const category = await Category.update(req.body,
    {
      where: {id: req.params.id}
  })
  res.json(category);
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const category = await Category.destroy({
      where: {id: req.params.id}
  })
  res.json(category);
});

module.exports = router;
