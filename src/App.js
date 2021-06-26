import { connect } from 'react-redux'
import React, { Component } from 'react';

import Form from './Components/Form.js'
import Footer from './Components/Footer.js';
import Header from './Components/Header.js';
import VenueList from './Components/VenueList.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      venues: [],
      hasClicked: false
    }
  }

  onSelectedVenueChange = (hasClicked) => {
    this.setState({
      hasClicked: hasClicked
    })
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <Header
          title="🍕 Date Night Saver 🌮" />
        <div className="formArea">
          <div className="mainCardUnclicked">
            <VenueList hasClicked={this.state.hasClicked} />
          </div>
        </div>
        <Form onSelectedVenueChange={this.onSelectedVenueChange} />
        <Footer
          message="Your date night, saved by the Zomato API"
        />
      </div>
    );
  }
}


export default connect(
  state => {
    return ({
      venues: state.app
    })
  }
)(App);