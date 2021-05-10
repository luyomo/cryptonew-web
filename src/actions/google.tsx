import jwt_decode        from "jwt-decode";
//import * as _            from "lodash"

import { GOOGLE_OAUTH2, GOOGLE_INIT_STATE } from "../types/constants";

export const googleOAuth2 = (googleResponse) => {
    console.log("Printing the auth");
    console.log(googleResponse);
    return async (dispatch) => {
        if (typeof googleResponse === 'undefined') {
            googleResponse = GOOGLE_INIT_STATE;
        }//else{
           // googleResponse = jwt_decode(googleResponse.tokenId);
            //googleResponse = jwt_decode(googleResponse.tokenId);
            //googleResponse = {"testKey": "testValue"}
        //}


        dispatch({ type: GOOGLE_OAUTH2, googleResponse });
    };
};
