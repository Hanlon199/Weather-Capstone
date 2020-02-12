import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Modal from '@material-ui/core/Modal';
import axios from 'axios';
import { FaTemperatureHigh } from 'react-icons/fa';
import { GiHeavyRain, GiDew, GiThermometerCold } from 'react-icons/gi';
import {
  WiHumidity,
  WiWindy,
  WiBarometer,
  WiHot,
  WiSnow,
  WiDaySunny,
  WiWindDeg,
  WiStrongWind,
  WiDirectionDownLeft,
  WiDirectionDownRight,
  WiDirectionDown,
  WiDirectionLeft,
  WiDirectionRight,
  WiDirectionUpLeft,
  WiDirectionUpRight,
  WiDirectionUp
} from 'react-icons/wi';
import { GoInfo, GoEye } from 'react-icons/go';
import { Row, Col, Form, FormCheck } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import { useStyleData } from '../Assets/styles/CurrDataStyles/useStyleData';
import { StyleSheet } from '../Assets/styles/CurrDataStyles/styleSheet';
import { humanPercInd } from '../Assets/models/humanPerception';
import { uvIndexes } from '../Assets/models/uvIndexes';
import { WindDirArr } from '../Assets/models/windDirection';
import { WindDirection } from '../Assets/js/WindDirectionConv';
import { AirQualConversion } from '../Assets/js/AirQualityConversion';
import { UVConversion } from '../Assets/js/UVConversion';
import { HumanPercConv } from '../Assets/js/HumanPercConversion';
import * as utils from '../Assets/js/utils';

const useStyles = makeStyles(theme => useStyleData);


export default function CurrData() {
  const [init, setInit] = useState(true);
  const [timeStamp, updateTime] = useState('');
  const classes = useStyles();
  const [chipData, setChipData] = useState([
    {
      key: 0,
      value: 0,
      title: 'AirTemp_C',
      label: 'Temperature:',
      check: true,
      link: 'https://en.wikipedia.org/wiki/Air_temperature',
      metricUnit: '°C',
      imperialUnit: '°F',
      conversionType: 'temperature'
    },
    {
      key: 1,
      value: 0,
      title: 'RH',
      label: 'Humidity:',
      check: true,
      link: 'https://en.wikipedia.org/wiki/Relative_humidity',
      metricUnit: '%',
      imperialUnit: '%'
    },
    {
      key: 2,
      value: 0,
      title: 'RainReset',
      label: 'Rainfall:',
      check: true,
      link: 'https://en.wikipedia.org/wiki/Precipitation',
      metricUnit: 'L/m2',
      imperialUnit: 'kg/m2',
      conversionType: 'container'
    },
    // { key: 3, value:0, title:'3', label: 'Air Quality:', check: true, link:'https://en.wikipedia.org/wiki/Air_quality_index', unit: 'low'},
<<<<<<< HEAD
    { key: 4, value:0, title:'Barometer_KPa', label: 'Barometric Pressure:', check: true, link:'https://en.wikipedia.org/wiki/Atmospheric_pressure', metricUnit: 'kPa', imperialUnit: 'in Hg', conversionType:'pressure'  },
    { key: 5, value:0, title:'DewPoint', label: 'Dew Point:', check: true, link:'https://en.wikipedia.org/wiki/Dew_point', metricUnit: '°C', imperialUnit: '°F',  conversionType:'temperature'},
    { key: 6, value:0, title:'6', label: 'Human Perception:', check: true, link:'https://en.wikipedia.org/wiki/Dew_point#Relationship_to_human_comfort', unit: humanPercInd  },
    { key: 7, value:0, title:'7', label: 'UV Index:', check: true, link:'https://en.wikipedia.org/wiki/Ultraviolet_index', unit: uvIndexes  },
    { key: 8, value:0, title:'7', label: 'Snow Accumulation:', check: true, link:'https://en.wikipedia.org/wiki/Snow', metricUnit: 'mm', imperialUnit: 'in', conversionType:'length' },
    { key: 9, value:0, title:'solar', label: 'Solar Radiation:', check: true, link:'https://en.wikipedia.org/wiki/Solar_irradiance', metricUnit: 'W/m', imperialUnit: 'W/ft', conversionType:'watts'  },
    { key: 10, value:0, title:'WindSpeed_ms', label: 'Wind Speed:', check: true, link:'https://en.wikipedia.org/wiki/Wind_speed', metricUnit: 'm/s', imperialUnit: 'mph', conversionType:'speed'  },
    { key: 11, value:0, title:'WindDirect_deg', label: 'Wind Direction:', check: true, link:'https://en.wikipedia.org/wiki/Wind_direction', unit: 'N'  },
    { key: 12, value:0, title:'WindChill', label: 'Wind Chill:', check: true, link:'https://en.wikipedia.org/wiki/Wind_chill', metricUnit: '°C', imperialUnit:'°F', conversionType:'temperature'  }
=======
    {
      key: 4,
      value: 0,
      title: 'Barometer_KPa',
      label: 'Barometric Pressure:',
      check: true,
      link: 'https://en.wikipedia.org/wiki/Atmospheric_pressure',
      metricUnit: 'kPa',
      imperialUnit: 'in Hg',
      conversionType: 'pressure'
    },
    {
      key: 5,
      value: 0,
      title: 'DewPoint',
      label: 'Dew Point:',
      check: true,
      link: 'https://en.wikipedia.org/wiki/Dew_point',
      metricUnit: '°C',
      imperialUnit: '°F',
      conversionType: 'dew'
    },
    {
      key: 6,
      value: 0,
      title: '6',
      label: 'Human Perception:',
      check: true,
      link:
        'https://en.wikipedia.org/wiki/Dew_point#Relationship_to_human_comfort',
      unit: humanPercInd
    },
    {
      key: 7,
      value: 0,
      title: '7',
      label: 'UV Index:',
      check: true,
      link: 'https://en.wikipedia.org/wiki/Ultraviolet_index',
      unit: uvIndexes
    },
    {
      key: 8,
      value: 0,
      title: '7',
      label: 'Snow Accumulation:',
      check: true,
      link: 'https://en.wikipedia.org/wiki/Snow',
      metricUnit: 'mm',
      imperialUnit: 'in',
      conversionType: 'length'
    },
    {
      key: 9,
      value: 0,
      title: 'solar',
      label: 'Solar Radiation:',
      check: true,
      link: 'https://en.wikipedia.org/wiki/Solar_irradiance',
      metricUnit: 'W/m',
      imperialUnit: 'W/ft',
      conversionType: 'watts'
    },
    {
      key: 10,
      value: 0,
      title: 'WindSpeed_ms',
      label: 'Wind Speed:',
      check: true,
      link: 'https://en.wikipedia.org/wiki/Wind_speed',
      metricUnit: 'm/s',
      imperialUnit: 'mph',
      conversionType: 'speed'
    },
    {
      key: 11,
      value: 0,
      title: 'WindDirect_deg',
      label: 'Wind Direction:',
      check: true,
      link: 'https://en.wikipedia.org/wiki/Wind_direction',
      unit: 'N'
    },
    {
      key: 12,
      value: 0,
      title: 'WindChill',
      label: 'Wind Chill:',
      check: true,
      link: 'https://en.wikipedia.org/wiki/Wind_chill',
      metricUnit: '°C',
      imperialUnit: '°F',
      conversionType: 'temperature'
    }
>>>>>>> afb0c2d2f2bba66e309a766ba0c6f307c8644e23
  ]);

  // save to localstorage
  useEffect(() => {
    localStorage.setItem('myLocalStorage', chipData);
  }, [chipData]);

  // get from localstorage
  // localStorage.myMap = JSON.stringify(Array.from(map.entries()));
  // const map = new Map(JSON.parse(localStorage.myMap));

  const loadData = async chips => {
    //UPDATES every 35 seconds, right now it is set to 5 for testing
    let serverData = await axios.get(`/api/main/load-all/mount_carmel`);
    serverData = serverData['data'];
    updateTime(serverData['Time Stamp']);
    // console.log("CHIPPYS: ", chips)
    return chips.map(element => {
      element.value = serverData[element.title];
      return {
        ...element,
        value: element.value === undefined ? 0 : element.value
      };
    });
  };
  // const [serverData, updateData] = useState(loadData(chipData));
  useEffect(() => {
    let timeout = init == true ? 0 : 20000;
    setTimeout(async () => {
      setChipData(await loadData(chipData));
    }, timeout);
    setInit(false);
  });

  const loadUnit =
    localStorage['unitType'] !== undefined
      ? localStorage['unitType']
      : 'imperial';
  const [unitType, changeUnit] = useState(loadUnit);
  const handleUnitChange = () => {
    let newUnit = '';
    if (unitType === 'imperial') {
      changeUnit('metric');
      newUnit = 'metric';
    } else if (unitType === 'metric') {
      changeUnit('imperial');
      newUnit = 'imperial';
    } else {
    }
    localStorage.setItem('unitType', newUnit);
  };

  const secondColStart = Math.floor(chipData.length / 2);

  const [open, setOpen] = useState(false);

  const handleDelete = chipToDelete => () => {
    setChipData(chips => chips.filter(chip => chip.key !== chipToDelete.key));
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function DataConversion(props) {
    const data = props.data;
    const title = props.title;
    const type = props.type;
    const conversionType = props.conversionType;
    if (title === 'Wind Direction:') {
      return (
        <div>
          <WindDirection windDir={data} /> ({data}°)
        </div>
      );
    } else if (title == 'Human Perception:') {
      return <HumanPercConv value={data} />;
    } else if (title == 'UV Index:') {
      return <UVConversion value={data} />;
    } else if (title == 'Air Quality:') {
      //TODO, figure out if air quality it still going to be used
      return <UVConversion value={data} />;
    }

    return <span>{utils.ConvertData(data, conversionType, type)}</span>;
  }

  function UnitDisplayed(props) {
    const data = props.data;
    const type = props.type;
    if (type === 'metric') {
      return <span>{data.metricUnit}</span>;
    } else if (type === 'imperial') {
      return <span>{data.imperialUnit}</span>;
    } else {
      return <span>{data.unit}</span>;
    }
  }

  return (
    <Paper className={classes.root} style={StyleSheet['paperStyle']}>
      {/* <Row> */}
      {chipData.map(data => {
        let icon;
        if (data.label === 'Temperature:') {
          icon = <FaTemperatureHigh />;
        } else if (data.label === 'Humidity:') {
          icon = <WiHumidity />;
        } else if (data.label === 'Rainfall:') {
          icon = <GiHeavyRain />;
        } else if (data.label === 'Air Quality:') {
          icon = <WiWindy />;
        } else if (data.label === 'Barometric Pressure:') {
          icon = <WiBarometer />;
        } else if (data.label === 'Dew Point:') {
          icon = <GiDew />;
        } else if (data.label === 'Human Perception:') {
          icon = <GoEye />;
        } else if (data.label === 'UV Index:') {
          icon = <WiHot />;
        } else if (data.label === 'Snow Accumulation:') {
          icon = <WiSnow />;
        } else if (data.label === 'Solar Radiation:') {
          icon = <WiDaySunny />;
        } else if (data.label === 'Wind Speed:') {
          icon = <WiStrongWind />;
        } else if (data.label === 'Wind Direction:') {
          icon = <WiWindDeg />;
        } else if (data.label === 'Wind Chill:') {
          icon = <GiThermometerCold />;
        }

        if (data.check !== false) {
          return (
            //Now using card :)
            <Card className={classes.card} key={data.key}>
              <CardHeader
                style={StyleSheet['cardStyle']}
                avatar={
                  <Avatar aria-label="icon" className={classes.avatar}>
                    {icon}
                  </Avatar>
                }
                title={data.label}
                subheader={timeStamp}
              />
              <CardContent style={StyleSheet['cardStyle']}>
                <Typography
                  variant="h5"
                  component="h5"
                  style={StyleSheet['valueFormat']}
                >
                  <DataConversion
                    data={data.value}
                    type={unitType}
                    title={data.label}
                    conversionType={data.conversionType}
                  />{' '}
                  <UnitDisplayed data={data} type={unitType} />
                </Typography>
              </CardContent>
              <CardActions style={StyleSheet['cardStyle']}>
                <a style={StyleSheet['info']} href={data.link} target="_blank">
                  <GoInfo />
                </a>
              </CardActions>
            </Card>
            // <Chip
            //   key={data.key}
            //   icon={icon}
            //   label={data.label}
            //   // onDelete={handleDelete(data)}
            //   className={classes.chip}
            // />
          );
        }
      })}

      <Card className={classes.cardFilter}>
        <CardActions>
          <Button
            variant="contained"
            className={classes.button}
            onClick={handleOpen}
          >
            Filter
          </Button>
          <FormControlLabel
            control={
              <Switch
                checked={unitType === 'imperial'}
                onClick={handleUnitChange}
                value={unitType}
              />
            }
            label={unitType}
          />
        </CardActions>
      </Card>
      {/* </Row> */}
      <Modal open={open} onClose={handleClose} className={classes.modal}>
        <div>
          <Row>
            <h1>Weather Filter Control</h1>
          </Row>
          <Row>
            <Form>
              <Row>
                <Col>
                  {chipData.slice(0, secondColStart).map(data => (
                    <div
                      key={data.key}
                      className="mb-3"
                      className={classes.form}
                    >
                      <FormCheck
                        inline
                        label={data.label}
                        type={'checkbox'}
                        id={data.key}
                        defaultChecked={data.check}
                        onChange={e => {
                          if (chipData[data.key].check === false) {
                            chipData[data.key].check = true;
                          } else {
                            chipData[data.key].check = false;
                          }
                          console.log('CHIP:', chipData);
                        }}
                      />
                    </div>
                  ))}
                </Col>
                <Col>
                  {chipData.slice(secondColStart).map(data => (
                    <div
                      key={data.key}
                      className="mb-3"
                      className={classes.form}
                    >
                      <FormCheck
                        inline
                        label={data.label}
                        type={'checkbox'}
                        id={data.key}
                        defaultChecked={data.check}
                        onChange={e => {
                          if (chipData[data.key].check === false) {
                            chipData[data.key].check = true;
                          } else {
                            chipData[data.key].check = false;
                          }
                          // console.log('CHIP:', chipData);
                        }}
                      />
                    </div>
                  ))}
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button
                    variant="contained"
                    className={classes.button2}
                    onClick={handleClose}
                  >
                    Cancel
                  </Button>
                </Col>
                <Col>
                  <Button
                    variant="contained"
                    className={classes.button2}
                    onClick={handleClose}
                  >
                    Save Changes
                  </Button>
                </Col>
              </Row>
            </Form>
          </Row>
        </div>
      </Modal>
    </Paper>
  );
}
