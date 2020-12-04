const burger = document.querySelector(".burger");
const iconBurger = document.querySelector("i.fa-bars");
const iconX = document.querySelector("i.fa-times");
const submenuOpenerOne = document.querySelector(".submenu-opener-one");
const submenuOpenerTwo = document.querySelector(".submenu-opener-two");
const submenuOpenerThree = document.querySelector(".submenu-opener-three");
const submenuOpenerFour = document.querySelector(".submenu-opener-four");
const subMenu = document.querySelector(".submenu");

burger.addEventListener("click", function () {
    burger.classList.toggle("active");
    iconBurger.classList.toggle("show");
    iconX.classList.toggle("show");
});

submenuOpenerOne.addEventListener("click", function () {
    submenuOpenerOne.classList.toggle("active");
});

submenuOpenerTwo.addEventListener("click", function () {
    submenuOpenerTwo.classList.toggle("active");
});

submenuOpenerThree.addEventListener("click", function () {
    submenuOpenerThree.classList.toggle("active");
});

submenuOpenerFour.addEventListener("click", function () {
    submenuOpenerFour.classList.toggle("active");
});