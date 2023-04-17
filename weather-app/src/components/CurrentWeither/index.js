import { useSelector } from "react-redux";

import './index.css';
import { currentTime, formatTime, roundToOneDecimal } from "../../selectors";

function CurrentWeither() {
    const unit = useSelector((state) => state.temperature.temperatureymbol)
    const data = useSelector((state) => state.city);
    // console.log(data);

    return (
        <div id="viewData">
            <section id="location">
                <p>{data.name}</p><p>{data.country}</p><p>{currentTime()}</p>
            </section>

            <section id="weather">
                <p id="main">{data.main}</p>
                <div id="primary">
                    <img src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`} alt="weather" id="icon" />
                    <p id="temperature">{roundToOneDecimal(data.temperature)} {unit}</p>
                    <div>
                        <p>Real fell : {roundToOneDecimal(data.feelsLike)} {unit}</p>
                        <p>Humidity : {data.humidity} %</p>
                        <p>Wind : {roundToOneDecimal(data.windSpeed)} {unit === "°F" ? "mph" : "m/s"}</p>
                    </div>
                </div>
                <div id="secondary">
                        <p>Sunrise : {formatTime(data.sunrise)} | Sunset : {formatTime(data.sunset)}</p>
                        <p>Higher : {roundToOneDecimal(data.temperatureMax)} {unit} | Lower : {roundToOneDecimal(data.temperatureMin)} {unit}</p>
                </div>
            </section>
        </div>
    )
};

export default CurrentWeither;