import React, { useState, useEffect } from 'react';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Button, Nav, Navbar, Form, FormControl } from 'react-bootstrap';

// This is a wrapper for google.script.run that lets us use promises.
import server from '../../utils/server';

const { serverFunctions } = server;

const NavigationBar = () => {

    const [ssLink, setSsLink] = useState("#");

    useEffect(() => {
        serverFunctions
          .getBoundSsLink()
          .then(setSsLink)
          .catch(alert);
      }, []);

    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">My React App</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href={ssLink}>Bound Spreadsheet</Nav.Link>
            <Nav.Link href="https://developers.google.com/apps-script">Apps Script</Nav.Link>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
        <br />
        </>
    )
}

export default NavigationBar;
