import React, { Fragment } from "react";
import Form from "react-bootstrap/Form";

function CitySelect(props) {

    return (
      <Fragment>
        <h2>Выберите город из списка</h2>
      <Form.Select onClick={e => props.setCity(e.target.value)}>
          <option value="Saint-Petersburg">Saint-Petersburg</option>
          <option value="London">London</option>
          <option value="Helsinki">Helsinki</option>
          <option value="Barcelona">Barcelona</option>
      </Form.Select>
      <p>Hello, You selected {props.myCity}.</p>
      </Fragment>
    )
}

export default CitySelect;
