const searchbox=document.querySelector(".city-input");
const searchbtn=document.querySelector(".search-btn");
const imgg=document.querySelector(".icon-w")
const apikey = "8674913fba1bf07e3efc82619545a1e8"; 
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
 async function check(city) {
  const response= await fetch(apiurl+city+`&appid=${apikey}`);
  var data= await response.json();

  console.log(data);
 
 
document.querySelector(".city").innerHTML=data.name;
document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
document.querySelector(".temp").innerHTML=data.main.temp+"°C";
document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
document.querySelector(".desc").innerHTML=data.weather[0].main;


if(data.main.temp>=10 && data.main.temp<=35 || data.weather[0].main=="Clear"){
  imgg.src="clear.png";
}
if(data.main.temp>=-20 && data.main.temp<=10){
  imgg.src="snow.png";
}
if(data.weather[0].main=="Clouds"  ){
  imgg.src="pikachu.png";
}
if(data.weather[0].main=="rain"){
  imgg.src="water.png";
}
if(data.main.temp>=35 && data.main.temp<=100 ||data.main.humidity>=72 ){
  imgg.src="chailazard.png";
}

 }
 searchbtn.addEventListener("click",()=>{
  check(searchbox.value);
 })
