import React, { Fragment, useState } from "react";

import axios from "axios";

import { useMediaQuery } from "react-responsive";

import CitySelect from "./CitySelect";
import PeriodSelect from "./PeriodSelect";
import Response from "./Response";

import "../styles/Main.css";

function Main() {

  // const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
  // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  const citiesList = {
    cities: [
        {"name": "Saint-Petersburg", "lat": 59.84, "lon": 30.32},
        {"name": "London", "lat": 51.50, "lon": -0.12},
        {"name": "Helsinki", "lat": 60.16, "lon": 24.95},
        {"name": "Barcelona", "lat": 41.40, "lon": 2.17},
    ]
  }
  
  // данные для выбора города и координат города для запроса прогноза
  const [myCity, setCity] = useState('Saint-Petersburg');
  console.log(myCity);
  
  let selectedCityDetails = citiesList.cities.filter((city) => city.name == myCity);
  console.log(selectedCityDetails);
  const lat = selectedCityDetails[0].lat;
  const lon = selectedCityDetails[0].lon;
  console.log(`from Main широта ${lat}, долгота ${lon}`);

  //данные для выбора периода запрашиваемого прогноза
  const [myPeriod, setPeriod] = useState('now');
  console.log(`from Main задан период прогноза  = ${myPeriod}`);

  return (
    <Fragment>
        <div className="col-6">
            <CitySelect myCity={myCity} setCity={setCity} />
        </div>
        <div className="col-6">
            <PeriodSelect myPeriod={myPeriod} setPeriod={setPeriod} />
        </div>
        <div className="col-12">
            <Response lat={lat} lon={lon} myPeriod={myPeriod} />
        </div>
    </Fragment>
  );
}

export default Main;