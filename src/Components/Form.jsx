import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            venues: []
        }
    }

handleChange = (event) => {
    this.setState({
        venue: event.target.value 
    })
}

componentDidMount() {
}

    render(venueData) {
        return (
            <div className="mainButton" onClick={() => this.props.onSelectedVenueChange(true)}>
            show me a restaurant
            </div>
        )
    }
}

export default Form;

// How can I reference listOfRestos in this component? I'm using restaurant.restaurant.id, it worked in venueList.js, but it's not working here now because it's not referncing fetchVenues anymore, right? 🤔 