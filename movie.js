var button = document.querySelector("input#search");
button.addEventListener("click", search);

var input = document.querySelector("input#movie");


function search()
{
	var request = new XMLHttpRequest();
	request.addEventListener("load", log);
	request.open("GET", "http://www.omdbapi.com/?apikey=167eb644&t="+input.value);
	request.send();
}

function log()
{
	var data = JSON.parse(this.responseText);
	console.log(this.responseText);
	var title = document.querySelector("h1#title").innerHTML = data.Title;
	var year = document.querySelector("h2#year").innerHTML = data.Year;
}
