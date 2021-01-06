import React, { Component } from 'react'

export default class BankTable extends Component {
  render() {
    const { banks, search } = this.props;
    return (
      <div className="col-md-12 mt-4" >
        <table className="table w-100">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">IFSC</th>
              <th scope="col">Branch Name</th>
              <th scope="col">Bank Name</th>
              <th scope="col">Address</th>
            </tr>
          </thead>
          <tbody>
            {banks && banks.length && banks.map((bank, index) => {
              let re = new RegExp(search, 'i') // creating a new regex expression
              if (bank.ifsc.match(re) || bank.branch.match(re))
                return (
                  <tr>
                    <th scope="row">{++index}</th>
                    <td>{bank.ifsc}</td>
                    <td>{bank.branch}</td>
                    <td>{bank.bank_name}</td>
                    <td>{bank.address}</td>
                  </tr>
                )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}
