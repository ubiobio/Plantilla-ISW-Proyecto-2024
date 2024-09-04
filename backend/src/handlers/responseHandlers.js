"use strict";

export function handleSuccess(res, statusCode, message, data = {}) {
  return res.status(statusCode).json({
    status: "Success",
    message,
    data,
  });
}

export function handleErrorClient(res, statusCode, message, details= {}) {
  return res.status(statusCode).json({
    status: "Client error",
    message,
    details
  });
}

export function handleErrorServer(res, statusCode, message) {
  return res.status(statusCode).json({
    status: "Server error",
    message,
  });
}