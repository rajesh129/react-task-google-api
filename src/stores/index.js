import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {createBrowserHistory} from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import todoReducer from './todoSlice';
import loginReducer from './loginSlice';
import logoutReducer from './logoutSlice';
import userDataReducer from './userDataSlice';
import followerReducer from './followerSlice';
import timeoutReducer from './timeoutSlice';

const reducer = {
    todos: todoReducer,
    login: loginReducer,
    logout: logoutReducer,
    userData: userDataReducer,
    follower: followerReducer,
    timeout: timeoutReducer,
}

export const history = createBrowserHistory();

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    ...reducer,
  })

const routerRedux = routerMiddleware(history);

const store = configureStore({
    reducer: createRootReducer(history),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(routerRedux)
})

export default store;