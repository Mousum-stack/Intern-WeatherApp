const tempreature = document.querySelector(".weather1");
const cityElem = document.querySelector(".weather2 p"); // Renamed for clarity
const dateElem = document.querySelector(".weather2 span"); // Not used currently
const emojiElem = document.querySelector(".weather3 img"); // Renamed for clarity
const weatherElem = document.querySelector(".weather3 span"); // Renamed for clarity
const search = document.querySelector(".searchField");
const form = document.querySelector("form");
let target = "Delhi, India";

const fetchData = async() => {
    const url = `https://api.weatherapi.com/v1/current.json?key=cecad235e25a45c1b04174543230808&q=${target}`;
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    const {
        current: {
            temp_c, 
            condition: {
                icon, 
                text
            }
        },
        location: {
            name, localtime
        },
    } = data;

    updateDom(temp_c, name, localtime, icon, text);
};

function updateDom(temp, cityName, time, iconSrc, weatherText) { // Parameters renamed
    tempreature.innerText = temp + "°C"; // Added "°C" for better presentation
    cityElem.innerText = cityName; // Use the renamed variable
   
    const exactTime = time.split(" ")[1];
    const exactDate = time.split(" ")[0];

    console.log(exactTime);
    console.log(exactDate);

    const exactDay = new Date(exactDate).getDay();
    dateElem.innerText = `${exactTime}, ${getDayname(exactDay)}, ${exactDate}`;

    emojiElem.src = iconSrc; // Use the renamed variable
    weatherElem.innerText = weatherText; // Use the renamed variable
}

fetchData();

function getDayname (num){
    switch(num){
        case 0:
            return "Sunday";
            case 1:
                return "Monday";
                case 2:
                return "Tuesday";
                case 3:
                return "Wednesday";
                case 4:
                return "Thursday";
                case 5:
                return "Friday";
                case 6:
                return "Saturday";

            default:
                break;
    }
}

const searchF = (e) => {
    e.preventDefault();
    
    if (search.value.trim() !== "") {  // ensure search value isn't empty
        target = search.value;
        fetchData();
    }
}

form.addEventListener("submit", searchF);
