"use strict";
import { Router } from "express";
import { isAdmin } from '../middlewares/authorization.middleware.js';
import { authenticateJwt } from '../middlewares/authentication.middleware.js';
import {
    getUser,
    getUsers,
    updateUser,
    deleteUser
} from '../controllers/user.controller.js';

const router = Router();

router
    .use(authenticateJwt)
    .use(isAdmin);

router
    .get('/', getUsers)
    .get('/detail/', getUser)
    .put('/detail/', updateUser)
    .delete('/detail/', deleteUser);

export default router;