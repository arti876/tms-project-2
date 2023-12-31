
// burger-menu------------------------------------------------------------------

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

// Клонируем меню, чтобы задать свои стили для мобильной версии
const menu = document.querySelector("#menu").cloneNode(1);
const img_bg = document.querySelector("#img_bg").cloneNode(1);

// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);

// Выполняем действия при клике
function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
  // popup.appendChild(menu);
  // popup.appendChild(img_bg);
  popup.append(menu, img_bg);
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}

// header-scroll----------------------------------------------------------------

let scrollHeader = document.querySelector('header');
let scrollHeaderWrapper = document.querySelector('.header__wrapper');

window.onscroll = function () {
  if (window.scrollY > 1) {
    scrollHeader.classList.add('scrolled');
    scrollHeaderWrapper.classList.add('scrolled-border');
  } else {
    scrollHeader.classList.remove('scrolled');
    scrollHeaderWrapper.classList.remove('scrolled-border');
  }
};
// swiper-----------------------------------------------------------------------

let mySwiperCustom = new Swiper('.swiper-custom', {
  // добавление пагинатора
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // скрол зажатой мышкой на пк
  simulateTouch: true,
  // чувствительность скрола
  touchRatio: 1.5,
  // изменение курсора при наведении
  grabCursor: true,
  // скрол клавиатурой
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  // бесконечный скрол
  loop: true,
  // автовысота слайдов
  autoHeight: true,
  // автопрокрутка
  autoplay: {
    // пауза между прокруткой
    delay: 3000,
    // отключить после ручного переключения
    disableOnInteraction: true,
    // закончить на последнем слайде
    stopOnLastSlide: true,
  },
  // управление колесом мыши
  // mousewheel: {
  // чувствительность колеса
  // sensitivity: 1,
  // класс объекта для скрола колесом
  // eventsTarget: ".swiper-custom"
  // },
});

let myPaginationCustom = new Swiper('.pagination-custom', {
  // добавление пагинатора
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

mySwiperCustom.controller.control = myPaginationCustom;
myPaginationCustom.controller.control = mySwiperCustom;