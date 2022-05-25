import { Router } from 'express';

const router = Router();
import * as personasCtrl from '../controllers/persona.controller'

router.get('/', personasCtrl.getPersonas);
router.post('/', personasCtrl.crearPersonas);

export default router;