// ===== Функция 1: мобильное меню =====

// Находим кнопку и меню на странице по их id
var menuBtn = document.getElementById("menuBtn");
var nav = document.getElementById("nav");

// Когда нажимаем на кнопку...
menuBtn.addEventListener("click", function () {
  // ...добавляем или убираем у меню класс "open" (в CSS он показывает меню)
  nav.classList.toggle("open");
});

// Когда нажимаем на ссылку в меню, меню закрывается
var links = nav.querySelectorAll("a");
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    nav.classList.remove("open");
  });
}


// ===== Функция 2: тёмная и светлая тема =====

// Находим кнопку по её id
var themeBtn = document.getElementById("themeBtn");

// Когда нажимаем на кнопку...
themeBtn.addEventListener("click", function () {
  // ...добавляем или убираем класс "dark" у всей страницы (body)
  document.body.classList.toggle("dark");

  // Меняем надпись на кнопке в зависимости от темы
  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "Светлая тема";
  } else {
    themeBtn.textContent = "Тёмная тема";
  }
});
