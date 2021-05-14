import { combineReducers } from "redux";
import { googleReducer   } from "./reducerGoogle"
import { menuReducer     } from "./reducerMenu"
import { modalReducer    } from "./reducerModal"
import { bianReducer     } from "./reducerBian"

const rootReducer = combineReducers({
    googleReducer, menuReducer, modalReducer, bianReducer
});

export default rootReducer;
