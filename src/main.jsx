import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './counter_app';
import './styles.css';

ReactDOM.render(
  <React.StrictMode>
    <CounterApp value={10} />
  </React.StrictMode>,
  document.getElementById('root')
);
