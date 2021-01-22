function openTab(event, tabName) 
{
	var i, tabContent, tabLinks

	tabContent = document.getElementsByClassName("tabContent");
	for (i = 0; i < tabContent.length; i++)
	{
		tabContent[i].style.display = "none";
	}

	tabLinks = document.getElementsByClassName("tabLinks");
	for (i = 0; i < tabLinks.length; i++)
	{
		tabLinks[i].className = tabLinks[i].className.replace(" active", "");
	}

	document.getElementById(tabName).style.display = "block";
	event.currentTarget.className += " active";
}

function imageFromUrl(string) {
	var folder = string.split("/")
	var newStr = ""
	for (var i = 0; i < folder[folder.length-1].length-5; i++) {
		newStr += folder[folder.length-1][i]
	}
	var newUrl = "recipes/"+newStr+"/"+newStr+".jpg"
	return newUrl
}

function getMouseLocation(e) {
	if (!e) var e = window.event
	if (e.pageX || e.pageY) {
		posx = e.pageX
		posy = e.pageY
	}
	else if (e.clientX || e.clientY) {
		posx = e.clientX + document.body.scrollLeft    + document.documentElement.scrollLeft
		posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop
	}
	return new Array(posx, posy)
}

document.addEventListener('DOMContentLoaded', () => {
	document.getElementById("defaultTab").click()

	let food = document.getElementsByClassName("tabContent")
	for (var i = 0; i < food.length; i++) {
		//console.log(food[i])
		food[i].addEventListener("mouseover", function(event) {
			if(event.target.href) {
				var str = imageFromUrl(String(event.target.href))
				var mousePos = getMouseLocation(event)
				var box = document.getElementById("hoverImage")
				box.style.display = 'block'
				box.style.top = (mousePos[1]) + 'px'
				box.style.left = (mousePos[0]+20) + 'px'
				box.children[0].src = str
			}
		})
		food[i].addEventListener("mousemove", function(event) {
			var mousePos = getMouseLocation(event)
			var box = document.getElementById("hoverImage")
			box.style.top = (mousePos[1]) + 'px'
			box.style.left = (mousePos[0]+20) + 'px'
		})
		food[i].addEventListener("mouseout", function(event) {
			if(event.target.href) {
				var box = document.getElementById("hoverImage")
				box.style.display = 'none'
			}
		})
	}
})
