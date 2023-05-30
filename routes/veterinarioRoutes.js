import express from 'express';
import { perfil, registrar } from '../controllers/veterinarioController.js';
const router = express.Router();

router.get('/', registrar);

router.get('/perfil', perfil);

export default router;
