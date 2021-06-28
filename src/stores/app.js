import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/app.js"
import thunkMiddleware from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(rootReducer, composedEnhancer)

// const store = configureStore({
//   reducer: {
//     venues: venuesReducer
//   }
// })

// Tips from Discord:
// - https://discord.com/channels/102860784329052160/103538784460615680/858546364355182622
// - https://discord.com/channels/102860784329052160/103538784460615680/858547378365005895
// - https://discord.com/channels/102860784329052160/103538784460615680/858548192600784896
// - 

export default store