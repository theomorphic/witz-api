
const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const broga = document.getElementById("broga");

const url = "https://v2.jokeapi.dev/joke/Any?lang=de&blacklistFlags=nsfw&type=single";


btn.addEventListener("click", ()=>{
	jokeContainer.classList.remove("fade");
	fetch(url)
	.then(data => data.json())
	.then(item => {
		jokeContainer.textContent = `${item.joke}`;
		jokeContainer.classList.add("fade");
		broga.style.backgroundImage = 'url("./img/Broga-Glad.webp")';
	});
});

broga.addEventListener("mouseover", ()=>{
	broga.style.backgroundImage = 'url("./img/Broga-Face-Off.webp")';
})

broga.addEventListener("mouseout", ()=>{
	broga.style.backgroundImage = 'url("./img/Broga.webp")';
})


