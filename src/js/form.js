import Tooltip from "./components/tooltip/Tooltip";

export default class Form {
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
      text: "Подсказка появится тут",
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
