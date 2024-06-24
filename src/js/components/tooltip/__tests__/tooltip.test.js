import Tooltip from "../Tooltip";

test("it renders tooltip", () => {
  document.body.innerHTML = '<button id="tooltip">Click me!</button>';

  const element = document.getElementById("tooltip");
  const tooltip = new Tooltip(element, {
    title: "Title click me!",
    text: "Click me!",
  });

  tooltip.show();

  expect(
    document.querySelector(".tooltip").classList.contains("tooltip"),
  ).toEqual(true);
});

test("remove tooltip", () => {
  document.body.innerHTML = '<button id="tooltip">Click me!</button>';

  const element = document.getElementById("tooltip");
  const tooltip = new Tooltip(element, {
    title: "Title click me!",
    text: "Click me!",
  });

  const id = tooltip.show();
  tooltip.remove(id);

  expect(document.querySelector(".tooltip")).toEqual(null);
});
