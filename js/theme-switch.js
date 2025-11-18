const switchInput = document.getElementById("themeSwitch");
const themeLink = document.getElementById("theme-style");

// начальная тема
if (localStorage.getItem("theme") === "light") {
  themeLink.href = "css/nature-light.css";
  switchInput.checked = true;
} else {
  themeLink.href = "css/premium-dark.css";
}

// переключение
switchInput.addEventListener("change", () => {
  if (switchInput.checked) {
    themeLink.href = "css/nature-light.css";
    localStorage.setItem("theme", "light");
  } else {
    themeLink.href = "css/premium-dark.css";
    localStorage.setItem("theme", "dark");
  }
});
