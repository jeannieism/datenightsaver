import axios from 'axios';
import * as constants from '../constants/app-constants'

export function initData() {
  return (dispatch) => {
    axios.get('https://developers.zomato.com/api/v2.1/search', {
      headers: { 'user-key': process.env.REACT_APP_ZOMATO_KEYS },
      params: { 'q': ``, 'cuisines': ``, }
    }).then(resp => {
      dispatch({
        type: constants.INIT_VENUES,
        venues: resp.data.restaurants
      })
    })
  }
}