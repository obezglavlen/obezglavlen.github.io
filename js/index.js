import { appendNavigation, appendFooter } from "./appendTemplates.js";
import { routes } from "./constants.js";

const body = document.getElementsByTagName("body")[0];
let location = `/${document.location.pathname.split("/")[1]}`;
if (location === "/index.html") {
  window.history.replaceState({}, "", "/");
  location = "/";
}

appendNavigation(location).then((navigation) => {
  body.insertBefore(navigation, body.firstChild);
});

appendFooter().then((footer) => {
  body.appendChild(footer);
});
