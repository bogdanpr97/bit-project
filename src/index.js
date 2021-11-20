import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import NotificationProvider from './providers/NotificationProvider';
import ToastNotification from './components/ToastNotification';

ReactDOM.render(
  <React.StrictMode>
    <NotificationProvider>
      <App />
      <ToastNotification />
    </NotificationProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
