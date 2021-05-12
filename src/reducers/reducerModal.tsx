import { BINANCE_KEY_INPUT, BINANCE_INIT_STATE   } from "../types/constants";
 
export const modalReducer = (state = BINANCE_INIT_STATE, action) => {
  switch (action.type) {
    case BINANCE_KEY_INPUT: {
      return action.payload;
    }
    default:
      return state;
  }
};
