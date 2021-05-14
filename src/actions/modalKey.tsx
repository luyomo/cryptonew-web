//BINANCE_KEY_INPUT
import { BINANCE_KEY_INPUT, BINANCE_INIT_STATE  } from "../types/constants";
import { bianBase } from '../javascripts/bianapi/bianapi'
import { userInfo  } from '../javascripts/bianapi/userInfo'
 

export const ACTION_MODAL_KEY = (_apiKey, _apiSecretKey) => {
    return async (dispatch) => {
        let _insBianApi = new bianBase(_apiKey, _apiSecretKey)
        let _insUserInfo = new userInfo(_apiKey, _apiSecretKey)
        dispatch({ type: BINANCE_KEY_INPUT, payload: {apiKey: _apiKey, apiSecretKey: _apiSecretKey, insBianApi: _insBianApi, insUserInfo: _insUserInfo}});
    };
};
