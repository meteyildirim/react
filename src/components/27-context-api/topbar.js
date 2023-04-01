import React from "react";
import {useContext} from "react";
import StoreContext from "../../store";

const Topbar = () => {
const store = useContext(StoreContext);
const { currencies } = store;
  return (
    <header className="exchange">
      <nav>
        <h3>Exchange</h3>
        <div>
          <span>$:{(1/currencies.USD).toFixed(3)}</span>
          <span>€{(1/currencies.EUR).toFixed(3)}</span>
        </div>
      </nav>
    </header>
  );
};

export default Topbar;
