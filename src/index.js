import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { WizardProvider } from './context/wizard.provider';

ReactDOM.render(
  <React.StrictMode>
    <WizardProvider>
      <App />
    </WizardProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
