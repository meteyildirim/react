import { Col, Container, Row } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/00-home/header/header";
import Menu from "./components/00-home/menu";
import HelloWorld from "./components/01-hello-world/hello-world";
import { HelloReact } from "./components/02-hello-react/hello-react";
import Jsx1 from "./components/03-jsx/jsx1";
import Jsx2 from "./components/03-jsx/jsx2";
import Jsx3 from "./components/03-jsx/jsx3";
import Jsx4 from "./components/03-jsx/jsx4";
import Jsx5 from "./components/03-jsx/jsx5";
import Jsx6 from "./components/03-jsx/jsx6";
import Style1 from "./components/04-styles/style1";
import Style2 from "./components/04-styles/style2";
import Style3 from "./components/04-styles/style3";
import Style4 from "./components/04-styles/style4";
import Clock1 from "./components/05-clock1/clock1";
import Greeting from "./components/06-props-1/greeting";
import Products from "./components/07-props-2/products";
import Clock2 from "./components/08-clock2/clock2";
import Gallery from "./components/09-image/gallery";
import Image from "./components/09-image/image";
import BootstrapDynamic from "./components/11-bootstrap/bootstrap-dynamic";
import BootstrapStatic from "./components/11-bootstrap/bootstrap-static";
import Icons from "./components/12-icons/icons";
import Events from "./components/13-events/events";
import Counter from "./components/15-useState/counter";
import Stateless from "./components/15-useState/stateless";
import UseStatex from "./components/15-useState/usestate";
import Birthday from "./components/17-birthday/birthday";
import UseEffect from "./components/18-useeffect/useeffect";
import UseEffect1 from "./components/18-useeffect/useeffect1";
import Clock3 from "./components/19-clock3/clock3";
import Countryfilter from "./components/20-countryfilter/country-filter";
import Scroll from "./components/21-useRef/scroll";
import Useref from "./components/21-useRef/useref";
import ClassComp from "./components/22-class-component/classComp";
import Usercards from "./components/23-fetch-users/user-cards";
import Countries from "./components/24-axios-countries/countries";
import ParentComp from "./components/25-child-to-parent/parent-comp";
import Form1 from "./components/26-form/form1";
import Form2 from "./components/26-form/form2";
import Form3 from "./components/26-form/form3";
import Form4 from "./components/26-form/form4";
import Form5 from "./components/26-form/form5";
import Form6 from "./components/26-form/form6";
import { MemoryRouter } from "react-router";
import StoreContext from "./store";
import { useEffect, useState } from "react";
import Exchange from "./components/27-context-api/exchange";
import axios from "axios";


// <MemoryRouter> </MemoryRouter> application bunlarin arasina alinirsa browserda end pointler gozukmeyecektir.
const App = () => {
  const [counter, setcounter] = useState(10);
  const [currencies, setcurrencies] = useState({})

  const loadData = async () => {
    try {
      const resp = await axios.get("https://api.frankfurter.app/latest?from=try")
      setcurrencies(resp.data.rates);
    } catch (error) {
      console.log(error)      
    }
  }

  useEffect(() => {
    loadData();
  
  }, [])
  
  return (
    <StoreContext.Provider value={{ counter, currencies }}>
      <BrowserRouter>
        <Header />
        <Container fluid>
          <Row>
            <Col sm={2}>
              <Menu />
            </Col>
            <Col sm={10}>
              <Routes>
                <Route path="/hello-world" element={<HelloWorld />} />
                <Route path="/jsx1" element={<Jsx1 />} />
                <Route path="/jsx2" element={<Jsx2 />} />
                <Route path="/jsx3" element={<Jsx3 />} />
                <Route path="/jsx4" element={<Jsx4 />} />
                <Route path="/exchange" element={<Exchange />} />
              </Routes>
            </Col>
          </Row>
        </Container>

        {/*        
      <HelloWorld /> 
      <HelloWorld />
      <HelloReact />
      <Jsx1 />
      <Jsx2 /> 
      <Jsx3 />
      <Jsx4 />
      <Jsx5 />
      <Jsx6 />
      <Style1 />
      <Style2 />
      <Style3 />
      <Style4 />      
      <Greeting />
      <Products />
      <Clock2 />
      <Clock2 textColor="yellow" bgColor='blue' />
      <Image />
      <Gallery/>  
      <BootstrapStatic />  
      <BootstrapDynamic />  
      <Icons />
      <Events />
      <Stateless />
      <UseStatex />
      <Counter />
      <Birthday />
      <UseEffect /> 
      <Clock3 />
      <UseEffect1 />
      <Countryfilter />
      <Useref />
      <ClassComp />
      <Scroll />
      <Usercards />
      <Countries />
      <ParentComp />
      <Form1 />
      <Form2 />
      <Form3 />
      <Form4 />
      <Form5 />
      <Form6/>

      */}
      </BrowserRouter>
    </StoreContext.Provider>

  );
};

export default App;
