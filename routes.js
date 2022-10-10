const host

document.addEventListener("click", (event) => {
  const { target } = event;
  if (!target.matches("a[nav]")) return;

  event.preventDefault();

  urlRoute(event);
});

window.onpopstate = urlLocationHandler;
window.route = urlRoute;

const urlRoutes = {
  404: {
    template: "/templates/404.html",
    title: "Page not found",
    description: "Page not found",
  },
  "/": {
    template: "/templates/index.html",
    title: "Home page",
    description: "Home page",
  },
  "/downloads": {
    template: "/templates/downloads.html",
    title: "Downloads",
    description: "Downloads",
  },
};

function urlRoute(event) {
  event = event || window.event;

  const url = event.target.href;

  window.history.pushState({}, "", url);
  urlLocationHandler();
}

async function urlLocationHandler() {
  let location = window.location.pathname;

  if (location.length === 0 || location === "/index.html") {
    window.history.replaceState({}, "", "/");
    location = "/"
  }

  const route = urlRoutes[location] || urlRoutes[404];

  const html = await fetch(route.template).then((response) => response.text());

  document.getElementById("main").innerHTML = html;
  document.title = route.title;
}

urlLocationHandler();
