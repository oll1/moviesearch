var button = document.querySelector("input#search");
button.addEventListener("click", loadApi);

var input = document.querySelector("input#movie");


function loadApi()
{
	fetch("http://www.omdbapi.com/?apikey=167eb644&t="+input.value)
	.then(response => response.json())
	.then(data => showResult(data));
}

function showResult(data)
{
	console.log(data);
	var title = document.querySelector("h1#title").innerHTML = data.Title;
	var year = document.querySelector("h2#year").innerHTML = data.Year;
	var runtime = document.querySelector("h3#runtime").innerHTML = data.Runtime;
	var genre = document.querySelector("h4#genre").innerHTML = data.Genre;
}

