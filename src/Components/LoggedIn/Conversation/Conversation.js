import axios from "axios";
import { useEffect, useState, useContext } from "react";
import "./Conversation.css";
import {AuthContext} from "../../../context/AuthContext";

export default function Conversation({ conversation, currentUserId }) {
  const [user, setUser] = useState(null);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const {token} = useContext(AuthContext);
  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUserId);

    const getUser = async () => {
      try {
        const res = await axios(`http://localhost:5000/users/${friendId}`,{
          headers: {'x-auth-token':token}
        });
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUserId, conversation, token]);

  return (
    <div className="conversation">
        <img
        className="conversationImg"
        src={
          user?.profilePicture
            ? PF + user.profilePicture
            : PF + "default.png"
        }
        alt=""
      />
      <span className="conversationName">{user? user.info.first_name+" "+user.info.last_name: "User Not Found"}</span>
    </div>
  );
}
