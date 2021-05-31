import React, { useState } from "react";
import axios from "axios";
const apiKey = "20f80f60d74acf5419e80528f290a5b9";

export default function Search() {
  let [searchInput, setSearchInput] = useState("");
  let [searchResults, setSearchResults] = useState([]);

  const displayTemp = (response) => {
    const stats = [
      {
        name: "Temperature:",
        value: `${Math.round(response.data.main.temp)}°C`,
      },
      {
        name: "Description:",
        value: `${response.data.weather[0].description}`,
        icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
      },
      { 
        name: "Humidity:", 
        value: `${response.data.main.humidity}%`, 
      },
      {
        name: "Wind:", 
        value: `${response.data.wind.speed}mph`, 
      }
    ];

    setSearchResults(stats);
  }
  
  const handleSearchChange = (event) => {
    event.preventDefault();
    setSearchInput(event.target.value);
  };

  const searchCity = (event) => {
    event.preventDefault();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displayTemp);
  }

  return (
    <div>
      <form>
        <div className="row">
          <div className="col-6">
            <input
              className="form-control"
              type="Search"
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
          <div className="col-2">
            <input
            className="btn btn-secondary"
            value="Current Location"
            id="current-location-button"
            />
          </div>
        </div>
      </form>
      <div className="weatherStats">
        {searchResults?.map(function (stat, index) {
          return (
            <ul key={`${stat.name}`}>
              <li>
                {stat.icon ? <img src={stat.icon} alt={"weather icon"} /> : null}
                {stat.name} {stat.value}
              </li>
            </ul>
          );
        })}
           <div class="col-med-6">
                        <ul>
                            <li>
                            Humidity: <span id="humidity"></span>%
                            </li>
                            <li>
                            Wind: <span id="windspeed"></span> k/mh
                            </li>
                        </ul>
              </div>
      </div>
    </div>
  );
}