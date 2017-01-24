"use strict"
;(function(){

	function checkLengthValues(confLength){
		var result = true;
		for (var rule in confLength) {
			switch(rule){
	  			case "default":
	  				if(confLength.default[0] < 0 || confLength.default[1] < 0 ) {
	  					console.log("Wrong length value of " + rule);
	  					result = false;
	  				} 
					break;
	  			case "login":
	  				if(confLength.login[0] < 0 || confLength.login[1] < 0 ) {
	  					console.log("Wrong length value of " + rule);
	  					result = false;
	  				}
					break;
				case "passwd":
					if(confLength.passwd[0] < 0 || confLength.passwd[1] < 0 ){ 
						console.log("Wrong length value of " + rule);
						result = false;
					}
					break;
				case "tel":
					if(confLength.tel[0] < 0 || confLength.tel[1] < 0 ){ 
						console.log("Wrong length value of " + rule);
						result = false;
					}
					break;
				case "email":
					if(confLength.email[0] < 0 || confLength.email[1] < 0 ){ 
						console.log("Wrong length value of " + rule);
						result = false;
					}
					break;
				case "text":
					if(confLength.text[0] < 0 || confLength.text[1] < 0 ){ 
						console.log("Wrong length value of " + rule); 
						result = false;
					}
					break;
			}
		}
		if (result) {
			return true;
		}
		return false;
	}

	var self;

	function Validator(form){
		this.form = $(form);
		self = this;
		this.min = 6;
		this.max = 25;
		this.configure = undefined;
		this.messageElem = "<span>";

		// Сообщения по-умолчанию
		this.errEmpty = "Поле не заполнено";
		this.errLength= "Допустимое кол-во символов";
		this.errLogin = "Ошибка логина";
		this.errPasswd = "Ошибка пароля";
		this.errEmail = "Ошибка email";
		this.errTel = "Ошибка телефона";
		this.errText = "Ошибка текста";

		// классы по умолчанию
		this.errorClass   = "errValid";
		this.successClass = "sucValid";
	}

	Validator.prototype.init = function(data){
		this.configure = data.configure;

		var classes  = data.classes,
			messages = data.messages,
	  		confLength = data.confLength,
	  		formField;

	  	if (checkLengthValues(confLength)) {
		  	for (var rule in confLength) {
		  		switch(rule){
		  			case "default":
		  				this.min = confLength.default[0];
		  				this.max = confLength.default[1];
		  				
						break;
		  			case "login":
						this.minLoginLength = confLength.login[0];
			  			this.maxLoginLength = confLength.login[1];
						break;
					case "passwd":
						this.minPassLength = confLength.passwd[0];
			  			this.maxPassLength = confLength.passwd[1];
						break;
					case "tel":
						this.minTelLength = confLength.tel[0];
			  			this.maxTelLength = confLength.tel[1];
						break;
					case "email":
						this.minEmailLength = confLength.email[0];
			  			this.maxEmailLength = confLength.email[1];
						break;
					case "text":
						this.minTextLength = confLength.text[0];
			  			this.maxTextLength = confLength.text[1];
						break;
					default:
						console.log("Wrong type of length");
						return;
					break;
		  		}
		  	}
	  	}

	  	// окончательно формируем сообщение об ошибке длинны
	  	this.errLength = this.errLength + this.min + "-" + this.max;

	  	// назначаем обработчики на blur и focus
		for (var rule in this.configure) {
			$(this.configure[rule]).on("focus", function(){
				self.resetField($(this));
			})
			switch(rule){
				case "login":
					$(this.configure.login).on("blur", function(){
						self.checkLogin($(this));
					})
					break;
				case "passwd":
					$(this.configure.passwd).on("blur", function(){
						self.checkPasswd($(this));
					})
					break;
				case "tel":
					$(this.configure.tel).on("blur", function(){
						self.checkTel($(this));
					})
					break;
				case "email":
					$(this.configure.email).on("blur", function(){
						self.checkEmail($(this));
					})
					break;
				case "text":
					$(this.configure.text).on("blur", function(){
						self.checkText($(this));
					})
					break;
				default:
					console.log("Wrong type of validation");
					return;
				break;
			}
		}

		// формируем обработчик submit
		this.form.on("submit", function(event){
			var result = true;
			for (var rule in self.configure) {
				self.resetField($(self.configure[rule]));
				switch(rule){
					case "login":
						if (!self.checkLogin($(self.configure.login))) {
							result = false;
						}
						break;
					case "passwd":
						if (!self.checkPasswd($(self.configure.passwd))) {
							result = false;
						}
						break;
					case "tel":
						if (!self.checkTel($(self.configure.tel))) {
							result = false;
						}
						break;
					case "email":
						if (!self.checkEmail($(self.configure.email))) {
							result = false;
						}
						break;
					case "text":
						if (!self.checkText($(self.configure.text))) {
							result = false;
						}
						break;
				}
			}
			if (!result) {
				event.preventDefault();	
			}
		})
	}
	
	Validator.prototype.checkLogin = function(elem){

		if(self.checkEmpty(elem)){
			if (self.checkLength(elem)) {
				return true;
			}
		}
		return false;
		
	} // login
	Validator.prototype.checkPasswd = function(elem){
		if(self.checkEmpty(elem)){
			if (self.checkLength(elem)) {
				return true;
			}
		}
		return false;
	} // passwd
	Validator.prototype.checkEmail = function(elem){
		if(self.checkEmpty(elem)){
			if (self.checkLength(elem)) {
				return true;
			}
		}
		return false;
	} // email
	Validator.prototype.checkTel = function(elem){
		if(self.checkEmpty(elem)){
			if (self.checkLength(elem)) {
				return true;
			}
		}
		return false;
	} //tel
	Validator.prototype.checkText = function(elem){
		if(self.checkEmpty(elem)){
			if (self.checkLength(elem)) {
				return true;
			}
		}
		return false;
	} // text

	Validator.prototype.checkEmpty = function(elem){
		if (elem.val() === "") {
			elem.addClass(self.errorClass);
			elem.after($(self.messageElem).text(self.errEmpty));
			return false;
		}
		return true;
	}

	Validator.prototype.checkLength = function(elem){
		if (elem.val().length < this.min || elem.val().length > this.max) {
			elem.addClass(self.errorClass);
			elem.after($(self.messageElem).text(self.errLength));
			return false;
		}
		return true;
	}

	Validator.prototype.resetField = function(elem){
		if (elem.hasClass(self.errorClass)) {
			elem.removeClass(self.errorClass);
			elem.next().remove();
		}
	} 

	function make(form){
		var tmp = new Validator(form);
		return tmp;
	}

	window._ = make;

})();