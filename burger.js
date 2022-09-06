const burgerbars = document.querySelector(".burgerbars");
const nav = document.querySelector("nav");
const services = document.querySelector(".services");
//const rangeofservices = document.querySelector(".rangeofservices");

burgerbars.addEventListener("click", () => {
    burgerbars.classList.toggle("active");
    nav.classList.toggle("active");
    services.classList.toggle("active");
    //rangeofservices.classList.toggle("active");
})

document.querySelectorAll("nav").forEach(n => n.addEventListener("click"), () => {
    burgerbars.classList.remove("active");
    nav.classList.remove("active");
    services.classList.remove("active");
   // rangeofservices.classList.remove("active");
})