import cookie from "cookiejs";
import axios, { AxiosError } from "axios";
import GetUserId from "./get-user-id";

const GetChats = async () => {
    const userId = await GetUserId();
    if (userId) {
      try {
        const token = cookie.get('jwt')
      if (!token) {
        console.error("No JWT token found");
        return;
      }
      const response = await axios.post(
        "https://pegasus-loyal-mostly.ngrok-free.app/chat_mng/get_chats", 
        { user_id: userId },
        { 
          headers: {
            Authorization: `Bearer ${token}`,
               'ngrok-skip-browser-warning': 'true'
          }
        }
      );
        if (response.status === 200) {
          return response.data.chats
        } else {
          console.error(response.data.msg)
        }
      } catch (error) {
        console.error("Failed to fetch chats:", error);
      }
    }
  };

  export default GetChats