import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";

import Usercard from "./user-card";

//cok onemli degil.. bekletme icin yazildi
function wait(ms) {
  var start = new Date().getTime();
  var end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}

const Usercards = () => {

const [users, setUsers] = useState([]);
//   
//   useEffect(() => {
//     fetch("https://64242e1cd6152a4d48088cd4.mockapi.io/users")
//       .then((resp) => resp.json())
//       .then((data) => {
//         setUsers(data);
//         setloading(false);
//       }); // setLoading sonradan ekledim...
//   }, []);

// yukaridakinden farkli olarak 5s bekletmek istedigimizde kodu setTimeout icerisne koyabiliriz
  useEffect(() => {
    setTimeout( ()=>{
        fetch("https://64242e1cd6152a4d48088cd4.mockapi.io/users")
    .then((resp) => resp.json())
    .then((data) => {
      setUsers(data);
      setloading(false);
    }); // setLoading sonradan ekledim...
},5000);
}, []);
    

  const [loading, setloading] = useState(true);

  // useEfect kullanmazsak surekli backend talep ettigi icin sonsoz donguye girebilir...

  // fetchin default methoddu getttir. farkli method icin, {method:"post"} seklinde eklemelisin
  //fetch genelde tercig etmeyecegiz. fetch asenkron. burayi beklemeden alt tarafi render edebilir.
  // bunu icin useState kullanacagiz
  //  eger datayi useState koyorsak data geldiginde tekrar render yapar ve sorun cozulur

  // eger cok gecikme oluyorsa front ette yuklenene kadar birseyler gostermeliyiz
  // reactboot spinner lari kullanacagiz

  return (
    <Container className="mt-5">
      {loading && <Spinner animation="border" variant="primary" />}
      {/* {wait(3)} */}
      <Row className="g-4">
        {users.map((user) => (
          <Col key={user.id} sm={6} md={4} lg={3} xl={2}>
            <Usercard {...user} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Usercards;
