const { updateUser, deleteUser, getUsers, getUser, getUserStats } = require('../controllers/user');
const { verifyTokenAndAuthorize, verifyTokenAndAdmin } = require('../middlewares/verifyToken');
const router = require('express').Router();

router.route('/').get(verifyTokenAndAdmin, getUsers);
router.route('/stats').get(verifyTokenAndAdmin, getUserStats);
router
    .route('/:id')
    .get(verifyTokenAndAdmin, getUser)
    .patch(verifyTokenAndAuthorize, updateUser)
    .delete(verifyTokenAndAuthorize, deleteUser);

module.exports = router;