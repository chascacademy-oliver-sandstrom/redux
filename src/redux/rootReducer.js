import { combineReducers } from 'redux';
import cakeReducer from './cake/reducer';
import iceCreamReducer from './iceCream/reducer';
import cookieReducer from './cookies/reducer';
import userReducer from './user/reducer';

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    cookie: cookieReducer,
    user: userReducer
})

export default rootReducer