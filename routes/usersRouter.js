const express = require('express');
const router = express.Router();

const { getAllUsers,
  getOneUser,
  createOneUser,
  updateEmail,
  updateNickName,
  updateLocation,
  updateLanguages,
  deleteOneUser } = require('../controllers/registerUserController')

  const authorize = require('../middlewares/authorizeUser')

router.get('/', authorize, getAllUsers)
router.get('/:id', getOneUser)
router.post('/', createOneUser)
router.put('/:email', updateEmail)
router.put('/:nickName', updateNickName)
router.put('/:location', updateLocation)
router.put('/:languages', updateLanguages)
router.delete('/:id', deleteOneUser)

module.exports = router;
