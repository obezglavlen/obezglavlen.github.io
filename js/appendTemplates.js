export async function appendNavigation(location) {
  const html = await fetch("/templates/navigation.html").then((response) =>
    response.text()
  );

  const nav = document.createElement("nav");
  nav.innerHTML = html;
  nav.className = "navigation";

  nav.querySelector(`a[href="${location}"]`).setAttribute("active", "");

  return nav;
}

export async function appendFooter() {
  const html = await fetch("/templates/footer.html").then((response) =>
    response.text()
  );

  const footer = document.createElement("footer");
  footer.innerHTML = html;
  footer.className = "footer";

  return footer;
}
