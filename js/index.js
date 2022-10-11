import { appendNavigation, appendFooter } from "./appendTemplates.js";
import { routes } from "./constants.js";

const body = document.getElementsByTagName("body")[0];

appendNavigation().then((navigation) => {
  body.innerHTML = navigation.concat(body.innerHTML);
  const location = document.location.pathname.split("/")[1];

  body.getElementsByTagName("a")[routes[location]].setAttribute("active", "");
});

appendFooter().then((footer) => {
  body.innerHTML = body.innerHTML.concat(footer);
});
