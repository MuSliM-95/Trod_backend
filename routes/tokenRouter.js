const Router = require("express")
const {tokenControllers} = require('../controllers/tokenControllers')

const router = Router()

router.post('/tokens', tokenControllers.add)
router.get('/tokens', tokenControllers.get)
router.patch('/tokens/:id', tokenControllers.patch)


module.exports = router