import jwt_decode        from "jwt-decode";

import { GOOGLE_OAUTH2, GOOGLE_INIT_STATE } from "../types/constants";

export const googleOAuth2 = (googleResponse) => {
    return async (dispatch) => {
        if (typeof googleResponse === 'undefined') {
            googleResponse = GOOGLE_INIT_STATE;
        }

        dispatch({ type: GOOGLE_OAUTH2, googleResponse });
    };
};
