import "./message.css";
import { format } from "timeago.js";

export default function Message({ message, own }) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://lh3.googleusercontent.com/JW3y8hF1MZHf1_u6BGpd8Km8Bhqmk648mIH2UnZFkyQHnlBzC7Ilj6VBluG0DiC344gjAHSr1tGX8zsLWaqB=w1920-h902-rw"
          alt=""
        />
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  );
}
