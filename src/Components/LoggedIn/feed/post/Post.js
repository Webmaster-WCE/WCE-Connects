import "./Post.css";
import { MoreVert } from "@material-ui/icons";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
// import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../context/AuthContext";

export default function Post({ post }) {
  
    const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { token } = useContext(AuthContext);

//   useEffect(() => {
//     setIsLiked(post.likes.includes(currentUser._id));
//   }, [currentUser._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`http://localhost:5000/users/${post.author}`, {headers:{'x-auth-token':token}});
      setUser(res.data);
    };
    fetchUser();
  }, [post.author, token]);

//   const likeHandler = () => {
//     try {
//       axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
//     } catch (err) {}
//     setLike(isLiked ? like - 1 : like + 1);
//     setIsLiked(!isLiked);
//   };
  return (
      <div className="post">
        {console.log("post"+ post.author)}
      { user && user.info ? <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.username}`}>
              <img
                className="postProfileImg"
                src={
                  user.info.profilePicture
                    ? user.info.profilePicture
                    : PF + "default.png"
                }
                alt=""
              />
            </Link>
            <span className="postUsername">{user.info.first_name} {user.info.last_name}</span>
            {/* <span className="postDate">{format(post.createdAt)}</span> */}
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.text}</span>
          <img className="postImg" src={post.picture} alt="" />
        </div>
        {/* <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src={`${PF}like.png`}
              onClick={likeHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src={`${PF}heart.png`}
              onClick={likeHandler}
              alt=""
            />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div> */}
      </div>  : null}
    </div>
  );
}
