import passport from '../config/passportConfig';
import { sendResponse } from '.';

export const isAuthenticated = (
  req,
  res,
  next
) => {
  passport.authenticate(
    'jwt',
    { session: false },
    async (err, user) => {
      if (!user) {
        return res.status(401).json({
            status: 401,
            message: "You are not authorized",
            data: null,
          });
      }

      const currUser = {
        id: user.id,
        telephone: user.telephone,
        user_type : user.user_type
      };
      req.user = currUser;

      next();
    }
  )(req, res, next);
};
export const isAdmin = (req, res, next) => {
  if (req.user.user_type !== 'admin') {
    return sendResponse(res, 403, null, 'Not authorized!');
  }
  next();
};
export const isEnd_User = (req, res, next) => {
    if (!req.user ||  req.user.user_type !== 'end_user') {
      return sendResponse(res, 403, null, 'Not authorized!');
    }
    next();
};