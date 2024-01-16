const input = document.getElementById('link-input')
const linkform = document.getElementById('link-form')
const errMsg = document.getElementById('err-msg')

linkform.addEventListener('submit', formSubmit)

function formSubmit(e) {
    e.preventDefault()
    console.log(1312)
}
