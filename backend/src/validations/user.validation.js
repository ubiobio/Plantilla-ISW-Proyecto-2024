"use strict";
import Joi from "joi";

const domainEmailValidator = (value, helper) => {
  if (!value.endsWith("@gmail.cl")) {
    return helper.message(
      "El correo electrónico debe ser del dominio @gmail.cl",
    );
  }
  return value;
};

export const userQueryValidation = Joi.object({
  id: Joi.number().integer().positive().optional().messages({
    "number.base": "El id debe ser un número.",
    "number.integer": "El id debe ser un número entero.",
    "number.positive": "El id debe ser un número positivo.",
    "any.required": "El id es obligatorio.",
  }),
  email: Joi.string()
    .min(15)
    .max(30)
    .email()
    .optional()
    .messages({
      "string.empty": "El correo electrónico no puede estar vacío.",
      "any.required": "El correo electrónico es obligatorio.",
      "string.base": "El correo electrónico debe ser de tipo string.",
      "string.email":
        "El correo electrónico debe finalizar en @alumnos.ubiobio.cl.",
      "string.min":
        "El correo electrónico debe tener como mínimo 15 caracteres.",
      "string.max":
        "El correo electrónico debe tener como máximo 30 caracteres.",
    })
    .custom(domainEmailValidator, "Validación dominio email"),
  rut: Joi.string()
    .min(9)
    .max(12)
    .pattern(/^\d{1,2}(\.\d{3}){2}-[\dkK]$|^\d{7,8}-[\dkK]$/)
    .optional()
    .messages({
      "string.empty": "El Rut no puede estar vacío.",
      "any.required": "El Rut es obligatorio.",
      "string.base": "El Rut debe ser de tipo string.",
      "string.min": "El Rut debe tener como mínimo 9 caracteres.",
      "string.max": "El Rut debe tener como máximo 12 caracteres.",
      "string.pattern.base": "El Rut debe ser con el formato 12.345.678-9 o 12345678-9",
    }),
})
  .or("id", "email", "rut")
  .messages({
    "object.unknown": "No se permiten propiedades adicionales.",
    "object.missing":
      "Debes proporcionar al menos un parametro: id, email o rut.",
  });

export const userBodyValidation = Joi.object({
  nombreCompleto: Joi.string()
    .min(3)
    .max(50)
    .pattern(new RegExp("^[a-zA-Z\\s]+$"))
    .optional()
    .messages({
      "string.empty": "El nombre completo no puede estar vacío.",
      "any.required": "El nombre completo es obligatorio.",
      "string.base": "El nombre completo debe ser de tipo string.",
      "string.min": "El nombre completo debe tener como mínimo 3 caracteres.",
      "string.max": "El nombre completo debe tener como máximo 50 caracteres.",
      "string.pattern.base": "El nombre completo permite solo letras de la a-z",
  }),
  email: Joi.string()
    .min(15)
    .max(30)
    .email()
    .optional()
    .messages({
      "string.empty": "El correo electrónico no puede estar vacío.",
      "any.required": "El correo electrónico es obligatorio.",
      "string.base": "El correo electrónico debe ser de tipo string.",
      "string.email": "El correo electrónico debe tener un formato válido.",
      "string.min":
        "El correo electrónico debe tener como mínimo 15 caracteres.",
      "string.max":
        "El correo electrónico debe tener como máximo 30 caracteres.",
    })
    .custom(domainEmailValidator, "Validación dominio email"),
  password: Joi.string()
    .min(8)
    .max(26)
    .pattern(new RegExp("^[a-zA-Z0-9]+$"))
    .optional()
    .messages({
      "string.empty": "La contraseña no puede estar vacía.",
      "any.required": "La contraseña es obligatoria.",
      "string.base": "La contraseña debe ser de tipo string.",
      "string.min": "La contraseña debe tener como mínimo 8 caracteres.",
      "string.max": "La contraseña debe tener como máximo 26 caracteres.",
      "string.pattern.base":
        "La contraseña solo puede contener letras y números.",
    }),
  newPassword: Joi.string()
    .min(8)
    .max(26)
    .pattern(new RegExp("^[a-zA-Z0-9]+$"))
    .optional()
    .messages({
      "string.empty": "La nueva contraseña no puede estar vacía.",
      "any.required": "La nueva contraseña es obligatoria.",
      "string.base": "La nueva contraseña debe ser de tipo string.",
      "string.min": "La nueva contraseña debe tener como mínimo 8 caracteres.",
      "string.max": "La nueva contraseña debe tener como máximo 26 caracteres.",
      "string.pattern.base":
        "La nueva contraseña solo puede contener letras y números.",
    }),
  rut: Joi.string()
    .min(9)
    .max(12)
    .pattern(/^\d{1,2}(\.\d{3}){2}-[\dkK]$|^\d{7,8}-[\dkK]$/)
    .optional()
    .messages({
      "string.empty": "El Rut no puede estar vacío.",
      "any.required": "El Rut es obligatorio.",
      "string.base": "El Rut debe ser de tipo string.",
      "string.min": "El Rut debe tener como mínimo 9 caracteres.",
      "string.max": "El Rut debe tener como máximo 12 caracteres.",
      "string.pattern.base": "El Rut debe ser con el formato 12.345.678-9 o 12345678-9",
    }),
  rol: Joi.string().min(4).max(15).optional().messages({
    "string.base": "El rol debe ser de tipo string.",
    "string.min": "El rol debe tener como mínimo 4 caracteres.",
    "string.max": "El rol debe tener como máximo 15 caracteres.",
  }),
})
  .or("nombreCompleto", "email", "password", "newPassword", "rut", "rol")
  .messages({
    "object.unknown": "No se permiten propiedades adicionales.",
  });
