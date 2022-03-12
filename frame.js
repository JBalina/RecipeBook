function imageFromElement(string) {
	var i = string.indexOf(".html")-1;
	//console.log(i);
	var newStr = "";
	while (string.charAt(i) != "/") {
		newStr = string.charAt(i) + newStr;
		i--;
	}
	var newUrl = "recipes/"+newStr+"/"+newStr+".jpg"
	return newUrl;
}

function imageFromElement2(string) {
	var i = string.indexOf(".html")-1;
	//console.log(i);
	var newStr = "";
	while (string.charAt(i) != "/") {
		newStr = string.charAt(i) + newStr;
		i--;
	}
	var newUrl = "../"+newStr+"/"+newStr+".jpg"
	return newUrl;
}

document.addEventListener('DOMContentLoaded', () => {
	var title = document.createElement("h1")
	var link = document.createElement("a")
	link.appendChild(document.createTextNode("The Recipe Book"))
	link.href = "https://jbalina.github.io/RecipeBook/"
	title.appendChild(link)
	title.id = "title"
	var element = document.getElementById("header")
	element.appendChild(title)

	var sideBar = document.createElement("div")
	sideBar.id = "sideBar"
	var item = document.createElement("h4")
	item.appendChild(document.createTextNode("Today's Recipes:"))
	sideBar.appendChild(item)
	if("index_on" in window) {
		var date = new Date()
		var seed = (date.getFullYear() % 2000) * (date.getMonth() + 1) * date.getDate() * (date.getDay() + 1)

		let list1 = document.getElementById("entreesItems").getElementsByTagName("li")
		var index = seed % list1.length
		var item1 = list1[index].innerHTML.substring(0,9)+"https://jbalina.github.io/RecipeBook/"+list1[index].innerHTML.substring(9)
		var img1 = document.createElement("img")
		img1.src = imageFromElement(item1)
		sideBar.appendChild(img1)
		sideBar.appendChild(document.createElement("br"))
		var div1 = document.createElement("div")
		div1.innerHTML = item1
		sideBar.appendChild(div1)
		sideBar.appendChild(document.createElement("br"))
		localStorage.setItem("item1", item1)


		let types = ["sidesItems", "dessertsItems", "drinksItems"]
		var typesIndex = seed % types.length
		let list2  = document.getElementById(types[typesIndex]).getElementsByTagName("li")
		index = seed % list2.length
		var item2 = list2[index].innerHTML.substring(0,9)+"https://jbalina.github.io/RecipeBook/"+list2[index].innerHTML.substring(9)
		var img2 = document.createElement("img")
		img2.src = imageFromElement(item2)
		sideBar.appendChild(img2)
		sideBar.appendChild(document.createElement("br"))
		var div2 = document.createElement("div")
		div2.innerHTML = item2
		sideBar.appendChild(div2)
		sideBar.appendChild(document.createElement("br"))
		localStorage.setItem("item2", item2)

	}
	else {
		var food1 = window.localStorage.getItem("item1")
		var food2 = window.localStorage.getItem("item2")
		if (!(food1 && food2)) {
			food1 = "<a href=\"https://jbalina.github.io/RecipeBook/recipes/katsuCurry/katsuCurry.html\">Katsu Curry</a>"
			food2 = "<a href=\"https://jbalina.github.io/RecipeBook/recipes/refriedBBeans/refriedBBeans.html\">Refried Black Beans</a>"
		}
		var img1 = document.createElement("img")
		img1.src = imageFromElement2(food1)
		sideBar.appendChild(img1)
		sideBar.appendChild(document.createElement("br"))
		var div1 = document.createElement("div")
		div1.innerHTML = food1
		sideBar.appendChild(div1)
		sideBar.appendChild(document.createElement("br"))

		var img2 = document.createElement("img")
		img2.src = imageFromElement2(food2)
		sideBar.appendChild(img2)
		sideBar.appendChild(document.createElement("br"))
		var div2 = document.createElement("div")
		div2.innerHTML = food2
		sideBar.appendChild(div2)
		sideBar.appendChild(document.createElement("br"))
	}
	document.body.appendChild(sideBar)
})