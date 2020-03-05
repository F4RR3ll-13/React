import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabletop from 'tabletop';
import Header from './header.js';
import Table from './table.js';


class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      compare: []
    }
  }


  componentDidMount() {
    Tabletop.init({
      key: '19L3cd-GVp4NcKdpEK_jgPSlvpLeROtv-VDRGERiHEGg',
      callback: (googleData) => {
        // console.log('google sheet data --->', googleData);
        this.setState((prevState) => ({
          ...prevState,
          data: googleData
        }));
      },
      simpleSheet: true
    })
  }

  render() {
    // const { data } = this.state
    // console.log(this.state.data);
    return (
      <div className="App">
        <Header />
        <Table data={this.state.data} />
      </div>
    );
    return (
      <tr onClick={this.insertCompare(['0.12 Patch'])}>
        {this.state.insertCompare}
      </tr>
    );
  }
}

export default App;
