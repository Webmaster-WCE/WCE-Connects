import { useContext, useEffect, useRef, useState } from "react";
import "./Inbox.css";
import Conversation from "../Conversation/Conversation";
import Message from "../Message/Message";
import axios from "axios";
import { io } from "socket.io-client";
import {AuthContext} from "../../../context/AuthContext";


export default function Inbox() {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [currentUserId, setCurrentUserId] = useState();
  const socket = useRef();
  const { token } = useContext(AuthContext);
  const scrollRef = useRef();

  // To Get and Show All Users
  // const [users, setUsers] = useState([]);
  // useEffect(async () => {
  //   const res = await axios.get("http://localhost:5000/users", {headers: {'x-auth-token':token}});
  //   setUsers(res.data);
  // }, [token])
  

  //Sends Token to Server and Get User ID
  useEffect(() => {
    async function fetchID() {
      const res = await axios.get("http://localhost:5000/users/getid/", 
        {headers: {'x-auth-token':token}
      });
      setCurrentUserId(res.data);
    }
    fetchID();
  }, [token])

  
  useEffect(() => {
    socket.current = io("ws://localhost:5001");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    currentUserId !==null && socket.current.emit("addUser", currentUserId);

    //To Show Online Users
    // socket.current.on("getUsers", (users) => {
      // setOnlineUsers(
      //   tmpUser.followings.filter((f) => users.some((u) => u.userId === f))
      // );
    // });
  }, [currentUserId]);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/conversations/${currentUserId}`,{
          headers: {'x-auth-token':token}
        });
        setConversations(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  },[currentUserId, token]);

  useEffect(() => {
    const getMessages = async () => {
      if(currentChat){
        try {
          const res = await axios.get(`http://localhost:5000/messages/${currentChat._id}`, 
          {
            headers: {'x-auth-token':token}
          });
          setMessages(res.data);
        } catch (err) {
          console.log(err);
        }
      }
    };
    getMessages();
  }, [currentChat, token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: currentUserId,
      text: newMessage,
      conversationId: currentChat._id,
    };

    const receiverId = currentChat.members.find(
      (member) => member !== currentUserId
    );

    socket.current.emit("sendMessage", {
      senderId: currentUserId,
      receiverId,
      text: newMessage,
    });

    try {
      const res = await axios.post(`http://localhost:5000/messages`, message,
      {
        headers: {'x-auth-token':token}
      });
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);


  return (
    <>
      {console.log("rendering inbox...")}
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search for friends" className="chatMenuInput" />
            {conversations.map((c) => (
              <div  key={c.id} onClick={() => setCurrentChat(c)}>
                <Conversation conversation={c} currentUserId={currentUserId} />
              </div>
            ))}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {currentChat ? (
              <>
                <div className="chatBoxTop">
                  {messages.map((m) => (
                    <div ref={scrollRef}>
                      <Message message={m} own={m.sender === currentUserId} />
                    </div>
                  ))}
                </div>
                <div className="chatBoxBottom">
                  <textarea
                    className="chatMessageInput"
                    placeholder="write something..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  ></textarea>
                  <button className="chatSubmitButton" onClick={handleSubmit}>
                    Send
                  </button>
                </div>
              </>
            ) : (
              <span className="noConversationText">
                Open a conversation to start a chat.
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
