import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

function tick() {
    const element = (
        <div>
            <h1>Hello, world! It is {new Date().toLocaleTimeString()}.</h1>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root2'));
}

setInterval(tick, 1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
