import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Pocetna from './components/Pocetna';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import './styles/components/App.scss';
import './styles/components/Footer.scss';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

ReactDOM.render(
<BrowserRouter>
  <Pocetna />
  </ BrowserRouter>
  , document.getElementById('app'));
