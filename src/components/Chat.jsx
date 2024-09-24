import React, { useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";
import "./Chat.css";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [addMode, setAddMode] = useState(false);
  const [messages, setMessages] = useState([]);
  const [activeUser, setActiveUser] = useState("Jane Doe"); // State to track the active chat user

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  const handleSend = () => {
    if (text.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text, own: true, time: "Just now" }
      ]);
      setText("");
    }
  };

  const handleUserClick = (user) => {
    setActiveUser(user); // Set the active user on chat click
    // Clear previous messages if you want to load different messages for each user
    // setMessages([]);
  };

  return (
    <div className="chatContainer">
      <div className="list">
        <div className="userInfo">
          <div className="user">
            <img src="./src/assets/user.png" alt="user_profile" />
            <h3>Joe Williams</h3>
          </div>
        </div>
        <div className="chatList">
          <div className="search">
            <div className="searchBar">
              <img src="./src/assets/search.png" alt="search_icon" />
              <input type="text" placeholder="Search..." />
            </div>
            <img
              src={addMode ? "./src/assets/minus-sign.png" : "./src/assets/plus.png"}
              alt="add_mode_icon"
              onClick={() => setAddMode((prev) => !prev)}
            />
          </div>
          {/* Example Users */}
          {["Jane Doe", "Parth Prakash Saini", "James Hunt"].map((user, index) => (
            <div key={index} className="items" onClick={() => handleUserClick(user)}>
              <img src="./src/assets/user.png" alt="user_pfp" />
              <div className="texts">
                <span>{user}</span>
                <p>Hello</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="chat">
        <div className="top">
          <div className="chatUser">
            <img src="./src/assets/user.png" alt="user_pfp" />
            <div className="texts">
              <span>{activeUser}</span> {/* Display the active chat user */}
              <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className="icons">
              <img src="./src/assets/info.png" alt="info_icon" />
            </div>
          </div>
        </div>
        <div className="center">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.own ? "own" : ""}`}>
              <div className="text">
                <p>{message.text}</p>
                <span>{message.time}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="bottom">
          <div className="icons">
            <img src="./src/assets/camera.png" alt="camera_icon" />
            <img src="./src/assets/paper-pin.png" alt="paper_pin_icon" />
          </div>
          <input
            type="text"
            placeholder="Type your message..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <div className="emoji">
            <img
              src="./src/assets/happy.png"
              alt="emoji_icon"
              onClick={() => setOpen((prev) => !prev)}
            />
            {open && (
              <div className="picker">
                <EmojiPicker onEmojiClick={handleEmoji} />
              </div>
            )}
          </div>
          <button className="sendButton" onClick={handleSend}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
