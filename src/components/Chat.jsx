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




// import React, { useRef, useState, useEffect } from "react";
// import { io } from "socket.io-client";
// import EmojiPicker from "emoji-picker-react";
// import { format } from "date-fns";

// const Chat = () => {
//   const [socket, setSocket] = useState(null);
//   const [open, setOpen] = useState(false);
//   const [text, setText] = useState("");
//   const [addMode, setAddMode] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [activeUser, setActiveUser] = useState(null);
//   const [rooms, setRooms] = useState([]);
//   const [activeRoom, setActiveRoom] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const messagesEndRef = useRef(null);

//   // Mock current user - replace this with your actual user authentication
//   const currentUser = {
//     id: "user123",
//     name: "Joe Williams",
//     role: "student" // or "alumni"
//   };

//   // Initialize socket connection
//   useEffect(() => {
//     try {
//       const newSocket = io("http://localhost:5000");
//       setSocket(newSocket);

//       // Socket event listeners
//       newSocket.on("connect", () => {
//         console.log("Connected to socket server");
//       });

//       newSocket.on("connect_error", (err) => {
//         console.error("Socket connection error:", err);
//         setError("Unable to connect to chat server");
//       });

//       newSocket.on("message", (data) => {
//         setMessages(prev => [...prev, {
//           text: data.content,
//           own: data.sender_id === currentUser.id,
//           time: format(new Date(data.timestamp), "HH:mm"),
//           sender_id: data.sender_id
//         }]);
//       });

//       return () => newSocket.disconnect();
//     } catch (err) {
//       console.error("Socket initialization error:", err);
//       setError("Failed to initialize chat");
//     }
//   }, []);

//   // Fetch user's chat rooms
//   useEffect(() => {
//     const fetchRooms = async () => {
//       try {
//         setIsLoading(true);
//         const response = await fetch(`/api/chat/rooms/${currentUser.id}`);
//         if (!response.ok) throw new Error("Failed to fetch rooms");
//         const data = await response.json();
//         setRooms(data);
//       } catch (err) {
//         console.error("Error fetching rooms:", err);
//         setError("Failed to load chat rooms");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     if (currentUser?.id) {
//       fetchRooms();
//     }
//   }, [currentUser?.id]);

//   // Auto-scroll to latest message
//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   // Load chat history when room changes
//   useEffect(() => {
//     const fetchMessages = async () => {
//       if (!activeRoom) return;
      
//       try {
//         setIsLoading(true);
//         const response = await fetch(`/api/chat/messages/${activeRoom.room_id}`);
//         if (!response.ok) throw new Error("Failed to fetch messages");
//         const data = await response.json();
        
//         setMessages(data.map(msg => ({
//           text: msg.content,
//           own: msg.sender_id === currentUser.id,
//           time: format(new Date(msg.timestamp), "HH:mm"),
//           sender_id: msg.sender_id
//         })));
//       } catch (err) {
//         console.error("Error fetching messages:", err);
//         setError("Failed to load messages");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     if (activeRoom && socket) {
//       fetchMessages();
//       socket.emit("join", { room: activeRoom.room_id });
//     }

//     return () => {
//       if (activeRoom && socket) {
//         socket.emit("leave", { room: activeRoom.room_id });
//       }
//     };
//   }, [activeRoom, socket]);

//   const handleEmoji = (e) => {
//     setText((prev) => prev + e.emoji);
//     setOpen(false);
//   };

//   const handleSend = () => {
//     if (!text.trim() || !socket || !activeRoom) return;

//     try {
//       const messageData = {
//         room: activeRoom.room_id,
//         sender_id: currentUser.id,
//         content: text
//       };
      
//       socket.emit("message", messageData);
//       setText("");
//     } catch (err) {
//       console.error("Error sending message:", err);
//       setError("Failed to send message");
//     }
//   };

//   const handleUserClick = (room) => {
//     setActiveRoom(room);
//     setActiveUser(room.student_id === currentUser.id ? room.alumni_id : room.student_id);
//     setError(null); // Clear any previous errors
//   };

//   const filteredRooms = rooms.filter(room => {
//     const otherUser = room.student_id === currentUser.id ? room.alumni_id : room.student_id;
//     return otherUser.toLowerCase().includes(searchTerm.toLowerCase());
//   });

//   if (error) {
//     return (
//       <div className="error-container">
//         <p className="error-message">{error}</p>
//         <button onClick={() => setError(null)}>Try Again</button>
//       </div>
//     );
//   }

//   return (
//     <div className="chatContainer">
//       <div className="list">
//         <div className="userInfo">
//           <div className="user">
//             <img src="/api/placeholder/40/40" alt="user_profile" />
//             <h3>{currentUser.name}</h3>
//           </div>
//         </div>
//         <div className="chatList">
//           <div className="search">
//             <div className="searchBar">
//               <img src="/api/placeholder/20/20" alt="search_icon" />
//               <input 
//                 type="text" 
//                 placeholder="Search..." 
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>
//           </div>
//           {isLoading ? (
//             <div className="loading">Loading chats...</div>
//           ) : (
//             filteredRooms.map((room) => {
//               const otherUser = room.student_id === currentUser.id ? room.alumni_id : room.student_id;
//               return (
//                 <div 
//                   key={room.room_id} 
//                   className={`items ${activeRoom?.room_id === room.room_id ? 'active' : ''}`}
//                   onClick={() => handleUserClick(room)}
//                 >
//                   <img src="/api/placeholder/40/40" alt="user_pfp" />
//                   <div className="texts">
//                     <span>{otherUser}</span>
//                   </div>
//                 </div>
//               );
//             })
//           )}
//         </div>
//       </div>

//       <div className="chat">
//         {activeUser ? (
//           <>
//             <div className="top">
//               <div className="chatUser">
//                 <img src="/api/placeholder/40/40" alt="user_pfp" />
//                 <div className="texts">
//                   <span>{activeUser}</span>
//                 </div>
//               </div>
//             </div>
//             <div className="center">
//               {isLoading ? (
//                 <div className="loading">Loading messages...</div>
//               ) : (
//                 <>
//                   {messages.map((message, index) => (
//                     <div key={index} className={`message ${message.own ? "own" : ""}`}>
//                       <div className="text">
//                         <p>{message.text}</p>
//                         <span>{message.time}</span>
//                       </div>
//                     </div>
//                   ))}
//                   <div ref={messagesEndRef} />
//                 </>
//               )}
//             </div>
//             <div className="bottom">
//               <input
//                 type="text"
//                 placeholder="Type your message..."
//                 value={text}
//                 onChange={(e) => setText(e.target.value)}
//                 onKeyPress={(e) => e.key === 'Enter' && handleSend()}
//                 disabled={isLoading}
//               />
//               <div className="emoji">
//                 <img
//                   src="/api/placeholder/20/20"
//                   alt="emoji_icon"
//                   onClick={() => setOpen((prev) => !prev)}
//                 />
//                 {open && (
//                   <div className="picker">
//                     <EmojiPicker onEmojiClick={handleEmoji} />
//                   </div>
//                 )}
//               </div>
//               <button 
//                 className="sendButton" 
//                 onClick={handleSend}
//                 disabled={isLoading}
//               >
//                 Send
//               </button>
//             </div>
//           </>
//         ) : (
//           <div className="noChat">
//             <h3>Select a chat to start messaging</h3>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Chat;