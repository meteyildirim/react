//1 react bootstraptan tabloyu al...
// https://react-bootstrap.netlify.app/components/table/#rb-docs-content
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  // restcountries.com api bak
  // await kullanabilmek icin async yaptik
  // axios fetc deoldugu gibi then ilede kullanilabilir ama yesillik olmasi icin boyle yaptik
  //npm install axios yapmalisin

  //sonrasinda gelen json data formatinda calisildi...gerekli datalari alma filan
  const loadData = async () => {

    try {
      const resp = await axios.get("https://restcountries.com/v3.1/all");
      console.log(resp);
      setCountries(resp.data)
      setLoading(false)
    } catch (err) {
      console.log(err)
    }

  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Bayrak</th>
          <th>Ülke</th>
          <th>Nüfus</th>
          <th>Baskent</th>
        </tr>
      </thead>
      <tbody>
        {countries.map((item, i) => (
          <tr key={i}>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>)
        )}
      </tbody>
    </Table>
  );
};

export default Countries;
