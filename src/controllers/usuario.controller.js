import { pool } from '../database'

export const getUsuarios = async (req, res) =>{
    try {
        const reponse = await pool.query('select * from fc_listar_usuario()');
        return res.status(200).json(reponse.rows);
    } catch (error) {
        return res.status(500).json('Error al listar Usuarios => '+error.message);
    }
};
export const getUsuarioId = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select * from fc_listar_rol_id($1)', [id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar los Roles');
    }
}
export const crearUsuario = async (req, res) =>{
    try {
        const {username, password, idpersona, idrol} = req.body;
        await pool.query('select * from fc_create_usuario($1,$2,$3,$4)',[username, password, idpersona, idrol]);
        return res.status(200).json({
            message: 'Post registrado correctamente'
        });
    } catch (error) {
        return res.status(500).json('Error al registrar Posts => '+error.message);
    }
};