import express from 'express';
import {getData} from '../controllers/UserController.js';

const router = express.Router();

router.get("/", getData);

export default router;