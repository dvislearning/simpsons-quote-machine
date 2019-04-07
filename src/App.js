import React, { Component } from 'react';
import './App.css';
import './index.css';
import quotes from './simp-quotes.js'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quote: this.getQuote(),
    };
  }

  getQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
  };

  handleClick() {
    return this.setState({
      quote: this.getQuote(),
    })
  }

  render() {
    const quote = this.state.quote;
    const text = quote.text;
    const author = quote.author;


    return (
      <div className="App">
        <div id="quote-box">
          <div id="text">
          {text}
            <div id="author">
              - {author}
            </div>
          </div>
          <button id="new-quote" onClick={() => this.handleClick()}>New Quote</button>
          <a class="button" id="tweet-quote" title="Tweet this quote!" rel="noopener noreferrer" 
          href={"https://www.twitter.com/intent/tweet?text=" + text + "\r\n    -" + author} target="_blank">
            <i class="fa fa-twitter"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default App;
