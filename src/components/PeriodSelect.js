import React, { Fragment } from "react";

import Form from "react-bootstrap/Form";

import "../styles/PeriodSelect.css";

function PeriodSelect(props) {

    return (
        <Fragment>
            <h2>Выберите период времени для запроса прогноза погоды</h2>
            <Form.Select onClick={e => props.setPeriod(e.target.value)} className="periods">
                <option value="now">Погода сейчас</option>
                <option value="5 days">Прогноз на 5 дней</option>
            </Form.Select>
            <p>You selected period "{props.myPeriod}" for weather forecast</p>
        </Fragment>
    )
}

export default PeriodSelect;
