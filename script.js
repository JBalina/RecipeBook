document.addEventListener('DOMContentLoaded', () => {
	document.getElementById("defaultTab").click()
})

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

