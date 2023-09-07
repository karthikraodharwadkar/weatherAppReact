import React from "react";

export default function LandingPage({searchImg,humidityImg,windImg}) {
  return (
    <>
      <div className="weather">
        <img src={searchImg} alt="search" className="weatherlogo" />
        <h2 id="temperature">
          0
          <span>
            <sup>o</sup>C
          </span>
        </h2>
        <p id="description">Weather description</p>
        <h3 id="location">Search Location</h3>
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
              0%
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
              0Km/hr
            </h4>
            <p style={{ fontSize: "15px", padding: "5px", color: "white" }}>
              Wind Speed
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
