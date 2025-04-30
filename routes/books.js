import express from 'express';
import { create, update, remove , getAll} from '../controllers/booksController.js';

const router = express.Router();

router.get( '/', getAll )
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', remove);

export default router;
