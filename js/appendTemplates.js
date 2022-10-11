export async function appendNavigation() {
  const html = await fetch("/templates/navigation.html").then((response) =>
    response.text()
  );

  return html;
}

export async function appendFooter() {
  const html = await fetch("/templates/footer.html").then((response) =>
    response.text()
  );

  return html;
}
