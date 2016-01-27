import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './components/navigation.js';

(function() {
  'use strict';
  // makes Webpack to compile the scss
  require('../scss/main.scss');
  const navigationContainer = document.getElementById('header');
  ReactDOM.render(
    <Navigation language={navigationContainer.dataset}/>,
    navigationContainer
  );
})();
