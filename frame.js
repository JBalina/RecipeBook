document.addEventListener('DOMContentLoaded', () => {
	var title = document.createElement("h1")
	var link = document.createElement("a")
	link.appendChild(document.createTextNode("The Recipe Book"))
	link.href = "https://jbalina.github.io/RecipeBook/"
	title.appendChild(link)
	title.id = "title"
	var element = document.getElementById("header")
	element.appendChild(title)
})