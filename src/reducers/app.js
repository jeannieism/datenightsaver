import * as constants from '../constants/app-constants'

const initialState = {
  venues: null
}

export default function application(state = initialState, action) {
  switch (action.type) {

    case constants['INIT_VENUES']:
      return Object.assign({}, state, {
        venues: action.venues
      })

    default:
      return state
  }
}