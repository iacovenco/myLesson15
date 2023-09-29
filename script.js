"use strict";

function DomElement(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;

  this.createElement = function () {
    let element;

    if (this.selector.startsWith(".")) {
      element = document.createElement("div");
      element.className = this.selector.slice(1);
    } else if (this.selector.startsWith("#")) {
      element = document.createElement("p");
      element.id = this.selector.slice(1);
    } else {
      return;
    }

    element.style.cssText = `
        height: ${this.height};
        width: ${this.width};
        background: ${this.bg};
        font-size: ${this.fontSize};
      `;

    // Добавляем здесь текст или другую логику, для заполнения элемента
    let text = "Привет, я новый элемент";
    element.textContent = text;

    document.body.appendChild(element);
  };
}

// Создаем объекты на основе класса DomElement
let myElement = new DomElement(
  ".my-element",
  "100px",
  "200px",
  "green",
  "20px"
);

let myTwoElement = new DomElement(
  "#my-element",
  "100px",
  "200px",
  "blue",
  "20px"
);
// Вызываем методы для создания элемента на странице
myElement.createElement();
myTwoElement.createElement();

//lesson 16

function First() {}

// Метод hello в классе First
First.prototype.hello = function () {
  console.log("Привет я метод родителя!");
};

// Класс Second, наследующий от First
function Second() {
  First.call(this); // Вызываем конструктор родительского класса
}

// Наследование прототипа First в Second
Second.prototype = Object.create(First.prototype);
Second.prototype.constructor = Second;

// Переопределяем метод hello в классе Second
Second.prototype.hello = function () {
  First.prototype.hello.call(this); // Вызоваем метод hello из родительского класса
  console.log("А я наследуемый метод!");
};

// Создание объекта на основе класса Second
var obj = new Second();

// Вызоваем метод hello из класса Second
obj.hello();
