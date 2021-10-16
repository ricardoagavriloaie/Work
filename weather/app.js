// Punctul 1.

const vremeAcm = document.getElementById('vremeAcm')
const URL_CURRENT_WEATHER = "https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=";
const prognozaNow = document.getElementById('prognozaNow');

console.log(vremeAcm)
vremeAcm.addEventListener('click', showVreme);
const temp = document.getElementById('temp')
function showVreme() {
let vremeOne = URL_CURRENT_WEATHER + cityInput.value;

	fetch(vremeOne)
	.then((res) => res.json())
	.then((data) => {

		let output = '';
		icon.innerHTML = ''
		output = `<img src='http://openweathermap.org/img/w/${data.weather[0].icon}.png' class="icon">`
		document.getElementById('icon').innerHTML += output;

		desc.innerHTML = 'Descriere:';
		output = `${data.weather[0].description}`;
		document.getElementById('desc').innerHTML += output;

		umiditate.innerHTML = 'Umiditate:';
		output = `${data.main.humidity}%`;
		document.getElementById('umiditate').innerHTML += output;
		
		presiune.innerHTML = 'Presiune:';
		output = `${data.main.pressure} hPa`;
		document.getElementById('presiune').innerHTML += output;
		
		temp.innerHTML = 'Temperatura:';
		output = `${data.main.temp}°C`;
		document.getElementById('temp').innerHTML += output;

		min.innerHTML = 'Minima zilei:';
		output = `${data.main.temp_min}°C`;
		document.getElementById('min').innerHTML += output;
		
		max.innerHTML = 'Maxima zilei:';
		output = `${data.main.temp_max}°C`;
		document.getElementById('max').innerHTML += output;
		
		return output;
})

}

// Punctul 2. 

// step 1 - define global variables - inputs/buttons/api endoints
const cityInput = document.getElementById('city');
console.log('🚀 ~ file: app.js ~ line 3 ~ cityInput', cityInput);
const prognozaBtn = document.getElementById('prognozaBtn');
const prognozaDiv = document.getElementById('prognozaDiv');

const URL_FORECAST_WEATHER =
	'https://api.openweathermap.org/data/2.5/forecast?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=';

prognozaBtn.addEventListener('click', showForecast);

function showForecast() {
	//step 2 - create final endpoint
	let finalEndPoint = URL_FORECAST_WEATHER + cityInput.value;
	console.log(finalEndPoint);

	// fetch from endpoint
	fetch(finalEndPoint)
		.then((res) => res.json())
		.then((data) => {
			console.log(data.list[0].dt_txt.split(' ')[0]);
			console.log(data.list[0].dt_txt.split(' ')[1]);
			console.log(data.list[0].main.temp);
			console.log(data.list[0].weather[0].description);

			var numarDePrognozeZiuaCurenta = 0;
			for (let i = 0; i < data.list.length; i++) {
				if (
					data.list[i].dt_txt.split(' ')[0] !==
					data.list[i + 1].dt_txt.split(' ')[0]
				) {
					numarDePrognozeZiuaCurenta = i + 1;
					break;
				}
			}
			console.log(numarDePrognozeZiuaCurenta);
			prognozaDiv.innerHTML = '';
			createPrognozaBoxDiv(
				data,
				prognozaDiv,
				0,
				numarDePrognozeZiuaCurenta - 1
			);
			createPrognozaBoxDiv(
				data,
				prognozaDiv,
				numarDePrognozeZiuaCurenta,
				numarDePrognozeZiuaCurenta + 7
			);
			createPrognozaBoxDiv(
				data,
				prognozaDiv,
				numarDePrognozeZiuaCurenta + 8,
				numarDePrognozeZiuaCurenta + 15
			);
			createPrognozaBoxDiv(
				data,
				prognozaDiv,
				numarDePrognozeZiuaCurenta + 16,
				numarDePrognozeZiuaCurenta + 23
			);
			createPrognozaBoxDiv(
				data,
				prognozaDiv,
				numarDePrognozeZiuaCurenta + 24,
				numarDePrognozeZiuaCurenta + 31
			);
			createPrognozaBoxDiv(
				data,
				prognozaDiv,
				numarDePrognozeZiuaCurenta + 32,
				data.list.length - 1
			);
		});
}

//step 3 - create div
function createPrognozaHoursOutput(day, icon, hour, temp, description) {
	let output = `
   <div class="prognozaHours">
      <h5 class="date">Ziua: ${day}</h5>
	  <img src='http://openweathermap.org/img/w/${icon}.png' class="icon">
      <p class="hour">Ora: ${hour}</p>
      <p class="temp">Temperatura: ${temp}°C</p>
      <p class="desc">Descriere: ${description}</p>
   </div>
   `;
	return output;
}

function createPrognozaBoxDiv(data, divElement, startIndex, endIndex) {
	let prognozaBox = document.createElement('div');
	prognozaBox.classList.add('prognozaBox');
	for (let i = startIndex; i <= endIndex; i++) {
		prognozaBox.innerHTML += createPrognozaHoursOutput(
			data.list[i].dt_txt.split(' ')[0],
			data.list[i].weather[0].icon,
			data.list[i].dt_txt.split(' ')[1],
			data.list[i].main.temp,
			data.list[i].weather[0].description
		);
	}
	divElement.appendChild(prognozaBox);
}

// function getNextDayString(date) {
// 	//2021-01-23
// 	var year = Number(date.split('-')[0]);
// 	var month = Number(date.split('-')[1]) - 1;
// 	var day = Number(date.split('-')[2]);

// 	var tmpDate = new Date(year, month, day);
// 	console.log(tmpDate);

// 	const tomorrow = new Date();
// 	tomorrow.setDate(tmpDate.getDate() + 1);
// 	// console.log(tomorrow.getDay(), tomorrow.getMonth() + 1, tomorrow.getFullYear());
// 	console.log(
// 		tomorrow.getFullYear() +
// 			'-' +
// 			(tomorrow.getMonth() + 1) +
// 			'-' +
// 			tomorrow.getDay()
// 	);
// }

// getNextDayString('2021-12-28');
