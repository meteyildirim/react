import React, {useRef} from "react";

const Useref = () => {
  const emailRef = useRef(null); // input elemanina referans olustur

  const setFocus = () => {
    console.log(emailRef)
    emailRef.current.focus();
    emailRef.current.style.backgroundColor = "green"
    
  }

  return (
    <div className="mt-5">
      <input type="text" placeholder="Enter your email" ref={emailRef} />
      <button onClick={setFocus}>Set Focus</button>
    </div>
  );
};

export default Useref;
