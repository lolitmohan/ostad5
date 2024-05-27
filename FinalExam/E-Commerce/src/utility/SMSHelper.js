const axios = require("axios");

const SMSSend=async(MobileNumber,SMSText)=>{
    let URL="http://bulksmsbd.net/api/smsapi";
    let PostBody={
        "api_key":"qHtaAcNhibegFwFhOmE1",
        'senderid':"8809617617971",
        'number':MobileNumber,
        'message':SMSText
    }
    await axios.post(URL,PostBody)
}

module.exports=SMSSend;