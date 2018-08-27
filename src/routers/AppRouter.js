import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import HomePage from '../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';
import BTest1 from '../components/BTest1';
import CTest from '../components/CTest';
import DTest from '../components/DTest';
import PrvaPomoc1 from '../components/PrvaPomoc1';

const AppRouter=()=>(

  <Switch>
    <Route path="/" component={HomePage} exact={true} />

    <Route path="/BTest1" component={BTest1} />
    <Route path="/CTest" component={CTest} />
    <Route path="/DTest" component={DTest} />
      <Route path="/PrvaPomoc1" component={PrvaPomoc1} />
    <Route component={NotFoundPage} />
  </Switch>

);
export default AppRouter;
