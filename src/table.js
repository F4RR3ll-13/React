import React, { Component } from 'react';

class Table extends Component {
   constructor() {
      super()
      this.state = {
         compare: []
      }
      this.insertCompare = this.insertCompare.bind(this);
   }
   insertCompare = (id) => {
      this.setState((prevState) => ({

         compare: [
            ...prevState.compare,
            this.props.data.filter((cho) => cho['0.12 Patch'] === id)[0]
         ]
      }));
      console.log(this.state.compare);
   }


   render() {
      // const { data } = this.state
      // console.log(this.state.data);
      return (
         <React.Fragment>
            {
               this.state.compare.length &&

               <table id="employee-details_2">
                  <tbody>
                     <tr>
                        <th>0.12 Patch</th>
                        <th>Weight (KG)</th>
                        <th>Rub price</th>
                        <th>Damage</th>
                        <th>Accuracy (%)</th>
                        <th>Recoil (%)</th>
                        <th>Penetration Value</th>
                        <th>Projectile Count</th>
                        <th>Projectile Speed (m/s)</th>
                        <th>Penetration Chance</th>
                        <th>Ricochet Chance</th>
                        <th>Fragmentation Chance</th>
                        <th>Armor Damage (%)</th>
                     </tr>
                     {
                        this.state.compare.map((obj) => {
                           console.log(this.state.compare);
                           return (
                              <tr key={obj['0.12 Patch']}  >
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
                  </tbody>
               </table>}
            <table id="employee-details">
               <tbody>
                  <tr>
                     <th>0.12 Patch</th>
                     <th>Weight (KG)</th>
                     <th>Rub price</th>
                     <th>Damage</th>
                     <th>Accuracy (%)</th>
                     <th>Recoil (%)</th>
                     <th>Penetration Value</th>
                     <th>Projectile Count</th>
                     <th>Projectile Speed (m/s)</th>
                     <th>Penetration Chance</th>
                     <th>Ricochet Chance</th>
                     <th>Fragmentation Chance</th>
                     <th>Armor Damage (%)</th>
                  </tr>
                  {
                     this.props.data.map((obj) => {
                        return (
                           <tr key={obj['0.12 Patch']} onClick={(e) => this.insertCompare(obj['0.12 Patch'], e)}>
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
               </tbody>
            </table>
         </React.Fragment>
      );

   }
}

export default Table;
