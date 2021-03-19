import React /*, { useState, useEffect }*/ from 'react';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Container } from 'react-bootstrap';
import SheetEditor from './SheetEditor';
import NavigationBar from './NavigationBar';

// This is a wrapper for google.script.run that lets us use promises.
import server from '../../utils/server';

const { serverFunctions } = server;

const App = () => {


  return (
      <div>
        <Container>
            <NavigationBar />
            <SheetEditor />
        </Container>
      </div>
    )
}

export default App;
