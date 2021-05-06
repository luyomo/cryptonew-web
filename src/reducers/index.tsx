import { combineReducers } from "redux";
import { googleReducer }   from "./reducerGoogle"
import { tabsReducer }     from "./reducerTabs"

const rootReducer = combineReducers({
    googleReducer, tabsReducer
});

export default rootReducer;
