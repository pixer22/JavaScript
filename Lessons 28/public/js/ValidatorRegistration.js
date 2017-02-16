'use strict'
;(function () {

    var self;
    function Validator(form) {
        self = this;
        this.form = $(form);
    }

    Validator.prototype.init = function (data) {
        var configRolle = data;
        for( var key in data) {
            switch (key) {
                case "email":
                    self.email(configRolle);
                    break;
                case "password":
                    self.password(configRolle);
                    break;
            }
        }

        this.form.on("submit", function (event) {
            var subbmiteRegulators = true;
            for( var key in data) {
                switch (key) {
                    case "email":
                        if(!self.email(configRolle)) {
                            return false;
                        }
                        break;
                    case "password":
                        if(!self.password(configRolle)) {
                            return false;
                        }
                        break;
                }
            }
            if(subbmiteRegulators === false) {
                event.preventDefault();
            }
        });
    };

    Validator.prototype.email = function (configRolle) {
        var valuesEmail = self.form.find(configRolle.email).val();

        self.form.find(configRolle.email).on('blur', function () {
            valuesEmail = self.form.find(configRolle.email).val();
            if(!regEmail(valuesEmail)) {
                addedClassesInput($(this),"errorInputValidators");
                $('.emailError').text('error enter email');
            } else {
                addedClassesInput($(this),"successInputValidators");
                $('.emailError').text('');
            }
        });

        function regEmail(valuesEmail) {
            if(!(valuesEmail === undefined) && !(valuesEmail === '')) {
                if(!(valuesEmail.match(/^[\w]{0,64}\.?[\w]{0,64}@{1}[\w]{1,64}\.[\w]{1,64}$/))) {
                    return false;
                } else {
                    return true;
                }
            } else {
                return false;
            }
        }

        return regEmail(valuesEmail);
    };

    Validator.prototype.password = function (configRolle) {
        var valuesPassword = self.form.find(configRolle.password).val();

        self.form.find(configRolle.password).on('blur', function () {
            valuesPassword = self.form.find(configRolle.password).val();
            if(!regPassword(valuesPassword)) {
                addedClassesInput($(this),"errorInputValidators");
                $('.emailError').text('error enter password');
            } else {
                addedClassesInput($(this),"successInputValidators");
                $('.emailError').text('');
            }
        });

        function regPassword(valuesPassword) {
            if(!(valuesPassword === undefined) && !(valuesPassword === '')) {
                if(!(valuesPassword.match(/^[\w]{6,64}$/))) {
                    return false;
                } else {
                    return true;
                }
            } else {
                return false;
            }
        }

        return regPassword(valuesPassword);
    };

    function addedClassesInput(elem, classes) {
        elem.removeClass('errorInputValidators').removeClass('successInputValidators');
        elem.addClass(classes);
    }

    function make(form) {
        var tmpValid = new Validator(form);

        return tmpValid;
    }

    window._ = make;
})();