import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Home';
import OandA from './pages/OandA';
import WhatisMUN from './pages/WhatisMUN';
import Resources from './pages/Resources';
import Welcome from './pages/Welcome';
import Gallery from './pages/Gallery';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

document.getElementById('link1').onclick = () => {
    ReactDOM.render(<Welcome />, document.getElementById('root'));
}
document.getElementById('link3').onclick = () => {
    ReactDOM.render(<OandA />, document.getElementById('root'));
}
document.getElementById('link4').onclick = () => {
    ReactDOM.render(<WhatisMUN />, document.getElementById('root'));
}
document.getElementById('link5').onclick = () => {
    ReactDOM.render(<Resources />, document.getElementById('root'));
}
document.getElementById('link6').onclick = () => {
    ReactDOM.render(<Gallery />, document.getElementById('root'));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();