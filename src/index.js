import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Game from './components/Game'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
    <Provider store={store}>
           <Game />
    </Provider>,
  document.getElementById('root'));
registerServiceWorker();
