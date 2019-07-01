

var registerValidation = function(jsonData){
    

};

var loginValidation = function(jsonData){

     var keys  = Object.keys(jsonData);
     if( keys.includes('username') && keys.includes('password') )
      return true;
     else
      return false; 
};

module.exports = {

    registerValidation: registerValidation,
    loginValidation: loginValidation,
};
