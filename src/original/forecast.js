import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Forecast() {
    return (
<div class="container-fluid" id="forecastBox">
                <div class="row">
                    <div class="card-group">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Saturday</h5>
                                <p class="card-text"><ReactAnimatedWeather
                                    icon="CLEAR_DAY"
                                    color="white"
                                    size={25}
                                    animate={true}
                                /></p>
                                <p class="card-text"><small>49˚ / 39˚</small></p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Sunday</h5>
                                <p class="card-text"><ReactAnimatedWeather
                                    icon="SNOW"
                                    color="white"
                                    size={25}
                                    animate={true}
                                /></p>
                                <p class="card-text"><small>46˚ / 33˚</small></p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Monday</h5>
                                <p class="card-text"><ReactAnimatedWeather
                                    icon="WIND"
                                    color="white"
                                    size={25}
                                    animate={true}
                                /></p>
                                <p class="card-text"><small>53˚ / 35˚</small></p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Tuesday</h5>
                                <p class="card-text"><ReactAnimatedWeather
                                    icon="PARTLY_CLOUDY_DAY"
                                    color="white"
                                    size={25}
                                    animate={true}
                                /></p>
                                <p class="card-text"><small>52˚ / 34˚</small></p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Wednesday</h5>
                                <p class="card-text"><ReactAnimatedWeather
                                    icon="WIND"
                                    color="white"
                                    size={25}
                                    animate={true}
                                /></p>
                                <p class="card-text"><small>53˚ / 36˚</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
    }