import cookie from "cookiejs";
import axios, { AxiosError } from "axios";

const GetUserName = async () => {
    try {
      const token = cookie("jwt");
      console.log(token)
      if (!token) {
        console.error("No JWT token found");
        return;
      }

      const response = await axios.get(
        "https://pegasus-loyal-mostly.ngrok-free.app/auth/get-user-name",
        {
          headers: {
            Authorization: `Bearer ${token}`,
               'ngrok-skip-browser-warning': 'true'
          },
        }
      );

      if (response.status === 200) {
        return response.data.user_name;
      }
    } catch (error: unknown) {
      if (error instanceof AxiosError)
      {
        if (error.response) {
          console.error("Server error:", error.response.data.msg);
        } else {
          console.error("Request error:", error);
        }
      } else {
        console.error(`Unknown error at get-user-name${error}`)
      }
    }
  };

  export default GetUserName;