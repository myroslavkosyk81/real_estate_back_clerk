import { requireAuth } from '@clerk/express'
import express from 'express';
import { deleteUser, test, updateUser, getUserListings, getUser } from '../controllers/user.controller.js';
import { verifyToken1 } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/test', test);
router.post('/update/:id', verifyToken1, updateUser);
router.delete('/delete/:id', verifyToken1, deleteUser);
router.get('/listings/:id', verifyToken1, getUserListings, requireAuth());
router.get('/:id', verifyToken1, getUser)

export default router;