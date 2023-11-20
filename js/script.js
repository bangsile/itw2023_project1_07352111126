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