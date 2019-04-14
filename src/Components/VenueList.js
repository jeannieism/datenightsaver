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
            <p>Date Night Saver's got yo back</p>
            </div>
            );
        }


        // Returns the array given to it, back shuffled.
        shuffleArray(array) {
            let i = array.length - 1;// i = 19
            for (; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i]; // temp = array[19]
            array[i] = array[j]; // array[19] = array[12]
            array[j] = temp; // array[12] == array[19]
            }
            return array;
        }

        // Takes an array, calls this.shuffleArray to shuffle it
        // then returns first index of the shuffledArray (should be diff each time as it is shuffled already. See line 95 to see the redundant mapping of shuffledRestos.)
        RecommendedResto(venues) {
            const shuffledRestos = this.shuffleArray(venues);
            console.log("this is shuffled restos: ", shuffledRestos);
            return shuffledRestos[0];
          }


        async fetchVenues() {
            try {
                const venueData = await axios.get('https://developers.zomato.com/api/v2.1/search', 
                    {
                        headers: {'user-key': ' 93a8d98e3faeb4f074c0cda510fa5ea0'},
                        params: {'q': ``, 'cuisines': ``,}
                    }
                )
                
                this.setState({
                    venues: venueData.data.restaurants
                });
                // console.log(this.state.venues)
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
                {this.state.venues.length ? this.renderVenues() : this.renderEmptyState() }
                </section>
            );
        }
    }


export default VenueList;

// Formerly under renderVenues function
//          const listOfRestos = this.state.venues.map((restaurant) => {
            //     console.log(restaurant)
            //     return (
            //             <li key={restaurant.restaurant.id} onClick={() => this.props.onSelectedVenueChange(this.state.venue)}>{restaurant.restaurant.name}
            //             <p>{restaurant.restaurant.user_rating.aggregate_rating}</p>
            //             </li>
            //     )
            // });
            // return (<div className="restaurantCard">Here are your restaurants:
            // <ul>{listOfRestos}</ul></div>);

// Formerly under shueffleRestos to return a single restaurant.
            // return (
            //   <ul>
            //     {shuffledRestos.map((resto) => {
            //         console.log("this is a resto", resto)
            //       return (
            //         <li key={resto.restaurant.id}>
            //         <p>{resto.restaurant.name}</p>
            //         </li>
            //       );
            //     })}
            //   </ul>
            // );