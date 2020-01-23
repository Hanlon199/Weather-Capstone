import React, { Component } from 'react'
import Tab from '@material-ui/core/Tab';
import { FaTemperatureHigh } from 'react-icons/fa'
import { GiHeavyRain } from 'react-icons/gi'
import { WiHumidity, WiWindy, WiBarometer } from 'react-icons/wi';
import TabPanel from './tabPanel';

const iconStyle = {
    height: '23px',
    width: '23px'
}

class TabView extends Component {
    // state = {
    // type = this.props.type,
    // value = this.props.value,
    // index = this.props.index,
    // }

    hoverSwitch(cond) {
        // this.state.hover = !this.state.hover;
        // console.log("HOVER:", cond)
    }

    a11yProps(index) {
        return {
            id: `vertical-tab-${index}`,
            'aria-controls': `vertical-tabpanel-${index}`,
        };
    }

    getIcon(label) {
        if (label === 'Temperature') {
            return <FaTemperatureHigh style={iconStyle} />
        }
        else if (label === 'Humidity') {
            return <WiHumidity style={iconStyle} />
        }
        else if (label === 'Rainfall') {
            return <GiHeavyRain style={iconStyle} />
        }
        else if (label === 'Air Quality') {
            return <WiWindy style={iconStyle} />
        }
        else if (label === 'Barometric Pressure') {
            return <WiBarometer style={iconStyle} />
        }
    }

    handleChange = (newValue) => {
        this.props.onChange('CHANGED', newValue)
    };

    render() {

        if (this.props.type === 'header') {
            let iconComp = null;
            iconComp = this.getIcon(this.props.value);
            // onMouseEnter={this.hoverSwitch(hover)} onMouseLeave={this.hoverSwitch(hover)}
            // className={{textDecoration: 'none', '& a:hover': {textDecoration: 'underline',}}}
            return (<Tab onClick={() => this.handleChange(this.props.value)} icon={iconComp} label={this.props.value} value={this.props.value} key={this.props.index} {...this.a11yProps(this.props.index)} />)
        } else {
            // handleChange={this.handleChange("hi", "bye")}
            return (<TabPanel value={this.props.value} index={this.props.index}></TabPanel>)
        }
    }

}

export default TabView;