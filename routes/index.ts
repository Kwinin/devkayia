import PromiseRouter from 'express-promise-router'
const router = PromiseRouter()

router.get('/error', (req, res) => {
  throw new Error('wow such error')
})
module.exports = router
