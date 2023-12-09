const callBtn = document.querySelector('.promo-left_btns_call')
const modal = document.querySelector('.callModal')
const closeBtn = document.querySelector('#closeBtn')
const nameInput = document.getElementById('fullname')
const emailInput = document.getElementById('email')
const phoneInput = document.getElementById('phone')
const okBtn = document.getElementById('sendBtn')
const secondCallBtn = document.getElementsByClassName('nav-link')

const secondCallBtnIndex = secondCallBtn[secondCallBtn.length - 1]

callBtn.addEventListener('click', function(e) {
    e.preventDefault()
    modal.classList += " activeModal"
})

secondCallBtnIndex.addEventListener('click', function() {
    console.log()
    modal.classList += " activeModal"
})

okBtn.addEventListener('click', function(e) {
    e.preventDefault()
    closeModal()
    clearInputs()
})

closeBtn.addEventListener('click', function(e) {
    e.preventDefault()
    closeModal()
})

const closeModal = (e) => {
    modal.classList = "callModal"
    clearInputs()
}

const clearInputs = () => {
    nameInput.value = ""
    emailInput.value = ""
    phoneInput.value = ""
}