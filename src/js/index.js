import { appendNavigation, appendFooter } from "./appendTemplates.js";

const body = document.querySelector("body");
let location = `/${document.location.pathname.split("/")[1]}`;
if (location === "/index.html") {
  window.history.replaceState({}, "", "/");
  location = "/";
}

appendNavigation(location).then((navigation) => {
  body.insertBefore(navigation, body.firstChild  );
});

appendFooter().then((footer) => {
  body.appendChild(footer);
});
