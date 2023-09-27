"use strict";

//mobile nav
const navBtn = document.querySelector(".header__mobile-nav");
const mobileMenu = document.querySelector(".mobile-menu");
const headerVisible = document.querySelector(".header-visible");
const mobileBtns = document.querySelectorAll(".mobile-menu__nav-link");
const closeNavBtn = document.querySelector(".mobile-menu__icon-box");

//Opening the nav
navBtn.addEventListener("click", function () {
  mobileMenu.classList.toggle("hidden");
  headerVisible.classList.toggle("hidden");
});

// Closing the nav
closeNavBtn.addEventListener("click", function () {
  mobileMenu.classList.toggle("hidden");
  headerVisible.classList.toggle("hidden");
});

/// Adding an event listener for each button who have the same class
mobileBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
    headerVisible.classList.toggle("hidden");
  });
});
