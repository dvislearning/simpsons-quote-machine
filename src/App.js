import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './index.css';


class App extends Component {
  render() {
    const quote = "I was saying \"Boo-urns.\"";
    const author = "Hans Moleman"


    return (
      <div className="App">
        <div id="quote-box">
          <div id="text">{quote}
            <div id="author">
            <div id="author">
              {author}
            </div>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
