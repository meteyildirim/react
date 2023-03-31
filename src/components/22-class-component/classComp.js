import { Component } from "react";

export default class ClassComp extends Component {
  //butun componentler Component den turer

  constructor(props) {
    //state burada tanimlar
    super(props); //mutlaka yazilmali. props extend edilen class contructorina gonderilir

    this.state = {
      message: "Hello World",
      hour: 16,
      minute: 35,
    };
  }

  componentDidMount() {
    console.log("ilk giriste calisir");
  }

  componentDidUpdate() {
    console.log("re-render da calisir");
  }


  
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        {/* state kullanimi */}
        <h2>
          {this.state.hour}:{this.state.minute}
        </h2>

        <button onClick={this.setState({ hour: 20 })}>Set hour</button>
        <button>Set Minite</button>
      </div>
    );
  }
}
