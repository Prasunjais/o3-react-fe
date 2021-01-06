import React, { Component, Fragment } from 'react'
import BankSearch from './components/BankSearch';
import './resources/css/style.css';
export default class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <BankSearch />
        </div>
      </Fragment>
    )
  }
}
