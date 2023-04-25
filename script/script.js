$(function(){
    $("#input-phone").mask("8 (999) 999-99-99")
})

const burger = document.querySelector('.burger')
const links = document.querySelector('.header-links');

function toggleMenu() {
    burger.classList.toggle('open')
    links.classList.toggle('open')
}