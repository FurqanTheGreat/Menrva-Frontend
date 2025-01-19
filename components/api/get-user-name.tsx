import cookie from "cookiejs";
import axios from "axios";

const GetUserName = async () => {
    try {
      const token = cookie.get("jwt");
      if (!token) {
        console.error("No JWT token found");
        return;
      }

      const response = await axios.get(
        "http://localhost:3002/auth/get-user-name",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        return response.data.user_name;
      }
    } catch (error: any) {
      if (error.response) {
        console.error("Server error:", error.response.data.msg);
      } else {
        console.error("Request error:", error.message);
      }
    }
  };

  export default GetUserName;