import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//COMPONENTS
import CurrData from "../Components/CurrData";
import DataView from "../Components/DataView";
import Nav from "../Components/Nav";
import SideView from "../Components/SideView";

export default class Main extends React.Component {
  state = {
    report:'Temperature'
  };

  
  
  constructor(props) {
    super(props);
    this.reportChange = this.reportChange.bind(this);
  }

  //using fat arrow function is cleaner way to create event handlers without constructor
  reportChange = (newReport) => {
    console.log("REPORT CHANGED: ", newReport);
    this.setState({report:newReport},
        ()=>{
          console.log(this.state.report)

        }
      );
  }
  
  render() {
    return (
        <div className="App" style={{height:'100%'}}>
        <Nav />

        <div className="currData">
            <CurrData/>
        </div>
        <div className="graphList">
          {
            ['Temperature','Humidity','Rainfall','Air Quality','Barometric Pressure'].map((header, index)=>(
              <DataView legend={header} key={index}/>
            ))
          }
        </div>

        {/* <Button>Hello Bootstrap</Button> */}
        {/* <Button1>Hello Styled-Components</Button1> Need to create the Button1 component above ^*/}{" "}
        </div>
    );
  }


}
