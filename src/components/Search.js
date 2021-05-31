// import our third party/external dependencies
import React, { useState } from "react";
import axios from "axios";

// import our custom components
import CurrentForecast from "./CurrentForecast";

// setting our constants
const API_KEY = "20f80f60d74acf5419e80528f290a5b9";

export default function Search() {
  let [searchInput, setSearchInput] = useState("");
  let [searchResults, setSearchResults] = useState([]);

  const displayTemp = (response) => {
    console.log(`response`, response);
    const stats = [
      {
        name: "Temperature:",
        value: `${Math.round(response.data.main.temp)}°C`,
      },
      {
        name: "Description:",
        value: `${response.data.weather[0].description}`,
        icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      },
      {
        name: "Humidity:",
        value: `${response.data.main.humidity}%`,
      },
      {
        name: "Wind:",
        value: `${response.data.wind.speed}mph`,
      },
    ];

    setSearchResults(stats);
  };

  const handleSearchChange = (event) => {
    event.preventDefault();
    setSearchInput(event.target.value);
  };

  const searchCity = (event) => {
    event.preventDefault();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${API_KEY}&units=metric`;
    axios.get(url).then(displayTemp);
  };

  return (
    <div>
      <form>
        <div className="row">
          <div className="col-6">
            <input
              className="form-control"
              type="Search"
              placeholder="Enter a city"
              value={searchInput}
              onChange={handleSearchChange}
            />
          </div>
          <div className="col-3">
            <input
              className="btn btn-primary w-100 funsies"
              type="submit"
              value="Search"
              onClick={searchCity}
            />
          </div>
          <div className="col-3">
            <input
              className="btn btn-secondary"
              value="Current Location"
              id="current-location-button"
            />
          </div>
        </div>
      </form>
      <CurrentForecast
        name="Seattle"
        datetime={new Date(Date.now()).toLocaleString("en-us", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
        })}
        temperature="72"
        humidity="12"
        windspeed="2"
      />
      <div className="weatherStats">
        {searchResults?.map(function (stat, index) {
          return (
            <ul key={`${stat.name}`}>
              <li>
                {stat.icon ? (
                  <img src={stat.icon} alt={"weather icon"} />
                ) : null}
                {stat.name} {stat.value}
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
