// import React from 'react';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App.js';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hello, Padawans!</h1>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
