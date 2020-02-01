import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//COMPONENTS
import CurrData from "../Components/CurrData";
import DataView from "../Components/DataView";
import Nav from "../Components/Nav";
import LandingMap from "../Components/subComponent/LandingMap";
import About from './about';
// import SideView from "../Components/SideView";

export default class Main extends React.Component {
  state = {
    report:'Temperature',
    sensor: null,
    page: 'main',
  };

  
  
  constructor(props) {
    super(props);
    this.reportChange = this.reportChange.bind(this);
  }

  //using fat arrow function is cleaner way to create event handlers without constructor
  reportChange = (newReport) => {
    this.setState({report:newReport},()=>{});
  }

  pageChange = (newPage) => {
    this.setState({page:newPage},()=>{});
  }

  sensorSelect = (newSensor) => {
    this.setState({sensor:newSensor}, ()=>{console.log("SENSOR CHANGED: ", this.state.sensor)})
  }
  
  render() {
    let page;
    //render main page
    if(this.state.page == 'main'){
      page = <div>
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
    </div>
    }else{
      //render about page
      page = <About/>
    }

    return (
        <div className="App" style={{height:'100%'}}>
        <Nav onPageChange={this.pageChange}/>
        {/* <SideView legend={this.state.report} onReportChange={this.reportChange}/> */}
        {/* <div>
          <LandingMap onSelectSensor={this.sensorSelect}></LandingMap>
        </div> */}
        <div>
          {page}
        </div>
        

        </div>
    );
  }


}
