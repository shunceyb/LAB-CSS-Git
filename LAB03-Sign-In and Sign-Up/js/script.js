window.addEventListener("load", () => {
  const hideButtons = document.getElementsByClassName('hide')

  for(let i = 0; i < hideButtons.length; i++) {
    hideButtons.item(i).addEventListener('click', (e) => {
      if(hideButtons[i].classList.contains('fa-eye-slash')) {
        hideButtons[i].classList.replace('fa-eye-slash', 'fa-eye')
        document.getElementById(hideButtons[i].getAttribute('data-input-id')).type = 'text'
      } else {
        hideButtons[i].classList.replace('fa-eye', 'fa-eye-slash')
        document.getElementById(hideButtons[i].getAttribute('data-input-id')).type = 'password'
      }
    })
  }
})