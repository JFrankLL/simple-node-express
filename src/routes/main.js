const router = require('express').Router();
const controller = require('../controllers/main');
// Middlewares
const auth = require('../middlewares/Auth');

router.get('/', auth, controller.get);
router.post('/', controller.post);
router.put('/', controller.put);
router.delete('/', controller.delete);

module.exports = router;
