import User from "../entity/user.entity.js";
import { AppDataSource } from "../config/configDb.js";
import {
handleErrorClient,
handleErrorServer,
} from "../handlers/responseHandlers.js";

export async function isAdmin(req, res, next) {
try {
    const userRepository = AppDataSource.getRepository(User);

    const userFound = await userRepository.findOneBy({ email: req.user.email });

    if (!userFound) {
    return handleErrorClient(
        res,
        401,
        "Usuario no encontrado en la base de datos",
    );
    }

    const rolUser = userFound.rol;

    if (rolUser === "administrador") {
    next();
    return;
    }

    return handleErrorClient(
    res,
    401,
    "Se requiere un rol de administrador para realizar esta acción",
    );
} catch (error) {
    handleErrorServer(
    res,
    500,
    "Error en authorization.middleware -> isAdmin()",
    error.message,
    );
}
}