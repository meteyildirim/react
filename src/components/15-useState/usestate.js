import React, { useState } from "react";
import { Button } from "react-bootstrap";

const UseStatex = () => {
  const [mode, setMode] = useState("dark");


  return (
    <div
      id="b"
      className={`${
        mode === "light" ? "bg-light text-dark p-5" : "bg-dark text-light p-5"
      }`}
    >
      <h1 className="text-center">Dark/Light Mode switcher</h1>

      <div className="d-flex justify-content-evenly mt-5">
        <Button onClick={() => setMode("dark")}>Dark Mode</Button>
        <Button onClick={() => setMode("light")}>Light Mode</Button>
      </div>
    </div>
  );
};

export default UseStatex;
