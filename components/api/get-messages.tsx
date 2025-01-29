import cookie from "cookiejs";
import axios, { AxiosError } from "axios";

const GetMessages = async (chatId: string, userId: string) => {
    try {
        const token = cookie.get("jwt");
        if (!token) {
          console.error("No JWT token found");
          return;
        }
    
        const response = await axios.post(
          "https://pegasus-loyal-mostly.ngrok-free.app/chat_mng/get_messages",
          { chat_id: chatId, user_id: userId },
          { headers: { Authorization: `Bearer ${token}`,    'ngrok-skip-browser-warning': 'true' } }
        );
    
        if (response.status === 200) {
          return response.data.messages;
        }
      } catch (error: any) {
        console.error("Error retrieving messages:", error);
      }
}

export default GetMessages