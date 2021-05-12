//BINANCE_KEY_INPUT
import { BINANCE_KEY_INPUT, BINANCE_INIT_STATE  } from "../types/constants";

export const ACTION_MODAL_KEY = (_apiKey, _apiSecretKey) => {
    return async (dispatch) => {
        dispatch({ type: BINANCE_KEY_INPUT, payload: {apiKey: _apiKey, apiSecretKey: _apiSecretKey}});
    };
};
