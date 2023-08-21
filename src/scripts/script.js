const header = document.querySelector('#header')
let sticky = header.offsetTop

window.onscroll = function() { stickyHeader() }

function stickyHeader() {
    if (window.pageYOffset > sticky) {
    header.classList.add("sticky")
    } else {
    header.classList.remove("sticky")
    }
  }

