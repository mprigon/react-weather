import React, { Fragment, useState } from "react";

import axios from "axios";

import Details from "./Details";
// import { testResponseNow } from "../datadb/datanow";
// import { testResponse5Days } from "../datadb/datadb5days_new";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "../styles/Response.css";

function Response(props) {
    const [weather, setWeather] = useState([]);
    // const [countNow, setCountNow] = useState(0);
    // const [count5Days, setCount5Days] = useState(0);

    function sendRequest() {
        const apikey = "3fa6bb484d91161d737c0b7b7d737662";
        // const apikey = "123456789";

        if (props.myPeriod === 'now') {
            let requestString = `https://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.lon}&units=metric&appid=${apikey}`;
            console.log("from Response now request string = ", requestString);
            //setWeather([testResponseNow]);
            // setCountNow(countNow + 1);
            // console.log(testResponseNow);
            // console.log(testResponseNow.main.temp);
            // console.log("from Response props.myPeriod = ", props.myPeriod);
            // console.log("countNow = ", countNow);

            axios.get(requestString).then(res => {
                console.log("res now from Response", res);
                console.log("res.data now from Response", res.data);
                setWeather([res.data]);
                console.log("weather-now from Response", weather); //не обновляет, выводит предыдущее значение
            });

        } else if (props.myPeriod === "5 days") {
            let requestString = `https://api.openweathermap.org/data/2.5/forecast?lat=${props.lat}&lon=${props.lon}&units=metric&appid=${apikey}`;
            console.log("5 days request string", requestString);
            // setWeather(testResponse5Days.list);
            // setCount5Days(count5Days + 1);
            // console.log("props.myPeriod", props.myPeriod);
            // console.log("count5Days = ", count5Days);

            axios.get(requestString).then(res => {
                console.log("res 5days from Response", res);
                console.log("res.data.list 5days from Response", res.data.list);
                setWeather(res.data.list);
                console.log("response-5 days from Response", weather); //не обновляет, выводит предыдущее значение
            });

        } else {
            console.log(`from Response myPeriod is out of choice = ${myPeriod}`);
        }

        // тестовый вывод данных
        // let responseObj = testResponse5Days.list;
        // console.log("responseObj = ", responseObj);
        console.log("from Response props.myPeriod = ", props.myPeriod);
    }

    return (
        <Fragment>
            <Button variant="primary" className="btn-request" onClick={sendRequest}>
                Запросить прогноз погоды
            </Button>
            <Table striped bodered="true" className="response">
                <thead><tr><th>дата и время</th><th>температура, С</th><th>ощущается как, С</th><th>ветер, м/с</th><th>давление, кПа</th></tr></thead>
                <tbody>
                    {props.myPeriod === "5 days" &&
                        weather.map(details => <Details key="details.dt" period={props.myPeriod} details={details} />)}
                    {props.myPeriod !== "5 days" &&
                        weather.map(details => <Details key="details.id" period={props.myPeriod} details={details} />)}
                </tbody>
            </Table>
        </Fragment>
    )
}

export default Response;