const {check,validationResult} = require('express-validator');

exports.validateRegisterUser =  [
    check('firstName').notEmpty().withMessage('first Name is required'),
    check('lastName').notEmpty().withMessage('Last Name is required'),
    // check('username', 'username does not Empty').not().isEmpty(),
    // check('username', 'username must be Alphanumeric').isAlphanumeric(),
    // check('username', 'username more than 6 degits').isLength({ min: 6 }),
    check('email', 'Email does not Empty').not().isEmpty(),
    check('email', 'Invalid email').isEmail(),
    //check('user.birthday', 'Invalid birthday').isISO8601('yyyy-mm-dd'),
    check('password', 'password more than 6 degits').isLength({ min: 6 })
  ]; 


exports.validateLogin = [ 
    check('email', 'Email does not Empty').not().isEmpty(),
    check('email', 'Invalid email').isEmail(),
    check('password', 'password more than 6 degits').isLength({ min: 6 })
  ]; 

// let validate = {
//   validateRegisterUser: validateRegisterUser,
//   validateLogin: validateLogin
// };

//module.exports = {validate};
exports.isRequestValidated = (req, res,next)=> {
  const errors=validationResult(req);
  if(errors.array().length>0){
    return res.status(400).json({error:errors.array()[0].msg});
  }
  next();
}