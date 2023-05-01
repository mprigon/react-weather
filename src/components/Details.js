import React from "react";

function Details(props) {
    console.log("props.period from Details", props.period);

    return (
        <tr>
            <td>{ props.period === "5 days" && props.details.dt_txt }
                { props.period !== "5 days" && props.period }
            </td>
            <td>{props.details.main.temp}</td>
            <td>{props.details.main.feels_like}</td>
            <td>{props.details.wind.speed}</td>
            <td>{props.details.main.pressure}</td>
        </tr>
    )
}

export default Details;
