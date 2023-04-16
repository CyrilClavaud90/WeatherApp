import { useSelector } from "react-redux";
import { formatTime } from "../../selectors";

import "./index.css";

function DailyWeather() {
    const list = useSelector((state) => state.list);
    const secondFetchAPI = useSelector((state) => state.secondFetchAPI);
    const unit = useSelector((state) => state.temperature.temperatureymbol)

    return (
        <div>
            <h2>Daily Weather</h2>
            <div>
                {
                    secondFetchAPI
                    &&
                    list.list.splice(0, 2).map((item) => (
                        <div>
                            <h3>{item.weather[0].main} {formatTime(item.dt)}</h3>
                            <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="weather" />
                            <p>{item.main.temp} {unit}</p>
                        </div>
                    ))
                }
                
                {/* <div>
                    <h3>Day</h3>
                    <img src="" alt="weather" />
                    <p>Temperature</p>
                </div>
                <div>
                    <h3>Day</h3>
                    <img src="" alt="weather" />
                    <p>Temperature</p>
                </div>
                <div>
                    <h3>Day</h3>
                    <img src="" alt="weather" />
                    <p>Temperature</p>
                </div> */}
            </div>
        </div>
    )
};

export default DailyWeather;