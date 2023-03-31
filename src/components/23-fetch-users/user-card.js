// 1- rafce
// 2- reactbootstrap git ve card al , card component icerigi ve burya yapistir

import React from "react";
import {Card} from "react-bootstrap"

const Usercard = (props) => {
  const { id, lastName, firstName, email, avatar } = props;
  return (
    // asagidaki kodu reactbootstraptan aldim
    <Card className="h-100">
      <Card.Img variant="top" src={avatar} />
      <Card.Body>
        <Card.Title>
          {firstName} {lastName}
        </Card.Title>
        <Card.Subtitle>{email}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default Usercard;
