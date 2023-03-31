import React from "react";

const Events = () => {
  const sayHello = () => {
    alert("Hello");
  };

  const sayHello1 = (name) => {
    alert(`Hello ${name}`);
  };

  return (
    <div>
      <div onClick={sayHello}>Say Hello</div>
      <div onClick={() => sayHello1("Ali")}>Say Hello 1</div>
    </div>
  );
};

export default Events;
