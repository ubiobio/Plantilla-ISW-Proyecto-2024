"use strict";
import bcrypt from "bcryptjs";

export async function encryptPassword(password) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

export async function comparePassword(password, receivedPassword) {
  return await bcrypt.compare(password, receivedPassword);
}