import React, { Component } from 'react';

class Home extends Component {
    render() {
      return(
        <div className="App">
        <header className="App-header">
         
          <p className="p1">
            This is Home page.
      </p>
          <a
            className="App-link"
            href="https://testhoustongroup.firebaseapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to site
      </a>
        </header>
      </div>
      )
    }
  }
  
  export default Home;