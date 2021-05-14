import { bianBase  } from './bianapi'

export class userInfo extends bianBase {
    fetchAccountInfo(){
        if (this.apiKey === "") return []
        let __res = this.getHmacRequest("/api/v3/account", {})
        return JSON.parse(__res.body)['balances']
    }
}

