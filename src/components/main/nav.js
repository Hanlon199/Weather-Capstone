import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Brand from 'react-bootstrap/NavbarBrand';

export default class Navigation extends React.Component{
    render(){
        return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Brand className="display-inline">
                    <a className="clean-link" href="/">CT Weather</a>
                </Brand>
                <Form className="display-inline">
                    <FormControl type="text" placeholder="Weather near me" className="mr-sm-2"/>
                </Form>
                <Nav className="display-inline">
                    <NavLink href="/news">News </NavLink>
                    <NavLink href="/weather">Weather </NavLink>
                </Nav>
            </Navbar>           
        </div>
        );
    }
}
