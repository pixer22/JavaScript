function validator(req, res){
    var strEmail = req.body.email,
        strPassword = req.body.password;

    if(!(strEmail.match(/^[\w]{0,64}\.?[\w]{0,64}@{1}[\w]{1,64}\.[\w]{1,64}$/))) {
        return false;
    }
    if(!(strPassword.match(/^[\w]{6,64}$/))) {
        return false;
    }

    return true;
}

module.exports = validator;