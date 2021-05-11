import { combineReducers } from "redux";
import { googleReducer }   from "./reducerGoogle"
import { menuReducer }     from "./reducerMenu"

const rootReducer = combineReducers({
    googleReducer, menuReducer
});

export default rootReducer;
