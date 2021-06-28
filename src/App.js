import { connect } from 'react-redux'
import React, { Component } from 'react';

import Form from './Components/Form'
import Footer from './Components/Footer';
import Header from './Components/Header';
import VenueList from './Components/VenueList';
import './App.css';

import * as AppActions from './actions/app'

class App extends Component {
  constructor() {
    super();
    this.state = {
      venues: [],
      hasClicked: false
    }
  }

  componentDidMount() {
    const { dispatch } = this.props

    dispatch(AppActions.initData())
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

export default connect(
  state => {
    return ({
      venue: state
    })
  }
)(App);