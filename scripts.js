const key = "a4maJVXo+9i8d4DqGGtN8g==kVlzdMysYk61Ecsy";
let jokeData = document.getElementById("joke-box")
let btn=document.getElementById("btn")

const options = {
	method: 'GET',
	headers: {
		'X-API-Key': key,
		// 'X-RapidAPI-Host': 'joke3.p.rapidapi.com'
	}
};

async function fetchApi() {

	jokeData.innerText="Loading..";
	
	btn.disabled=true;
	btn.innerText="Please wait"

	
	const res = await fetch('https://api.api-ninjas.com/v1/dadjokes?limit=1', options)
	const data = await res.json()
	console.log(data[0].joke)

	btn.disabled=false;
	btn.innerText="Click to read more jokes"

	
	jokeData.innerText = data[0].joke
}


let docTitle=document.title;
window.addEventListener("blur",()=>{
	document.title="See you soon 😊"
})

window.addEventListener("focus",()=>{
	document.title= docTitle
})