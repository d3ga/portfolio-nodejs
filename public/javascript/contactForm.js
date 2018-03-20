import axios from 'axios'

function contactForm() {
  $('#contact-form').submit(function (e) {
    e.preventDefault()
    
    const name = this.querySelector('#name').value
    const email = this.querySelector('#email').value
    const message = this.querySelector('#message').value
    const formSuccess = document.querySelector('#contact-success')
    const formError = document.querySelector('#contact-error')
    
    const data = {
      name,
      email,
      message
    }
  
    toggleLoading()
    clearErrors()

    axios
      .post('/contact', data)
      .then((response) => {
        this.classList.add('hidden')
        formError.classList.add('hidden')
        formSuccess.classList.remove('hidden')
      })
      .catch((error) => {
        const data = error.response.data

        this.classList.remove('hidden')
        formSuccess.classList.add('hidden')

        if (data.errors) {
          formErrors(data.errors)
        } else {
          formError.innerText = data.message
          formError.classList.remove('hidden')
        }

        toggleLoading()
      })
  })
}

const toggleLoading = function() {
  const button = document.querySelector('#contact-form button')
  const icon = button.querySelector('i')

  if (button.getAttribute('disabled') === null) {
    icon.classList.remove('fa-paper-plane-o')
    icon.classList.add('fa-spinner')
    icon.classList.add('fa-spin')
    
    button.setAttribute('disabled', 'disabled')
  } else {
    icon.classList.remove('fa-spinner')
    icon.classList.remove('fa-spin')
    icon.classList.add('fa-paper-plane-o')
    
    button.removeAttribute('disabled')
  }
}

const formErrors = function (errors) {
  for (let fieldName in errors) {
    const error = errors[fieldName]
    const field = $(`#${fieldName}`)
    console.log(field);
    
    field.addClass('is-invalid')
    field.after(`<div class="invalid-feedback">${error.msg}</div>`)
  }
}

const clearErrors = function() {
  const form = $('#contact-form')
  form.find('.is-invalid').removeClass('is-invalid')
  form.find('.invalid-feedback').remove()
}

export default contactForm