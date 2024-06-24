import "./style.css";

export default class Tooltip {
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
      element: tooltip,
    });

    document.body.appendChild(tooltip);

    const { left, top, width } = this.element.getBoundingClientRect();

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
    const tooltip = this._tooltips.find((t) => t.id === id);

    tooltip.element.remove();

    this._tooltips = this._tooltips.filter((t) => t.id !== id);
  }
}
