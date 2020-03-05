import React, { Component } from 'react';
import logo from './logo.svg';
class Header extends Component {



   render() {
      // const { data } = this.state
      // console.log(this.state.data);
      return (
         <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
               Happy Hacking
        </p>
            <a
               className="App-link"
               href="https://github.com/F4RR3ll-13"
               target="_blank"
               rel="noopener noreferrer"
            >
               F4RR3LL
        </a>
         </header>
      );

   }
}

export default Header;
