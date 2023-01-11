// ====== Import npm ======
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
// Le composant Provider permet de mettre a disposition le store (Redux) a tous les composants inscrit entre ses balises et ayant besoin du store
import { Provider } from 'react-redux';

// ====== Import local ======
import store from './store';
import WeatherApp from './components/WeatherApp';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <WeatherApp />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
