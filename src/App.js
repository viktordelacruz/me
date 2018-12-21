import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <p>
            Viktor Dela Cruz
          </p>
          <a
            className="app-link"
            href="https://github.com/viktordelacruz"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            className="app-link"
            href="https://www.linkedin.com/in/viktor-dela-cruz-776913118/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </header>
      </div>
    );
  }
}

export default App;