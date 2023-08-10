const tempreature = document.querySelector(".weather1");
const city = document.querySelector(".weather2 p");
const date = document.querySelector(".weather2 span");
const emoji = document.querySelector(".weather3 img");
const weather = document.querySelector(".weather3 span");
const search = document.querySelector(".searchField");
const form = document.querySelector("form");
let target = "delhi" ;

const fetchData = async() => {

    const url = `https://api.weatherapi.com/v1/current.json?key=cecad235e25a45c1b04174543230808&q=${target}`;
    
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    updateDom(22);
};

function updateDom(temp) {
    tempreature.innerText = temp;
}
fetchData();




