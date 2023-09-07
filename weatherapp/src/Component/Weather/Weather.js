import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import windImg from "../../images/wind.png";
import humidityImg from "../../images/humidity.png";
import searchImg from "../../images/search.png";
import cloudsImg from "../../images/clouds.png";
import MistImg from "../../images/mist.png";
import RainImg from "../../images/rain.png";
import DrizzleImg from "../../images/drizzle.png";
import SnowImg from "../../images/snow.png";
import WindImg from "../../images/wind.png";
import ClearImg from "../../images/clear.png";
import { enqueueSnackbar } from "notistack";
import LandingPage from "../LandingPage/LandingPage";

export default function Weather() {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [weatherlogo, setWeatherLogo] = useState(searchImg);

  let apiKey = "cb95a24c09c8574c18ede7e7a20f9415";

  const fetchData = async () => {
    try {
      let resposne = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${apiKey}`
      );
      setData(resposne.data);

      if (resposne.data.weather[0].main === "Clouds") {
        setWeatherLogo(cloudsImg);
      } else if (resposne.data.weather[0].main === "Mist") {
        setWeatherLogo(MistImg);
      } else if (resposne.data.weather[0].main === "Rain") {
        setWeatherLogo(RainImg);
      } else if (resposne.data.weather[0].main === "Drizzle") {
        setWeatherLogo(DrizzleImg);
      } else if (resposne.data.weather[0].main === "Snow") {
        setWeatherLogo(SnowImg);
      } else if (resposne.data.weather[0].main === "Wind") {
        setWeatherLogo(WindImg);
      } else if (resposne.data.weather[0].main === "Clear") {
        setWeatherLogo(ClearImg);
      }
    } catch (error) {
      enqueueSnackbar("Location Not Found", { variant: "error" });
      setData([]);
    }
  };

  const handleSearch = () => {
    if (searchInput.length !== "") {
      fetchData();
      console.log(data);
    } else {
      setData([]);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <input
          type="text"
          placeholder="Enter City Name"
          id="city"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="city"
        />
        <button id="search" className="search" onClick={handleSearch}>
          Search
        </button>
      </div>
      {data.cod === 200 ? (
        <>
          <div className="weather">
            <img src={weatherlogo} alt="search" className="weatherlogo" />
            <h2 id="temperature">
              {(data.main.temp - 273).toFixed(2)}
              <span>
                <sup>o</sup>C
              </span>
            </h2>
            <p id="description">{data.weather[0].description}</p>
            <h3 id="location">{data.name},{data.sys.country}</h3>
          </div>

          <div className="footer">
            <div
              className="humidity"
              style={{
                display: "flex",
                flexDirection: "row",
                margin: "10px",
                gap: "5px",
              }}
            >
              <img
                src={humidityImg}
                alt="humidityimg"
                style={{ width: "50px", height: "50px", marginTop: "10px" }}
              />
              <div>
                <h4
                  id="humiditypercentage"
                  style={{ fontSize: "25px", padding: "5px", color: "white" }}
                >
                  {data.main.humidity}%
                </h4>
                <p style={{ fontSize: "15px", padding: "5px", color: "white" }}>
                  Humidity
                </p>
              </div>
            </div>

            <div
              className="windspeed"
              style={{
                display: "flex",
                flexDirection: "row",
                margin: "10px",
                gap: "5px",
              }}
            >
              <img
                src={windImg}
                alt="windImg"
                style={{ width: "50px", height: "50px", marginTop: "10px" }}
              />
              <div>
                <h4
                  id="windspeed"
                  style={{
                    fontSize: "25px",
                    padding: "5px",
                    color: "white",
                    marginRight: "5px",
                  }}
                >
                  {data.wind.speed}Km/hr
                </h4>
                <p style={{ fontSize: "15px", padding: "5px", color: "white" }}>
                  Wind Speed
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <LandingPage searchImg={searchImg} humidityImg={humidityImg} windImg={windImg}/>
        </>
      )}
    </div>
  );
}
