// This whole file is about the appear of burger menu on mobiles

const burgerbars = document.querySelector(".burgerbars");
const nav = document.querySelector("nav");
const services = document.querySelector(".services");

burgerbars.addEventListener("click", () => {
    burgerbars.classList.toggle("active");
    nav.classList.toggle("active");
    services.classList.toggle("active");
})

nav.addEventListener("click", () => {
    burgerbars.classList.remove("active");
    nav.classList.remove("active");
    services.classList.remove("active");
})


