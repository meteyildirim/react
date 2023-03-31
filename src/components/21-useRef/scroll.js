import React, { useRef, useEffect } from "react";
import { Container } from "react-bootstrap";
import "./scroll.scss";

const Scroll = () => {
  const refAboutUs = useRef(null);
  const refAboutUsother = useRef(null);

  const handleScroll = () => {
    const aboutUsEl = refAboutUs.current;
    const cScrollPos = window.scrollY;

    const elScrollPos = aboutUsEl.offsetTop;
    const cWindowHeigh = window.innerHeight;
    const elCurrentHeight = aboutUsEl.offsetHeight;

    const targetScrollPos = elScrollPos - cWindowHeigh + elCurrentHeight;

    if (cScrollPos >= targetScrollPos) {
      aboutUsEl.classList.add("active");
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      {[...new Array(30)].map((item, index) => (
        <p
          key={index}
          className={index === 15 ? "about-us" : ""}
          ref={index === 15 ? refAboutUs : refAboutUsother}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          debitis magni fugiat earum necessitatibus impedit, inventore id
          voluptatibus itaque quis ipsa sint facilis, doloremque explicabo
          expedita officiis eaque ex a.
        </p>
      ))}
    </Container>
  );
};

export default Scroll;
