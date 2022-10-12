const text = document.getElementById("timer");
setInterval(() => {
  text.innerText = text.innerText + ".";
}, 1000);
