let burger = document.querySelector("#burger_icon");
let header = document.querySelector("#header");
burger.onclick = function (){
    header.classList.toggle("menu_open");
}
