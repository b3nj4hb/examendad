import { Router } from 'express';

const router = Router();
import * as rolesCtrl from '../controllers/rol.controller'

router.get('/', rolesCtrl.getRoles);
router.get('/:id', rolesCtrl.getRolId);
router.post('/', rolesCtrl.crearRol);
router.put('/:id', rolesCtrl.updateRol);
router.delete('/:id', rolesCtrl.deleteRol);

export default router;