import { combineReducers } from "redux";
import { googleReducer   } from "./reducerGoogle"
import { menuReducer     } from "./reducerMenu"
import { modalReducer    } from "./reducerModal"

const rootReducer = combineReducers({
    googleReducer, menuReducer, modalReducer
});

export default rootReducer;
