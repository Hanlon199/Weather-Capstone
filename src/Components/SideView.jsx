import React, { } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import TabView from './subComponent/tab';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  panel: {
    paddingLeft: 10,
    backgroundColor: '#e9ecef'
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function SideView(props) {
  const data = {
    tabHeaders: [
      { label: 'Temperature' },
      { label: 'Humidity' },
      { label: 'Rainfall' },
      { label: 'Air Quality' },
      { label: 'Barometric Pressure' },
    ],
    tabPanel: [
      { value: 'Temperature', index: 1 },
      { value: 'Humidity', index: 2 },
      { value: 'Rainfall', index: 3 },
      { value: 'Air Quality', index: 4 },
      { value: 'Barometric Pressure', index: 5 },
    ]
  };

  // let currReport = props.legend;

  const classes = useStyles();
  const [currReport, setValue] = React.useState(props.legend);
  const handleChange = (event, newValue) => {
    // console.log("EVENT:" + event + " NEW VALUE:", newValue)
    props.onReportChange(newValue);
    setValue(newValue);
  };

  return (
    <div className={classes.root, classes.panel}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={currReport}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        {data.tabHeaders.map((header, index) => (
          <TabView type='header' value={header.label} index={index} key={index}></TabView>
        ))}

      </Tabs>
      {data.tabPanel.map((panel, index) => (
        <TabView type='panel' value={panel.value} index={panel.index} key={panel.index}></TabView>
      ))}

    </div>
  );
}