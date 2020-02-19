import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabletop from 'tabletop';


class App extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    Tabletop.init({
      key: '19L3cd-GVp4NcKdpEK_jgPSlvpLeROtv-VDRGERiHEGg',
      callback: googleData => {
        // console.log('google sheet data --->', googleData);
        this.setState(prevState => ({
          ...prevState,
          data: googleData
        }));
      },
      simpleSheet: true
    })
  }

  render() {
    // const { data } = this.state
    console.log(this.state.data);
    return (
      <div className="App">
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
        <table id="employee-details">
          <tr>
            <th>
              0.12 Patch
            </th>
            <th>
              Weight (KG)
            </th>
            <th>
              Rub price
            </th>
            <th>
              Damage
            </th>
            <th>
              Accuracy (%)
            </th>
            <th>
              Recoil (%)
            </th>
            <th>
              Penetration Value
            </th>
            <th>
              Projectile Count
            </th>
            <th>
              Projectile Speed (m/s)
            </th>
            <th>
              Penetration Chance
            </th>
            <th>
              Ricochet Chance
            </th>
            <th>
              Fragmentation Chance
            </th>
            <th>
              Armor Damage (%)
            </th>
          </tr>
          {
            this.state.data.map(obj => {
              return (
                <tr key={obj['0.12 Patch']}>
                  <td>{obj['0.12 Patch']}</td>
                  <td>{obj['Weight (KG)']}</td>
                  <td>{obj['Rub price']}</td>
                  <td>{obj['Damage']}</td>
                  <td>{obj['Accuracy (%)']}</td>
                  <td>{obj['Recoil (%)']}</td>
                  <td>{obj['Penetration Value']}</td>
                  <td>{obj['Projectile Count']}</td>
                  <td>{obj['Projectile Speed (m/s)']}</td>
                  <td>{obj['Penetration Chance']}</td>
                  <td>{obj['Ricochet Chance']}</td>
                  <td>{obj['Fragmentation Chance']}</td>
                  <td>{obj['Armor Damage (%)']}</td>
                </tr>
              )
            })
          }
        </table>
      </div>
    );
  }
}

export default App;
