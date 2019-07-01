var async = require('async');
var domain = require('../model/index');
var userValidation = require('../application-utilities/UserValidation');
var setResponse = require('../application-utilities/SetResponse');
var configrationHolder  = require('../configrations/ApplicationMessage'); 

var userAction = function(bodyData,res){
};

async function registerUser( bodyData,res){

    var userObj = new domain.User( bodyData);

    userObj.save(function(err,result){
        if(err) {

            setResponse.setError(  configrationHolder.Error.ExceptionOccur,
                    configrationHolder.InternalAppMessage.ExceptionOccur,
                    {},true,res); 
        }
        else{
            var data  = result.toObject();
            setResponse.setError(  configrationHolder.Success.Register,
                configrationHolder.InternalAppMessage.Register,
                data,false,res); 
        }
    });
};

module.exports = {
    userAction: userAction,
    registerUser : registerUser,
}