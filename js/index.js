import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './components/navigation.js';
import DataSetUtils from './utils/dataset.js';

(function() {
  'use strict';
  // makes Webpack to compile the scss
  require('../scss/main.scss');

  const navigationContainer = document.getElementById('header');
  const language = DataSetUtils.filterAndReduceDataset(navigationContainer.dataset, "lang");
  const links = DataSetUtils.filterAndReduceDataset(navigationContainer.dataset, "link");

  ReactDOM.render(
    <Navigation language={language} links={links}/>,
    navigationContainer
  );
})();
