interface MessageProps {
    sender: string;
    message: any;
    avatar: string;
    isSender: boolean; // true for right-aligned, false for left-aligned
  }
  
  const Message: React.FC<MessageProps> = ({ sender, message, avatar, isSender }) => {
    return (
      <div
        className={`flex ${isSender ? "justify-end" : "justify-start"} w-full p-4`}
      >
        <div
          className={`flex gap-3 ${
            isSender ? "flex-row-reverse" : "flex-row"
          }`}
        >
          {/* Avatar */}
          <img
            src={avatar}
            alt="Avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex flex-col">
            {/* Sender Name */}
            <span
              className={` ${
                isSender ? "text-right" : "text-left"
              } text-gray-300`}
            >
              {sender}
            </span>
            {/* Message Bubble */}
            <div
              className={`m-2 justify-start items-start bg-gradient-to-b bg-[#71717a46] p-2 rounded-[20px] px-4 py-4 w-fit max-w-[800px] self-end ${
                isSender
                  ? "bg-[#71717a46] text-white rounded-tr-none"
                  : "bg-[#71717a46] text-gray-200 rounded-tl-none"
              }`}
            >
              {message}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Message;