import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Stateless = () => {
  let mode = "light";
  let classNames = "bg-light text-dark p-5";

  // mode
  const setMode = (m) => {
    mode = m;
    console.log(mode);

    if (mode === "dark") {
      classNames = "bg-dark text-light p-5";
      console.log(classNames);
    } else {
      classNames = "bg-light text-dark p-5";
      console.log(classNames);
    }

    // React use state kullanmayinca bu sekilde degistirebiliriz
    // bu buyuk domlarda performan sorunu olusturur..
    document.getElementById("b").setAttribute("class",classNames);
  };

  // `${mode==="light"? "bg-dark text-dark p-5":"bg-dark text-light p-5"}`

  return (
    <div id="b" className={classNames}>
      <h1 className="text-center">Dark/Light Mode switcher</h1>

      <div className="d-flex justify-content-evenly mt-5">
        <Button onClick={() => setMode("dark")}>Dark Mode</Button>
        <Button onClick={() => setMode("light")}>Light Mode</Button>
      </div>
    </div>
  );
};

export default Stateless;
