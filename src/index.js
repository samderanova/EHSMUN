import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Home';
import About from './pages/About';
import Resources from './pages/Resources';
import Welcome from './pages/Welcome';
import Gallery from './pages/Gallery';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

document.getElementById('link1').onclick = () => {
    ReactDOM.render(<Welcome />, document.getElementById('root'));
}
document.getElementById('link2').onclick = () => {
    ReactDOM.render(<About />, document.getElementById('root'));
}
document.getElementById('link3').onclick = () => {
    ReactDOM.render(<Resources />, document.getElementById('root'));
}
document.getElementById('link4').onclick = () => {
    ReactDOM.render(<Gallery />, document.getElementById('root'));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();