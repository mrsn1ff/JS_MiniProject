let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelector("li");

div.addEventListener("click" , function(event){
	event.stopPropagation();
	console.log("div was clicked");
});

ul.addEventListener("click" , function(event){
	event.stopPropagation();
	console.log("ul was clicked");
});

for(li of lis){
	event.stopPropagation();
	li.addEventListener("click" , function(event){
		console.log("li was clicked");
	});
}