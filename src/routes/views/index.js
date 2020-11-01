import express from 'express'
import PostController from '../../controllers/PostController'

const router = express.Router()

router.get('/', PostController.getIndexView)
router.get('/history', PostController.getHistoryView)

export default router