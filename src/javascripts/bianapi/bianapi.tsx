import reqwest                            from 'reqwest'
import request                            from 'sync-request';
import * as _                             from 'lodash'
import CryptoJS                           from 'crypto-js'

export class bianBase {
    constructor(_apiKey, _apiSecretKey){
        this.apiKey = _apiKey
        this.apiSecretKey = _apiSecretKey
    }

    getPublicRequest(_uri, _request={}){
        let __strRequest;

        let _arr = []
        _.forEach(_request, function(_v, _k) {_arr.push(_k + "=" + _v)})

        // Get the signed request
        if(_.size(_arr > 0)){
          return request('get', _uri , {
              type: 'json',
              contentType: 'application/json',
          });
        }else{
          __strRequest = _.join(_arr, "&")
          return request('get', _uri + '?' + __strRequest , {
              type: 'json',
              contentType: 'application/json',
          });
        }
 
            
        //reqwest({
        //    url: '/api/v3/time',
        //    type: 'json',
        //    method: 'get',
        //    contentType: 'application/json',
        //    success: res => {
        //      console.log(res);
        //    },
        //});
    }

    getHmacRequest(_uri, _request) {
        return this.sendHmacRequest('get', _uri, _request)
    }

    postHmacRequest(_uri, _request) {
        return this.sendHmacRequest('post', _uri, _request)
    }

    sendHmacRequest(_method, _uri, _request) {
        // Get the current epoch time
        const __currentEpochTS = Date.now()
 
        // Merge current timestamp to request
        _request = _.assignIn(_request, {'timestamp' : __currentEpochTS})

        let _arr = []
        _.forEach(_request, function(_v, _k) {_arr.push(_k + "=" + _v)})
        const __strRequest = _.join(_arr, "&")
 
        // Get the signed request
        const __signature =  CryptoJS.HmacSHA256(__strRequest, this.apiSecretKey ).toString(CryptoJS.enc.Hex)

        return request(_method, _uri + '?' + __strRequest + '&signature=' + __signature, {
            type: 'json',
            contentType: 'application/json',
            headers: { 'X-MBX-APIKEY': this.apiKey },
            
        });

        //return await new Promise(
        //    (_resolve, _reject) => {
        //      reqwest({
        //          url: _uri + '?' + __strRequest + '&signature=' + __signature,
        //          type: 'json',
        //          method: _method,
        //          contentType: 'application/json',
        //          headers: { 'X-MBX-APIKEY': this.apiKey },
        //          error: function (err) {
        //              _reject(err)
        //              return 
        //              //console.log(err.response)
        //          },
        //          success: res => {
        //            console.log(res);
        //            _resolve(res)
        //          },
        //      });
        //    }
        //)
    }
}

