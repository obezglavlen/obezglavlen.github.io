import { downloadCategories } from "../constants.js";

const inputs = document.querySelectorAll("input[type='radio']");

inputs.forEach((input) =>
  input.addEventListener("change", () => renderByCategory(getCategory()))
);

function getCategory() {
  return document.querySelector("input[type='radio']:checked").id.split("_")[1];
}

function renderByCategory(category) {
  switch (category) {
    case downloadCategories.MINECRAFT:
      console.log(category);
      return;
    case downloadCategories.WINDOWS:
      console.log(category);
      return;
    case downloadCategories.ANDROID:
      console.log(category);
      return;
  }
}
