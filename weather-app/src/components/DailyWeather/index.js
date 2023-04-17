import { useSelector } from "react-redux";
import { dayAfterTomorrow, formatTime, nextDay, roundToOneDecimal } from "../../selectors";

import "./index.css";

function DailyWeather() {
    const list = useSelector((state) => state.list);
    const secondFetchAPI = useSelector((state) => state.secondFetchAPI);
    const unit = useSelector((state) => state.temperature.temperatureymbol)

    return (
        <div id="dailyWeather">
            <h2 id="dailyTitle">Daily Weather</h2>
            <h3>{nextDay()}</h3>
            <div className="dailyView">

                {
                    secondFetchAPI
                    &&
                    list.list.filter(day => day.dt_txt.substr(0, 10) !== list.list[0].dt_txt.substr(0, 10)).slice(2, 7).map((item) => (
                        <div className="dailyCard">
                            <p className="dailyMain">{item.weather[0].main}</p>
                            <p className="dailyTime">{formatTime(item.dt)}</p>
                            <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="weather" className="dailyIcon" />
                            <p className="dailyTemperature">{roundToOneDecimal(item.main.temp)} {unit}</p>
                        </div>
                    ))
                }
            </div>
            <h3>{dayAfterTomorrow()}</h3>
            <div className="dailyView">
                {
                    secondFetchAPI
                    &&
                    list.list.filter(day => day.dt_txt.substr(0, 10) !== list.list[0].dt_txt.substr(0, 10)).slice(10, 15).map((item) => (
                        <div className="dailyCard">
                            <p className="dailyMain">{item.weather[0].main}</p>
                            <p className="dailyTime">{formatTime(item.dt)}</p>
                            <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="weather" className="dailyIcon" />
                            <p className="dailyTemperature">{roundToOneDecimal(item.main.temp)} {unit}</p>
                        </div>
                    ))
                }
                
            </div>
        </div>
    )
};

export default DailyWeather;