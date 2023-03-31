import React from "react";

const styleTitle1 = {
  color: "green",
  fontSize: "2rem",
  fontWeight: "bold",
  textAlign: "center",
};

const Style2 = () => {
  return (
    <div>
      <h2 style={styleTitle1}>JSX Loops</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iste
        exercitationem consequatur laboriosam quis quaerat ratione commodi fuga
        aspernatur obcaecati, excepturi hic natus placeat cumque corrupti!
        Temporibus non tenetur ducimus.
      </p>

      <h2 style={{ ...styleTitle1, color: "blue" }}>JSX Loops</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iste
        exercitationem consequatur laboriosam quis quaerat ratione commodi fuga
        aspernatur obcaecati, excepturi hic natus placeat cumque corrupti!
        Temporibus non tenetur ducimus.
      </p>
    </div>
  );
};

export default Style2;
