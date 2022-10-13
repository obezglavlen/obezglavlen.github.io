(() => {
  const location = `/${document.location.pathname.split("/")[1]}`;
  if (location === "/index.html") {
    window.history.replaceState({}, "", "/");
  }
})();
