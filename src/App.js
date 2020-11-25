import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header.js';
import Form from './Components/Form.js'
import VenueList from './Components/VenueList.js';
import Footer from './Components/Footer.js';

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
            title="🍕 Date Night Saver 🌮"/>
            <div className="formArea">
              <div className="mainCardUnclicked">
                <VenueList hasClicked={this.state.hasClicked}/>
              </div>
            </div>
            <Form onSelectedVenueChange={this.onSelectedVenueChange}/>
          <Footer 
            message="Your date night, saved by the Zomato API"
            />  
            </div>
    );
  }
}

export default App;


// 1. User hits "generate" to show a random restaurant
// 2. results to show: photos gallery, rating, reviews.
// 3. stretch goal #1: hide your api key
// 4. stretch goal #2: display ratings as star icons
// 5. stretch goal #3: swipe left to see next restaurant, swipe right to open in google maps