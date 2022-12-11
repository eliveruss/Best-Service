// Burger menu on mobiles

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

// Popup modal 

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')

}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

