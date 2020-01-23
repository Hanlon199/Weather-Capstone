import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GraphController from './subComponent/GraphController';

export default class DataView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  loadChart(){
    console.log("REPORT SELECTED:", this.props.legend)
    return <h1>this.props.legend</h1>
  }

  render() {
    return (
          // width: '100%', height: '100%',
          <div className={'container'}
            style={{ backgroundColor: '#DEDEDE' }}
          >
          <h1>{this.props.legend} for 10/27-11/2</h1>
            <GraphController report={this.props.legend}></GraphController>
          </div>
    );
  }


}
