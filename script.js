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
