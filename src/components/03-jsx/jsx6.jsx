import React from "react";

const Jsx6 = () => {
  const countries = [
    { name: "Mali", code: "ML" },
    { name: "Malta", code: "MT" },
    { name: "Marshall Islands", code: "MH" },
    { name: "Martinique", code: "MQ" },
    { name: "Mauritania", code: "MR" },
    { name: "Mauritius", code: "MU" },
    { name: "Mayotte", code: "YT" },
    { name: "Mexico", code: "MX" },
  ];

  const a = 0;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Name of Country</th>
            <th>Code of Country</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country, index) => (
            <tr key = {index}>
              <td>{index+1}</td>
              <td>{country.name}</td>
              <td>{country.code}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Jsx6;
