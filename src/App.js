import React from 'react';
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import './style/App.scss';

import { Section_USERS   } from './components/Section_USERS';
import { Section_ALBUMS  } from './components/Section_ALBUMS';
import { Section_GALLERY } from './components/Section_GALLERY';

function App() {
  console.clear();
  var location = useLocation();
  return (
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
            <Route exact component={Section_GALLERY } path='/:userID/:albumID'  />
            <Route exact component={Section_ALBUMS  } path='/:userID'  />
            <Route exact component={Section_USERS   } path="/" />
        </Switch>
      </AnimatePresence>
  );
}

export default App;
