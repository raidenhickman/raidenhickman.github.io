let lightmode = localStorage.getItem('lightmode')
const themeSwitch = document.getElementById('theme-switch')

const enableLightmode = () => {
	document.body.classList.add('lightmode')
	localStorage.setItem('lightmode', 'active')
}

const disableLightmode = () => {
	document.body.classList.remove('lightmode')
	localStorage.setItem('lightmode', null)
}

themeSwitch.addEventListener("click", () => {
	lightmode !== "active" ? enableLightmode() : disableLightmode()
})