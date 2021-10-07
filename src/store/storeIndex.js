import {createStore, combineReducers, applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {projectReducer} from "./projectsReducer"

const rootReducer = combineReducers({
    projects: projectReducer,
})


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
