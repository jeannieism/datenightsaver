import React, { Component } from 'react';
import axios from 'axios';

class VenueList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            venues: [],
        }
    }

    renderVenues() {
        const singleResto = this.RecommendedResto(this.state.venues);
        return (
            <div>
                <div className="mainCard">
                    <div className="ratingScore">
                        <p>User ratings: {singleResto.restaurant.user_rating.aggregate_rating}</p></div>
                    <h2>{singleResto.restaurant.name}</h2>
                    <section className="subDetails">
                        <p>in {singleResto.restaurant.location.city}</p>
                        <p>serving {singleResto.restaurant.cuisines}</p>
                    </section>
                    <div className="restaurantReviews">
                        <p>Restaurant goers say this spot is {singleResto.restaurant.user_rating.rating_text}</p>
                    </div>
                    <div className="restaurantMenu">
                        <a className="seeMenu" href={singleResto.restaurant.menu_url}>See the menu</a>
                    </div>
                </div>
            </div>
        )

    }

    renderEmptyState() {
        return (
            <div className="loadingVenues">
                <h1>🍽</h1>
                <p>Date Night Saver to the resue!</p>
            </div>
        );
    }

    shuffleArray(array) {
        let i = array.length - 1;
        for (; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }


    RecommendedResto(venues) {
        const shuffledRestos = this.shuffleArray(venues);
        return shuffledRestos[0];
    }


    async fetchVenues() {
        try {
            const venueData = await axios.get('https://developers.zomato.com/api/v2.1/search',
                {
                    headers: { 'user-key': process.env.REACT_APP_ZOMATO_KEYS },
                    params: { 'q': ``, 'cuisines': ``, }
                }
            )
            this.setState({
                venues: venueData.data.restaurants
            });
        } catch (err) {
            console.log(err.message);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.hasClicked !== prevProps.hasClicked) {
            this.fetchVenues();
        }
    }

    render() {
        return (
            <section>
                {this.state.venues.length ? this.renderVenues() : this.renderEmptyState()}
            </section>
        );
    }
}

export default VenueList;