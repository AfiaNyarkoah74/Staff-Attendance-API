import axios from "axios";
import GetToken from "../services/get-token";

export default async function (context, req) {
  const staffdetails = context.bindingData?.staffdetails;
  try {
    const token = await GetToken();
    const response = await axios({
      method: "get",
      url: "https://graph.microsoft.com/v1.0/groups/dd2ce241-4ccb-42f2-957a-ba67bb88cc06/members",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    context.res = {
      status: 200,
      body: response.data,
    };
  } catch (err) {
    console.log(err);
    context.res = {
      status: 500,
      body: { status: false, message: err.message },
    };
  }
}
