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

//This function deletes the unordered list and turns it into a three column table with images
function toGallery() {
	var tabsArray = ['entreesContent', 'sidesContent', 'dessertsContent', 'drinksContent', 'scratchContent'];
	var listNameArray = ['entreesItems', 'sidesItems', 'dessertsItems', 'drinksItems', 'scratchItems'];
	for(var tabIndex = 0; tabIndex < tabsArray.length; tabIndex++) {
		var list = document.getElementById(listNameArray[tabIndex]).childNodes;
	    var theArray = [];
		for(var i=0;i < list.length; i++) {
	    	var arrValue = list[i].innerHTML;
	    	if(typeof arrValue !== "undefined") {
		    	//console.log(arrValue);
		    	theArray.push(arrValue);
			} 
		}
		var ul = document.getElementById(listNameArray[tabIndex]);
		ul.remove();
		var content = document.getElementById(tabsArray[tabIndex]);
		var table = document.createElement("table");
		var i = 0;
		for (var j = 0; j < Math.ceil(theArray.length/3); j++) {
			var row = table.insertRow(j);
			for (var k = 0; k < 3; k++) {
				console.log(i);
				var cell = row.insertCell(k);
				cell.classList.add("tableItem");
				cell.innerHTML = "<div><img src="+ imageFromElement(theArray[i]) + "></div>" + theArray[i];
				console.log(theArray[i]);
				console.log(imageFromElement(theArray[i]));
				i++;
				if (i >= theArray.length) {
					break;
				}
			}
			if (i >= theArray.length) {
				break;
			}
		}
		table.setAttribute("id",listNameArray[tabIndex]);
		content.appendChild(table);
	}
}

function toList() {
	var tabsArray = ['entreesContent', 'sidesContent', 'dessertsContent', 'drinksContent', 'scratchContent'];
	var listNameArray = ['entreesItems', 'sidesItems', 'dessertsItems', 'drinksItems', 'scratchItems'];
	for(var tabIndex = 0; tabIndex < tabsArray.length; tabIndex++) {
		var table = document.getElementById(listNameArray[tabIndex]);
		//console.log(table.innerHTML);
		var rows = table.getElementsByTagName("tr");
		//console.log(rows);
	    var theArray = [];
		for(var i=0, iLen=rows.length; i < iLen; i++) {
			var cells = rows[i].getElementsByTagName("td");
			var t = [];
			for(var j=0, jLen=cells.length; j < jLen; j++) {
				var string = cells[j].innerHTML;
				string = string.substring(string.indexOf("<a href="));
				console.log(string);
				theArray.push(string);
			}
		}
		table.remove();
		var content = document.getElementById(tabsArray[tabIndex]);
		var list = document.createElement("ul");
		for (var i = 0; i < theArray.length; i++) {
        	var item = document.createElement('li');

        	// Set its contents:
        	item.innerHTML = theArray[i];

        	// Add it to the list:
        	list.appendChild(item);
    	}
    	list.setAttribute("id",listNameArray[tabIndex]);
    	content.appendChild(list);
	}
}

document.addEventListener('DOMContentLoaded', () => {
	document.getElementById("defaultTab").click()

	let food = document.getElementsByClassName("tabContent")
	for (var i = 0; i < food.length; i++) {
		//console.log(food[i])
		food[i].addEventListener("mouseover", function(event) {
			if(event.target.href) {
				//console.log(String(event.target.href));
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

	var checkbox = document.getElementById("toggle");

	checkbox.addEventListener('change', function () {
	if (checkbox.checked) {
		toGallery();
	} else {
		toList();
	}
  });
})
