
var userService = require('../services/userService');


var userAction = function(req,res, callback){
    console.log('>>>FirstCtrl>>>>>');
    userService.userAction(req.body,res,callback);
};

var registerUser = function(req,res){

        userService.registerUser(req.body,res);
};

module.exports = {
 
    userAction: userAction,
    registerUser: registerUser,
}