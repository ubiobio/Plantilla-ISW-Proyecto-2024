"use strict";
import passport from "passport";

export function authenticateJwt(req, res, next) {
  passport.authenticate("jwt", { session: false }, (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.status(401).json({
        message: "No tienes permisos para acceder a este recurso",
      });
    }

    req.user = user;
    next();
  })(req, res, next);
}