
var ErrorMessage = {

        ValidationFail: 'Please enter all the fields',
        LoginFail: 'Please enter valid username or password',
        ExceptionOccur : 'Sorry, we are facing some technical issue. Please try again later.',

};

var SuccessMessage = {

        Register: 'Successfully Register User',
        Login: 'Successfully Login User',    
};

var InternalAppMessage = {

       Login: 'edwisor.Login.Success',
       Register: 'edwisor.Register.Success',
       ValidationFail: 'edwisor.Validation.Fail',
       ExceptionOccur: 'edwisor.Exception.Error',
       LoginFail: 'edwisor.Login.Fail', 
}

var Keys  = {

    tokenSecretKey :'bfashgdfyagfbasjkdgfawhskjfbasjkdfbkj',
    tokenSecretTime: '2h',
}

module.exports = {

       Error: ErrorMessage,
       Success: SuccessMessage,
       InternalAppMessage:  InternalAppMessage,
       Keys: Keys,
}