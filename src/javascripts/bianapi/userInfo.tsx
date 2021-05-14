import { bianBase  } from './bianapi'
import * as _        from 'lodash'

export class userInfo extends bianBase {
    fetchAccountInfo(){
        if (this.apiKey === "") return []
        let __res = this.getHmacRequest("/api/v3/account", {})
        let __balances = JSON.parse(__res.body)['balances']
        __balances = _.filter(__balances, function(o) { return parseFloat(o.free) + parseFloat(o.locked) > 0;  });
        console.log("------------------")
        __res = this.getPublicRequest("/api/v3/ticker/price")
        let __currentPrices = JSON.parse(__res.body)
        //console.log(__currentPrices)
        for (var __balance of __balances ){
            //console.log(__balance)
            let __price = _.find(__currentPrices, {symbol: __balance["asset"] + "USDT"})
            if(__price === undefined){
              __price = _.find(__currentPrices, {symbol: __balance["asset"] + "BUSD"})
            }
            //console.log(__price)
            if(__price !== undefined){
                let __amount = parseFloat(__price['price'])*(parseFloat(__balance['free']) + parseFloat(__balance['locked']))
                if (__amount > 100){
                    __amount = __amount.toFixed(0)
                }else{
                    __amount = __amount.toFixed(6)
                }
                __balance = _.assignIn(__balance, {unitPrice: __price['price'], amount: __amount} )
            }       
            if(__balance['amount'] === undefined) __balance['amount'] = 0
        }
        __balances = _.orderBy(__balances, function(o) { return parseFloat(o.amount); }, ['desc'])
        let __idx = 1
        for (var __balance of __balances ){
            __balance = _.assignIn(__balance, {key: __idx})
            __idx += __idx
        }
        return __balances
    }
}

