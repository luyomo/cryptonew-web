import menu   from '../components/data/menu'
import * as _ from 'lodash'
import { MENU_SWITCH, MENU_INIT_STATE  } from "../types/constants";

export const ACTION_MENU_SWITCH = (_path) => {
    return async (dispatch) => {
        console.log("----- printing the menu")
        console.log("This is the path " + _path)
        let  __entry = _.filter(menu, { 'path': _path });
        //console.log(__entry)
        let  __res = MENU_INIT_STATE
        if ( _.size(__entry) > 0 ){
            __res = __entry[0].attributes
        }
        console.log(__res)
        dispatch({ type: MENU_SWITCH, payload: __res});
    };
};
