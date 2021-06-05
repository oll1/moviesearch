find("button#search").addEventListener("click", loadApi);

var input = find("input#title");
var div = find("div#result");
var ul = find("ul#ratings");

function create(element)
{
	return document.createElement(element);
}
function append(parent, element)
{
	return parent.appendChild(element);
}
function find(element)
{
	return document.querySelector(element);
}
function entry(id, content)
{
	var span = create("span");
	span.innerHTML = content;
	span.setAttribute('id', id);
	append(div, span);
}

function loadApi()
{
	fetch("https://www.omdbapi.com/?apikey=167eb644&t="+input.value)
	.then(response => response.json())
	.then(function(data) {
		console.log(data);
		entry("title",`${data.Title} (${data.Year})`);
		entry("genre",`Genre: ${data.Genre}`);

		var ratings = data.Ratings;
		ratings.map(function(rating)
		{
			var li = create("li");
			var span = create("span");
			span.innerHTML = `${rating.Source}: ${rating.Value}`;
			append(li, span);
			append(ul, li);
		})
	})
	.catch(function(error) {
		console.log(error);
	});
}

