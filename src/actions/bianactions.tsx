//BINANCE_KEY_INPUT
import { BINANCE_TYPE_USER_BALANCE, BINANCE_INIT_STAT_USER_BALANCE } from "../types/constants";
import { bianBase } from '../javascripts/bianapi/bianapi'
import { userInfo  } from '../javascripts/bianapi/userInfo'

export const ACTION_BIAN_USER_BALANCES = (_insUserInfo) => {
    return async (dispatch) => {
        console.log("*********************************")
        console.log(_insUserInfo)
        if(_insUserInfo === null || _insUserInfo === undefined){
            dispatch({type: "OTHER"});
            return
        }
        let __balances = _insUserInfo.fetchAccountInfo()
        dispatch({ type:BINANCE_TYPE_USER_BALANCE, payload: {balances: __balances}});
    };
};
