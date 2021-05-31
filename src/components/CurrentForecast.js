import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function CurrentForecast({
  name,
  datetime,
  temperature,
  humidity,
  windspeed,
}) {
  return (
    <div className="row currentForecast">
      <div className="col-6">
        <div className="currentForecast--header">
          <h1>{name}</h1>

          <span className="currentForecast--updatedLabel">
            Last Updated:
          </span>
          <div className="currentForecast--datetime">
            {datetime}
          </div>
        </div>

        <div className="row currentForecast--details">
          <div className="col-2 currentForecast--icon">
            <ReactAnimatedWeather
              icon="SNOW"
              color="white"
              size={50}
              animate={true}
            />
          </div>

          <div className="col-8">
            Temperature: {temperature}ºF <br />
            Humidity: {humidity}% <br />
            Wind: {windspeed} k/mh
          </div>
        </div>
      </div>
    </div>
  );
}
