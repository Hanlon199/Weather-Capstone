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
        <div className="row" style={{position:'fixed',width:'100%', height:'100%'}}>
            <SideView legend={this.state.report} onReportChange={this.reportChange}/>
            <div className="col-md-10" style={{backgroundImage: "./Assets/background_cloudy.jpg"}}>
            <CurrData/>
            <DataView legend={this.state.report} />
            </div>
        </div>

        {/* <Button>Hello Bootstrap</Button> */}
        {/* <Button1>Hello Styled-Components</Button1> Need to create the Button1 component above ^*/}{" "}
        </div>
    );
  }


}
