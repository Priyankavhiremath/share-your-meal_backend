const express = require('express');
const router = express.Router();

const { getAllUsers,
  getOneUser,
  createOneUser,
  deleteOneUser,
  update } = require('../controllers/registerUserController')

  const authorize = require('../middlewares/authorizeUser')

router.get('/', authorize, getAllUsers)
router.get('/:id', getOneUser)
router.post('/', createOneUser)
router.delete('/:id', deleteOneUser)
router.put('/:id', update)

module.exports = router;
