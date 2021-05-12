import menu                              from '../components/data/menu'
import { MENU_SWITCH, MENU_INIT_STATE  } from "../types/constants";

function findEntry(_path, _root){
    for (var _entry of _root){
        if (_entry["children"] !== undefined){
            let __ret = findEntry(_path, _entry['children'])
            if ( __ret !== undefined ) return __ret
        }else{
            if(_entry['path'] === _path) return _entry['attributes']
        }
    }
    return undefined
}

export const ACTION_MENU_SWITCH = (_path) => {
    return async (dispatch) => {
        let __entry = findEntry(_path, menu)
        if (__entry === undefined){
            dispatch({ type: MENU_SWITCH, payload: MENU_INIT_STATE});
        }else{
            dispatch({ type: MENU_SWITCH, payload: __entry});
        }
    };
};
