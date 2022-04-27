const jwt = require("jsonwebtoken");

const config = process.env;
const message = require("../utility/status")
const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(message.forbidden).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);
  } catch (err) {
    return res.status(message.unauthorized).send("Invalid Token");
  }
  return next();
};
// const config = process.env;
// const message = require("../utility/status")
// const verifyToken = (req, res, next) => {
//   if (req.headers && req.headers.authorization) {
//     let authParts = req.headers.authorization.split(" ");
//     if (authParts.length === 2) {
//       if (/^Bearer$/i.test(authParts[0])) {
//         token = authParts[1];
//         try {
//           const decoded = jwt.verify(token, config.TOKEN_KEY);
//           req.user = decoded;
//           next();
//         } catch (err) {
//           return res.status(message.unauthorized).send("Invalid Token");
//         }
//       }
//     }
//   }
// };
module.exports = verifyToken;