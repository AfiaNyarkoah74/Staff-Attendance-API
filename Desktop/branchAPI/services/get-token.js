import axios from "axios";

import qs from "querystring";

export default async function GetToken() {
  var data = qs.stringify({
    client_id: "b6b6dcf2-d20c-42f7-8f3e-6cbe64867991",

    scope:
      "https://umbdigital.onmicrosoft.com/49499799-aa8d-4980-87a3-f1af0436be1d/.default",

    client_secret: "hnF8Q~RkfGs-CCKt5k1qCAj.pRa9_KVURvSqeaIQ",

    grant_type: "client_credentials",
  });

  var config = {
    method: "post",

    url: "https://umbdigital.b2clogin.com/umbdigital.onmicrosoft.com/B2C_1_umb_speedpay_prod/oauth2/v2.0/token",

    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },

    data: data,
  };

  try {
    const result = await axios(config);

    // console.log(result.data)

    return result.data;
  } catch (error) {
    console.log(error);
  }
}
