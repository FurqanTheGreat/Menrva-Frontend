import cookie from "cookiejs";
import axios, { AxiosError } from "axios";
import GetUserId from "./get-user-id";

const DelChat = async (chatId: any) => {
    const userId = await GetUserId();
    if (userId) {
      try {
        const token = cookie.get('jwt')
      if (!token) {
        console.error("No JWT token found");
        return;
      }

      const response = await axios.post(
        "https://pegasus-loyal-mostly.ngrok-free.app/chat_mng/del_chat", 
        { user_id: userId, chat_id: chatId },
        { 
          headers: {
            Authorization: `Bearer ${token}`,
               'ngrok-skip-browser-warning': 'true'
          }
        }
      );
     } catch (error) {
        console.error("Failed to fetch chats:", error);
      }
    }
}

export default DelChat