import { bianBase  } from './bianapi'

export class userInfo extends bianBase {
    fetchAccountInfo(){
        console.log(this.apiKey)
        let __res = this.getHmacRequest("/api/v3/account", {})
        console.log("The data from fetchAccountInfo")
        console.log(__res.body)
    }
}

