import { BINANCE_TYPE_USER_BALANCE, BINANCE_INIT_STAT_USER_BALANCE  } from "../types/constants";
 
export const bianReducer = (state = BINANCE_INIT_STAT_USER_BALANCE, action) => {
  console.log("@@@@@@@@@@@@@@@@@@@@@@@")
  console.log(state)
  switch (action.type) {
    case BINANCE_TYPE_USER_BALANCE: {
      return action.payload;
    }
    default:
      return state;
  }
};
