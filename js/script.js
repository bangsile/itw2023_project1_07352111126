// -- Hamburger navbar -- //
const navLink = document.getElementById('nav-link')
const navBtn = document.getElementById('nav-btn')
const icon = document.getElementById('icon')
const header = document.querySelector('header')

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
//- HMBGR END -//


// -- Scroll to top -- //
const topBtn = document.getElementById('top-btn')

// Fungsi ketika window discroll
window.onscroll = () => {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.style.display = "block";
		header.classList.add('nav-shadow')
  } else {
    topBtn.style.display = "none";
		header.classList.remove('nav-shadow')
  }
};

// Fungsi untuk button go to top
function goToTop() {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
//-END-//


// --LIGHT & DARK THEME-- //
const themeBtn = document.querySelector('#theme')
const theme = document.querySelector('html')

let dark = false

console.log('luar',dark)
themeBtn.onclick = () => {
	if (!dark){
		dark = !dark
		theme.classList.remove('light')
		theme.classList.add('dark')
		themeBtn.classList.remove('fa-moon')
		themeBtn.classList.add('fa-sun')
	} else {
		dark = !dark
		theme.classList.remove('dark')
		theme.classList.add('light')
		themeBtn.classList.remove('fa-sun')
		themeBtn.classList.add('fa-moon')
	}
}



