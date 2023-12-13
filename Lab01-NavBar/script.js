window.addEventListener('hashchange', function() { 
  updatePage()
});

function updatePage() {
  for(let i = 0; i < document.getElementsByClassName('page').length; i++) {
    document.getElementsByClassName('page').item(i).style.display = "none"
  }
  if(document.getElementsByClassName('active').length != 0) {
    document.getElementsByClassName('active').item(0).classList.remove('active')
  }
  if(document.querySelectorAll(`a[href='${window.location.hash}']`).length != 0) {
    document.querySelectorAll(`a[href='${window.location.hash}']`).item(0).classList.add('active')
  }
  if(document.getElementById(window.location.hash)) {
    document.getElementById(window.location.hash).style.display = "flex"
  }
}

updatePage()