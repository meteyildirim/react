import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const UseEffect = () => {
  const [message, setMessage] = useState("");

  const [error, setError] = useState("");

  console.log(
    "Bu satir render ve rerender durumlarinda ve alltaki kismdan once calisir..."
  );

  useEffect(() => {
    console.log(
      `MOUNTING: BU satir component ilk yüklendiginde calisir ancak rerenderlarda calismaz`
    );
    // Buraya APiden bilgi cekecek kod koyulur, bilgi ceker ve state atar... sonra daha calismaz.
    // Buraya koymazsak her seferinde API baglanacak ve bu durumda masrafli bir durum olur
  }, []);

  useEffect(() => {
    console.log(
      `Bu satir render ve rerender durumlarinda ve alttaki stairdan sonra calisacak. Bu ozellikle alttaki elemenlere useRef ile ulasmak icin kullanilir` // mesla bir button text degistir...
    );
  });

  useEffect(() => {
    console.log(
      `Updating durumunda calisacak... mesala message degistiginde calissin`
    );
  }, [message]); // farki burada... message takip et... [message,id] iki seyi takip anlamina gelir

  return (
    <div>
      <div>
        {message}-{error}
      </div>
      <Button
        variant="info"
        onClick={() => setMessage("Hello" + Math.random())}
      >
        {" "}
        {/*Math.random() state her seferinde degissin ve rerender olusmasi icin konuldu..*/}
        Set me
      </Button>
      <Button
        variant="danger"
        onClick={() => setError("Some errors" + Math.random())}
      >
        Throw Error
      </Button>
    </div>
  );
};

export default UseEffect;
