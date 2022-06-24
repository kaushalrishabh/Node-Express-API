import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { createUser, deleteUser, getAllUser, getUser, updateUser } from '../actions/users.js';

const router = express.Router();

let users = [];

// All routes stars from users
router.get('/', getAllUser);

//Add new user
router.post('/', createUser);

// req.Params 
router.get('/:id', getUser);

//Deleting Users
router.delete('/:id', deleteUser);

//Update User
router.patch('/:id', updateUser);


export default router;