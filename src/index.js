import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Clock from './Clock';
// import Toggle from './Toggle';
// import LoginControl from './LoginControl'
// import Page from './Page';
import * as serviceWorker from './serviceWorker';

function ListItem(props) {
    // 正确！这里不需要指定 key：
    return <li>{props.value}</li>;
}

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        // 正确！key 应该在数组的上下文中被指定
        <ListItem key={number.toString()}
                  value={number} />
    );
    return (
        <ul>
            {listItems}
        </ul>
    );
}

const numbers = [1, 2, 3, 4, 5];

ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
