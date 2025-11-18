// Переключение темы и запуск слайдера

document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const switchInput = document.getElementById("theme-switch");
  const caption = document.querySelector(".theme-caption");

  // восстановление темы
  const saved = localStorage.getItem("theme");
  if (saved === "light") {
    body.classList.remove("theme-dark");
    body.classList.add("theme-light");
    switchInput.checked = true;
    if (caption) caption.textContent = caption.dataset.light;
  } else {
    body.classList.add("theme-dark");
    if (caption) caption.textContent = caption.dataset.dark;
  }

  // обработчик переключателя
  if (switchInput) {
    switchInput.addEventListener("change", () => {
      if (switchInput.checked) {
        body.classList.remove("theme-dark");
        body.classList.add("theme-light");
        localStorage.setItem("theme", "light");
        if (caption) caption.textContent = caption.dataset.light;
      } else {
        body.classList.remove("theme-light");
        body.classList.add("theme-dark");
        localStorage.setItem("theme", "dark");
        if (caption) caption.textContent = caption.dataset.dark;
      }
    });
  }

  // простой слайдер в hero
  const slides = Array.from(document.querySelectorAll(".hero-slide"));
  if (slides.length > 1) {
    let index = 0;
    setInterval(() => {
      slides[index].classList.remove("is-active");
      index = (index + 1) % slides.length;
      slides[index].classList.add("is-active");
    }, 7000); // 7 секунд на кадр
  }
});
