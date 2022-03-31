const jwt = require("jsonwebtoken");

// const secret = `${process.env.SECRETE}`;

const auth = async (req, res, next) => {

  try {
    const token = req.headers.authorization.split(" ")[1];
    // const isCustomAuth = token.length < 500;

    if(!token)  return res.sendStatus(401)  

    let decodedData = jwt.verify(token, process.env.SECRETE);
    console.log("New Data ", decodedData);

    console.log("Authenticated User!! ");
    next();
  } catch (error) {
    console.log(error);
    res.status(401)
    return res.send('Invalid Token!')
  }
};

const authRoleHod = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;
    let decodedData;

    if (token && isCustomAuth ) {
      decodedData = jwt.verify(token, process.env.SECRETE);

      if (decodedData?.role !== 'hod') {
        res.status(401)
        return res.send('Invalid user priviledges!')
      }
    }

    // console.log("Authenticated Role!!");
    next();
  } catch (error) {
    console.log(error);
    res.status(401)
    return res.send('Invalid User Priviledges!')
  }
}

const authDept = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;
    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, process.env.SECRETE);

      if (decodedData?.role !== req.department) {
        res.status(401)
        return res.send('Invalid Departmental priviledges 1!')
      }
    }

    console.log("Authenticated Department!!");
    next();
  } catch (error) {
    console.log(error);
    res.status(401)
    return res.send('Invalid Departmental Priviledges 2!')
  }
}


module.exports = {
  auth,
  authRoleHod,
  authDept
}