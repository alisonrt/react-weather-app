import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function FiveDayForecast() {
  return (
    <div className="container-fluid" id="forecastBox">
      <div className="row">
        <div className="card-group">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Saturday</h5>
              <p className="card-text text-center">
                <ReactAnimatedWeather
                  icon="CLEAR_DAY"
                  color="white"
                  size={25}
                  animate={true}
                />
              </p>
              <p className="card-text text-center">
                <small>49˚ / 39˚</small>
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Sunday</h5>
              <p className="card-text text-center">
                <ReactAnimatedWeather
                  icon="SNOW"
                  color="white"
                  size={25}
                  animate={true}
                />
              </p>
              <p className="card-text text-center">
                <small>46˚ / 33˚</small>
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Monday</h5>
              <p className="card-text text-center">
                <ReactAnimatedWeather
                  icon="WIND"
                  color="white"
                  size={25}
                  animate={true}
                />
              </p>
              <p className="card-text text-center">
                <small>53˚ / 35˚</small>
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Tuesday</h5>
              <p className="card-text text-center">
                <ReactAnimatedWeather
                  icon="PARTLY_CLOUDY_DAY"
                  color="white"
                  size={25}
                  animate={true}
                />
              </p>
              <p className="card-text text-center">
                <small>52˚ / 34˚</small>
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Wednesday</h5>
              <p className="card-text text-center">
                <ReactAnimatedWeather
                  icon="WIND"
                  color="white"
                  size={25}
                  animate={true}
                />
              </p>
              <p className="card-text text-center">
                <small>53˚ / 36˚</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
