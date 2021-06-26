import Form from './Components/Form.js'
import Footer from './Components/Footer.js';
import Header from './Components/Header.js';
import React, { Component } from 'react';
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

export default App;