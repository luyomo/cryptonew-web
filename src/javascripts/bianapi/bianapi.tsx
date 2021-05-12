import reqwest                            from 'reqwest'

//export const requestBianapi = () => {
//   console.log("testing in the request bian api");
//      reqwest({
//        url: '/api/v3/exchangeInfo',
//        type: 'json',
//        method: 'get',
//        contentType: 'application/json',
//        success: res => {
//          console.log(res);
//        },
//      });
// }

export class bianBase {
    constructor(_apiKey, _apiSecretKey){
        this.apiKey = _apiKey
        this.apiSecretKey = _apiSecretKey
    }

    sendPublicRequest(_uri, _request){
        console.log("Calling in the sendPublicRequest")
        reqwest({
            url: '/api/v3/time',
            type: 'json',
            method: 'get',
            contentType: 'application/json',
            success: res => {
              console.log(res);
            },
        });
    }
}

