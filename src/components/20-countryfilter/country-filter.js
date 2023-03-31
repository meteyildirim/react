import React, { useState, useEffect } from "react";
import { Table, Form } from "react-bootstrap";
import data from "./country.json";

const Countryfilter = () => {
  const [countries, setCountries] = useState(data);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const arr = data.filter((item) =>
      item.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    );

    setCountries(arr);
  }, [searchText]);

  return (
    <div className="p-5">
      <Form.Control
        type="text"
        placeholder="Type something"
        className="mb-3"
        onChange={(e) => setSearchText(e.target.value)}
      />

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Country Code</th>
            <th>Country Name</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((item, idx) => (
            <tr key={Math.random()}>
              {" "}
              {/**idx kullanabilirdik ama o performance issu olusturdugu icin ornegin siralama yparken index numarasi degisir ve react tekrar render yapar.. item.code kullanabilirsin*/}
              <td>{idx + 1}</td>
              <td>{item.name}</td>
              <td>{item.code}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Countryfilter;
