import express from 'express'
import PostController from '../../controllers/PostController'

const router = express.Router()

router.get('/history', PostController.getHistory)
router.get('/compChoice', PostController.getCompChoice)
router.post('/history', PostController.createHistory)
router.delete('/history', PostController.deleteHistory)

export default router