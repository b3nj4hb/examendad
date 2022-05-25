import { Router } from 'express';

const router = Router();
import * as usuariosCtrl from '../controllers/usuario.controller'

router.get('/', usuariosCtrl.getUsuarios);
router.post('/', usuariosCtrl.getUsuarioId);
router.post('/', usuariosCtrl.crearUsuario);

export default router;