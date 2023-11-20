// -- Hamburger navbar -- //
const navLink = document.getElementById('nav-link')
const navBtn = document.getElementById('nav-btn')
const icon = document.getElementById('icon')

let isOpen = false

navBtn.onclick = () => {
	if (!isOpen) {
		navLink.style.display = "block";
		icon.classList.remove('fa-bars')
		icon.classList.add('fa-x')
		isOpen = !isOpen
	} else {
		navLink.style.display = "none";
		icon.classList.add('fa-bars')
		icon.classList.remove('fa-x')
		isOpen = !isOpen
	}
}

window.onclick = function (event) {
	if (event.target == navLink) {
		navLink.style.display = "none";
	}
}
//-END-//


// -- Scroll to top -- //
const topBtn = document.getElementById('top-btn')

// Fungsi ketika window discroll
window.onscroll = () => {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

// Fungsi untuk button go to top
function goToTop() {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
//-END-//