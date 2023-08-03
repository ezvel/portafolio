$toggleMenu = document.getElementById("toggle-menu");
$menu = document.getElementById("header");
$link1 = document.getElementById("link1");
$link2 = document.getElementById("link2");
$link3 = document.getElementById("link3");

$toggleMenu.addEventListener("click", () => {
    $menu.classList.toggle("header--show")
})

$link1.addEventListener("click", () => {
    $menu.classList.add("header--show");
})

$link2.addEventListener("click", () => {
    $menu.classList.add("header--show");
})

$link3.addEventListener("click", () => {
    $menu.classList.add("header--show");
})

