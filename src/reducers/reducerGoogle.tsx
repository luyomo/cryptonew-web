import { GOOGLE_OAUTH2, GOOGLE_INIT_STATE } from "../types/constants";

export const googleReducer = (state = GOOGLE_INIT_STATE, action) => {
  switch (action.type) {
    case GOOGLE_OAUTH2: {
      return action.googleResponse;
    }
    default:
      return state;
  }
};
