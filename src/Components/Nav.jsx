import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Brand from 'react-bootstrap/NavbarBrand';
import { Button } from 'react-bootstrap';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const color = {
  color: 'white',
  textDecoration: 'none'
};

const selectStyle = {
  input: () => ({
    width: '150px'
  })
}

const animatedComponents = makeAnimated();

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
      locations: [
        { value: 'hamden', label: 'Hamden' },
        { value: 'qu main campus', label: 'QU Main Campus' },
        { value: 'qu york hill campus', label: 'QU York Hill Campus' },
        { value: 'new haven', label: 'New Haven' },
      ]
    };
  }

  handleChange = selectedOption => {
    this.setState(
      { selectedOption },
      () => console.log(`Option selected:`, this.state.selectedOption)
    );
  }

  render() {
    const { selectedOption } = this.state;
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Brand className="display-inline">
            <a className="clean-link" href="/" style={color}>
              CT Weather
            </a>
          </Brand>
          <Select
            isMulti
            components={animatedComponents}
            value={selectedOption}
            onChange={this.handleChange}
            options={this.state.locations}
            styles={selectStyle}
          />
        </Navbar>
      </div>
    );
  }
}
