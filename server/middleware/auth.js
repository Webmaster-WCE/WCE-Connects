const jwt = require("jsonwebtoken");

const secret = process.env.SECRET;

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {      
      decodedData = jwt.verify(token, secret);

      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    }    

    next();
  } catch (error) {
    console.log(error);
  }
};

const authRole = (role, dept) => {
  return (req, res, next) => {
    if (req.user.role !== role && req.user.role !== dept) {
      res.status(401)
      return res.send('Not allowed')
    }

    next()
  }
}

module.exports = {
  auth,
  authRole
}