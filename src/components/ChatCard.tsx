import '../index.css'
import logo from '../assets/images/chat.svg'; 
import { ChatNotificationProps } from '../types/ChatNotification';

const ChatNotification: React.FC<ChatNotificationProps> = ({
    title = 'ChitChat',
    message = 'You have a new message!',
  }) => {
    return (
      <div className="chat-notification">
        <div className="chat-notification-logo-wrapper">
          <img className="chat-notification-logo" src={logo} alt={`${title} Logo`} />
        </div>
        <div className="chat-notification-content">
          <h4 className="chat-notification-title">{title}</h4>
          <p className="chat-notification-message">{message}</p>
        </div>
      </div>
    );
  };
  
  export default ChatNotification;