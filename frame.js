document.addEventListener('DOMContentLoaded', () => {
	var title = document.createElement("h1")
	title.appendChild(document.createTextNode("The Recipe Book"))
	title.id = "title"
	var element = document.getElementById("header")
	element.appendChild(title)
})