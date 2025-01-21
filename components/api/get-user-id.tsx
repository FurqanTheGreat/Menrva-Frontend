import cookie from "cookiejs";
import axios, { AxiosError } from "axios";

const GetUserId = async () => {
        try {
          const token = cookie.get("jwt");
          if (!token) {
            console.error("No JWT token found");
            return;
          }
    
          const response = await axios.get(
            "http://localhost:3002/auth/get-user-id",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
    
          if (response.status === 200) {
            return response.data.user_id;
          }
        } catch (error: any) {
          if (error.response) {
            console.error("Server error:", error.response.data.msg);
          } else {
            console.error("Request error:", error.message);
          }
        }
      };


export default GetUserId