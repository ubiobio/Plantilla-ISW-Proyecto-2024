"use strict";
import User from "../entity/user.entity.js";
import { AppDataSource } from "./configDb.js";
import { encryptPassword } from "../helpers/bcrypt.helper.js";

async function createUsers() {
  try {
    const userRepository = AppDataSource.getRepository(User);

    const count = await userRepository.count();
    if (count > 0) return;

    await Promise.all([
      userRepository.save(
        userRepository.create({
          nombreCompleto: "Nombre usuario",
          rut: "21.308.770-3",
          email: "user@alumnos.ubiobio.cl",
          password: await encryptPassword("user123"),
          rol: "usuario",
        }),
      ),
      userRepository.save(
        userRepository.create({
          nombreCompleto: "Nombre administrador",
          rut: "20.308.770-3",
          email: "administrador@alumnos.ubiobio.cl",
          password: await encryptPassword("admin123"),
          rol: "administrador",
        }),
      ),
    ]);
    console.log("* => Usuarios creados exitosamente");
  } catch (error) {
    console.error("Error al crear usuarios:", error);
  }
}

export { createUsers };
