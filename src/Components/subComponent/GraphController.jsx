import React, { Component } from 'react'
import Temperature from './graph/Temperature';
import Humidity from './graph/Humidity';
import Rainfall from './graph/Rainfall';
import AirQuality from './graph/AirQuality';
import BarometricPressure from './graph/BarometricPressure';
export default class GraphController extends Component{

    
    render() {
        let report = this.props.report;
        // console.log("GRAPH CONTROLLER:", report)

        if (report === 'Temperature') {
            return <Temperature></Temperature>
        }
        else if (report === 'Humidity') {
            return <Humidity></Humidity>
        }
        else if (report === 'Rainfall') {
            return <Rainfall></Rainfall>
        }
        else if (report === 'Air Quality') {
            return <AirQuality></AirQuality>
        }
        else if (report === 'Barometric Pressure') {
            return <BarometricPressure></BarometricPressure>
        }else{
            return <h1>Error: No Report Selected</h1>
        }
        // No idea why switches don't work :(
        // switch (report) {
        //     case :
        //     case :
        //     case :
        //     case :
        //     case :
        //     default:
        // }
    }
}