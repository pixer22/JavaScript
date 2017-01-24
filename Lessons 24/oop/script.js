/*
Class
function User(lname_arg, fname_arg) {
  this.lname = lname_arg;
  this.fname = fname_arg;

  this.sayHi = function() {
    //[]
    alert( "Привет, я " + lname );
  };
}


var vasya = new User("Вася");// создали пользователя
var petya = new User("Петя");
// vasya.sayHi(); // пользователь умеет говорить "Привет"
// petya.sayHi();

alert(vasya.lname);



// публичное и приватное свойство
function CoffeeMachine(power) {
  this.waterAmount = 0; // количество воды в кофеварке

  alert( 'Создана кофеварка мощностью: ' + power + ' ватт' );
}


// создать кофеварку
var coffeeMachine = new CoffeeMachine(100);

// залить воды
coffeeMachine.waterAmount = 200;
alert(coffeeMachine.waterAmount);
alert(coffeeMachine.power);




// публичный и приватный методы

function CoffeeMachine(power) {

  this.waterAmount = 0;

  // расчёт времени для кипячения
  function getBoilTime() {
    return 1000; // точная формула расчета будет позже
  }

  // что делать по окончании процесса
  function onReady() {
    alert( 'Кофе готово!' );
  }

  this.run = function() {
    // setTimeout - встроенная функция,
    // она запустит onReady через getBoilTime() миллисекунд
    setTimeout(onReady, getBoilTime());
  };
}

var coffeeMachine = new CoffeeMachine(100);
coffeeMachine.waterAmount = 200;

coffeeMachine.run();
alert(coffeeMachine.getBoilTime());




// доступ к объекту из внутреннего метода

function CoffeeMachine(power) {
  var _self = this;
  _self.waterAmount = 0;
  var WATER_HEAT_CAPACITY = 4200;
  

  function getBoilTime() {
    
    return _self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  function showLi(){

    $("#test>li").each(function(){

      console.log(_self.waterAmount  + $(this).text());
    })
  }

  function onReady() {
    alert( 'Кофе готово!' );
  }


  _self.run = function() {
    // setTimeout(onReady, getBoilTime.call(this));
    showLi();
  };

}

// создаю кофеварку, мощностью 100000W чтобы кипятила быстро
var coffeeMachine = new CoffeeMachine(100000);
coffeeMachine.waterAmount = 200;

coffeeMachine.run();
*/




// Наследование

function Machine() {
  obj.foo
  var enabled = false;

  this.enable = function() {
    enabled = true;
  };

  this.disable = function() {
    enabled = false;
  };
}



function CoffeeMachine(power) {
  Machine.call(this); // отнаследовать

  var waterAmount = 0;

  this.setWaterAmount = function(amount) {
    waterAmount = amount;
  };

}

var coffeeMachine = new CoffeeMachine(10000);

coffeeMachine.enable();
coffeeMachine.setWaterAmount(100);
coffeeMachine.disable();


/*
// Переопределение методов

function Machine(power) {
  this._enabled = false;

  var self = this;

  this.enable = function() {
    // используем внешнюю переменную вместо this
    self._enabled = true;
  };

  this.disable = function() {
    self._enabled = false;
  };

}

function CoffeeMachine(power) {
  Machine.apply(this, arguments);

  var waterAmount = 0;

  this.setWaterAmount = function(amount) {
    waterAmount = amount;
  };

  var parentEnable = this.enable;
  this.enable = function() {
      parentEnable(); // теперь можно вызывать как угодно, this не важен
      this.run();
    }

  function onReady() {
    alert( 'Кофе готово!' );
  }

  this.run = function() {
    setTimeout(onReady, 1000);
  };

}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.enable();





// Прототип объекта

var animal = {
  eats: true
};
var rabbit = {
  jumps: true
};

rabbit.__proto__ = animal;

// в rabbit можно найти оба свойства
alert( rabbit.jumps ); // true
alert( rabbit.eats ); // true

// Метод hasOwnProperty
var animal = {
  eats: true
};

var rabbit = {
  jumps: true,
  __proto__: animal
};

for (var key in rabbit) {
  alert( key + " = " + rabbit[key] ); // выводит и "eats" и "jumps"
}



var animal = {
  eats: true
};

var rabbit = {
  jumps: true,
  __proto__: animal
};

alert( rabbit.hasOwnProperty('jumps') ); // true: jumps принадлежит rabbit

alert( rabbit.hasOwnProperty('eats') ); // false: eats не принадлежит



var animal = {
  eats: true
};

var rabbit = {
  jumps: true,
  __proto__: animal
};

for (var key in rabbit) {
  if (!rabbit.hasOwnProperty(key)) continue; // пропустить "не свои" свойства
  alert( key + " = " + rabbit[key] ); // выводит только "jumps"
}




// Обычный конструктор

function Animal(name) {
  this.speed = 0;
  this.name = name;

  this.run = function(speed) {
    this.speed += speed;
    alert( this.name + ' бежит, скорость ' + this.speed );
  };

  this.stop = function() {
    this.speed = 0;
    alert( this.name + ' стоит' );
  };
};

var animal = new Animal('Зверь');

alert( animal.speed ); // 0, начальная скорость
animal.run(3); // Зверь бежит, скорость 3
animal.run(10); // Зверь бежит, скорость 13
animal.stop(); // Зверь стоит




// Класс через прототип

// конструктор
function Animal(name) {
  this.name = name;
  this.speed = 0;
}

// методы в прототипе
Animal.prototype.run = function(speed) {
  this.speed += speed;
  alert( this.name + ' бежит, скорость ' + this.speed );
};

Animal.prototype.stop = function() {
  this.speed = 0;
  alert( this.name + ' стоит' );
};

var animal = new Animal('Зверь');

alert( animal.speed ); // 0, свойство взято из прототипа
animal.run(5); // Зверь бежит, скорость 5
animal.run(5); // Зверь бежит, скорость 10
animal.stop(); // Зверь стоит







// Наследование классов в JavaScript

// 1. Конструктор Animal
function Animal(name) {
  this.name = name;
  this.speed = 0;
}

// 1.1. Методы -- в прототип

Animal.prototype.stop = function() {
  this.speed = 0;
  alert( this.name + ' стоит' );
}

Animal.prototype.run = function(speed) {
  this.speed += speed;
  alert( this.name + ' бежит, скорость ' + this.speed );
};

// 2. Конструктор Rabbit
function Rabbit(name) {
  this.name = name;
  this.speed = 0;
}

// 2.1. Наследование
Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.constructor = Rabbit;

// 2.2. Методы Rabbit
Rabbit.prototype.jump = function() {
  this.speed++;
  alert( this.name + ' прыгает, скорость ' + this.speed );
}

*/