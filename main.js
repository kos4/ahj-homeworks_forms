/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/components/tooltip/Tooltip.js

class Tooltip {
  constructor(element, message) {
    this.element = element;
    this._tooltips = [];
    this.message = message;
  }
  show() {
    const id = performance.now();
    const tooltip = this.render();
    this._tooltips.push({
      id,
      element: tooltip
    });
    document.body.appendChild(tooltip);
    const {
      left,
      top,
      width
    } = this.element.getBoundingClientRect();
    tooltip.style.top = `${top - (tooltip.offsetHeight + 5)}px`;
    tooltip.style.left = `${left + width / 2 - tooltip.offsetWidth / 2}px`;
    return id;
  }
  render() {
    const element = document.createElement("div");
    element.classList.add("tooltip");
    const title = document.createElement("div");
    title.classList.add("tooltip__title");
    title.innerHTML = this.message.title;
    element.appendChild(title);
    const text = document.createElement("div");
    text.classList.add("tooltip__text");
    text.innerHTML = this.message.text;
    element.appendChild(text);
    return element;
  }
  remove(id) {
    const tooltip = this._tooltips.find(t => t.id === id);
    tooltip.element.remove();
    this._tooltips = this._tooltips.filter(t => t.id !== id);
  }
}
;// CONCATENATED MODULE: ./src/js/form.js

class Form {
  constructor(container) {
    this.container = container;
    this.toolTipId = null;
    this.onSubmit = this.onSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  init() {
    this.container.innerHTML = Form.markup;
    const form = this.container.querySelector(".form");
    const elementTooltip = form.querySelector(".form__button");
    this.tooltip = new Tooltip(elementTooltip, {
      title: "Заголовок тут",
      text: "Подсказка появится тут"
    });
    form.addEventListener("submit", this.onSubmit);
    elementTooltip.addEventListener("click", this.onClick);
  }
  static get markup() {
    return `
      <form action="" class="form">
        <!--<div class="form__group">
          <label for="text" class="form__label">Введи что нибудь сюда</label>
          <input type="text" class="form__input-text" name="text" id="text">
        </div>-->
        <div class="form__group">
          <button class="form__button">Нажми на меня</button>
        </div>
      </form>
    `;
  }
  onSubmit(e) {
    e.preventDefault();
  }
  onClick() {
    if (this.toolTipId) {
      this.tooltip.remove(this.toolTipId);
      this.toolTipId = null;
    } else {
      this.toolTipId = this.tooltip.show();
    }
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

const container = document.querySelector(".container");
const app_form = new Form(container);
app_form.init();
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;