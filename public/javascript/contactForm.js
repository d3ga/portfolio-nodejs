import axios from 'axios'

function contactForm() {
  console.log($('#contact-form'));
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

    axios
      .post('/contact', data)
      .then((response) => {
        this.classList.add('hidden')
        formError.classList.add('hidden')
        formSuccess.classList.remove('hidden')
      })
      .catch((error) => {
        this.classList.remove('hidden')
        formSuccess.classList.add('hidden')
        formError.classList.remove('hidden')
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

export default contactForm