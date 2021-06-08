import { useContext, useEffect, useState } from "react";
import Post from "./Post/Post";
import "./Feed.css";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = token
        ? await axios.get("http://localhost:5000/feeds/all/1", {headers:{ 'x-auth-token':token }})
        : null;
        
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();
  }, [token]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        {/* {(!username || username === user.username) && <Share />} */}
        {console.log(posts)}
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}
