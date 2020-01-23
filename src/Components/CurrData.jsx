import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import Modal from '@material-ui/core/Modal';
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
  WiStrongWind
} from 'react-icons/wi';
import { Row, Col, Form, FormCheck } from 'react-bootstrap';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing(0.5)
  },
  chip: {
    margin: theme.spacing(0.5)
  },
  button: {
    marginTop: '20%',
    right: '30px'
  },
  modal: {
    display: 'flex',
    justifyContent: 'center',
    height: '500px',
    width: '40%',
    marginLeft: '30%',
    marginTop: '100px',
    backgroundColor: '#E8ECEF',
    borderRadius: '5px',
    textShadow: '1px 1px black',
    boxShadow: '2px 2px 2px gray',
    color: 'white'
  },
  form: {
    marginTop: '20px'
  },
  button2: {
    marginTop: '30%',
    backgroundColor: '#2c8c99'
  }
}));

const paperStyle = {
  backgroundColor: '#E8ECEF',
  marginTop: '20px',
  marginBottom: '20px'
};

// localStorage.getItem('myLocalStorage') ||

export default function CurrData() {
  const classes = useStyles();
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Temperature:', check: true },
    { key: 1, label: 'Humidity:', check: true },
    { key: 2, label: 'Rainfall:', check: true },
    { key: 3, label: 'Air Quality:', check: true },
    { key: 4, label: 'Barometric Pressure:', check: true },
    { key: 5, label: 'Dew Point:', check: true },
    { key: 6, label: 'Human Perception:', check: true },
    { key: 7, label: 'UV Index:', check: true },
    { key: 8, label: 'Snow Accumulation:', check: true },
    { key: 9, label: 'Solar Radiation:', check: true },
    { key: 10, label: 'Wind Speed:', check: true },
    { key: 11, label: 'Wind Direction:', check: true },
    { key: 12, label: 'Wind Chill:', check: true }
  ]);

  // save to localstorage
  React.useEffect(() => {
    localStorage.setItem('myLocalStorage', chipData);
  }, [chipData]);

  // get from localstorage
  // localStorage.myMap = JSON.stringify(Array.from(map.entries()));
  // const map = new Map(JSON.parse(localStorage.myMap));

  const secondColStart = Math.floor(chipData.length / 2);

  const [open, setOpen] = React.useState(false);

  const handleDelete = chipToDelete => () => {
    setChipData(chips => chips.filter(chip => chip.key !== chipToDelete.key));
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  

  return (
    <Paper className={classes.root} style={paperStyle}>
      <Row>
        <Col sm={11}>
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
                <Chip
                  key={data.key}
                  icon={icon}
                  label={data.label}
                  // onDelete={handleDelete(data)}
                  className={classes.chip}
                />
              );
            }
          })}
        </Col>
        <Col sm={1}>
          <Button
            variant="contained"
            className={classes.button}
            onClick={handleOpen}
          >
            Filter
          </Button>
        </Col>
      </Row>
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
                          console.log('CHIP:', chipData);
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
