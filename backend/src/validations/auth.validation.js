"use strict";
import Joi from "joi";

const domainEmailValidator = (value, helper) => {
  if (!value.endsWith("@alumnos.ubiobio.cl")) {
    return helper.message(
      "El correo electrónico debe ser del dominio @alumnos.ubiobio.cl",
    );
  }
  return value;
};

export const cookieValidation = Joi.object({
  jwt: Joi.string().required().messages({
    "string.base": "El token debe ser un texto.",
    "string.empty": "El token no puede estar vacío.",
    "any.required": "El token es obligatorio.",
  }),
}).messages({
  "object.unknown": "No se permiten propiedades adicionales.",
});

export const authValidation = Joi.object({
  email: Joi.string()
    .min(17)
    .max(40)
    .email()
    .required()
    .messages({
      "string.empty": "El correo electrónico no puede estar vacío.",
      "any.required": "El correo electrónico es obligatorio.",
      "string.base": "El correo electrónico debe ser de tipo string.",
      "string.email": "El correo electrónico debe tener un formato válido.",
      "string.min":
        "El correo electrónico debe tener como mínimo 17 caracteres.",
      "string.max":
        "El correo electrónico debe tener como máximo 30 caracteres.",
    })
    .custom(domainEmailValidator, "Validación dominio email"),
  password: Joi.string()
    .min(3)
    .max(30)
    .pattern(new RegExp("^[a-zA-Z0-9]+$"))
    .required()
    .messages({
      "string.empty": "La contraseña no puede estar vacía.",
      "any.required": "La contraseña es obligatoria.",
      "string.base": "La contraseña debe ser de tipo string.",
      "string.min": "La contraseña debe tener como mínimo 3 caracteres.",
      "string.max": "La contraseña debe tener como máximo 30 caracteres.",
      "string.pattern.base":
        "La contraseña solo puede contener letras y números.",
    }),
}).messages({
  "object.unknown": "No se permiten propiedades adicionales.",
});

export const registerValidation = Joi.object({
  nombreCompleto: Joi.string().min(3).max(50).required().messages({
    "string.empty": "El nombre completo no puede estar vacío.",
    "any.required": "El nombre completo es obligatorio.",
    "string.base": "El nombre completo debe ser de tipo string.",
    "string.min": "El nombre completo debe tener como mínimo 3 caracteres.",
    "string.max": "El nombre completo debe tener como máximo 50 caracteres.",
  }),
  rut: Joi.string()
    .min(9)
    .max(12)
    .pattern(/^\d{1,2}\.?\d{3}\.?\d{3}-[\dkK]$/)
    .required()
    .messages({
      "string.empty": "El RUT no puede estar vacío.",
      "any.required": "El RUT es obligatorio.",
      "string.base": "El RUT debe ser de tipo string.",
      "string.min": "El RUT debe tener como mínimo 9 caracteres.",
      "string.max": "El RUT debe tener como máximo 12 caracteres.",
      "string.pattern.base": "El RUT no tiene un formato válido.",
    }),
  email: Joi.string()
    .min(20)
    .max(36)
    .email()
    .required()
    .messages({
      "string.empty": "El correo electrónico no puede estar vacío.",
      "any.required": "El correo electrónico es obligatorio.",
      "string.base": "El correo electrónico debe ser de tipo string.",
      "string.email": "El correo electrónico debe tener un formato válido.",
      "string.min":
        "El correo electrónico debe tener como mínimo 17 caracteres.",
      "string.max":
        "El correo electrónico debe tener como máximo 30 caracteres.",
    })
    .custom(domainEmailValidator, "Validación dominio email"),
  password: Joi.string()
    .min(3)
    .max(30)
    .pattern(new RegExp("^[a-zA-Z0-9]+$"))
    .required()
    .messages({
      "string.empty": "La contraseña no puede estar vacía.",
      "any.required": "La contraseña es obligatoria.",
      "string.base": "La contraseña debe ser de tipo string.",
      "string.min": "La contraseña debe tener como mínimo 3 caracteres.",
      "string.max": "La contraseña debe tener como máximo 30 caracteres.",
      "string.pattern.base":
        "La contraseña solo puede contener letras y números.",
    }),
}).messages({
  "object.unknown": "No se permiten propiedades adicionales.",
});