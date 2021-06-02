import axios from "axios";
import { useEffect, useState } from "react";
import "./conversation.css";

export default function Conversation({ conversation, currentUserId }) {
  const [user, setUser] = useState(null);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUserId);

    const getUser = async () => {
      try {
        const res = await axios("http://localhost:5000/users/" + friendId);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUserId, conversation]);

  return (
    <div className="conversation">
       {/* To Add Profile Picture in list
        <img
        className="conversationImg"
        src={
          user?.profilePicture
            ? PF + user.profilePicture
            : PF + "person/noAvatar.png"
        }
        alt=""
      /> */}
      <span className="conversationName">{user? user.first_name+" "+user.last_name: "User Not Found"}</span>
    </div>
  );
}
