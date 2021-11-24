const { Router } = require('express');
const apiControllers = require('../controllers/apiControllers');

const router = Router();

router.get('/', apiControllers.api_getMany);
router.post('/', apiControllers.api_post);
router.get('/:id', apiControllers.api_getSingle);
router.delete('/:id', apiControllers.api_delete);
router.put('/:id', apiControllers.api_put);

module.exports = router;