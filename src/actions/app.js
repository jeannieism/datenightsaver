// import axios from 'axios';
import * as constants from 'constants/app-constants'
// import * as constants from 'constants/app-constants'

export const getVenues = () => {
  const payload = 'success'
  return {
    type: constants['INIT_VENUES'],
    venues: payload
  }
  // try {
  //   const venueData = axios.get('https://developers.zomato.com/api/v2.1/search',
  //     {
  //       headers: { 'user-key': process.env.REACT_APP_ZOMATO_KEYS },
  //       params: { 'q': ``, 'cuisines': ``, }
  //     }
  //   )
  //   console.log(venueData)
  //   // this.setState({
  //   //   venues: venueData.data.restaurants
  //   // });
  // } catch (err) {
  //   console.log(err.message);
  // }
}