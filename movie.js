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
function findAll(elements)
{
	return document.querySelectorAll(elements);
}
function entry(id, content)
{
	let span = create("span");
	span.innerHTML = content;
	span.setAttribute('id', id);
	append(div, span);
}
find("button#search").addEventListener("click", getMovie);
findAll("input").forEach(input => {
	input.addEventListener("keypress", function(e) {
		e.key == "Enter" && getMovie();
	})
});
var movie = find("input#title");
var year = find("input#year");
var div = find("div#result");
var ul = find("ul#ratings");

function getMovie()
{
	if(!movie.value)
		alert("no movie name given");
	else
	{
		let url = `https://www.omdbapi.com/?apikey=167eb644&t=${movie.value}&y=${!isNaN(parseInt(year.value)) ? year.value : ""}`;
		fetch(url)
		.then(response => response.json())
		.then(function(data) {
			console.log(data);
			entry("title",`${data.Title} (${data.Year})`);
			entry("genre",`Genre: ${data.Genre}`);

			let ratings = data.Ratings;
			ratings.map(function(rating)
			{
				let li = create("li");
				let span = create("span");
				span.innerHTML = `${rating.Source}: ${rating.Value}`;
				append(li, span);
				append(ul, li);
			})
		})
		.catch(function(error) {
			console.log(error);
		});
	}
}