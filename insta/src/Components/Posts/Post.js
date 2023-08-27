import React from "react";
import "./post.css";
import image from "../../images/img.jpg";
import Avatar from "@mui/material/Avatar";
import { useEffect, useState } from "react";
import { db, auth } from "../../firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

function Post({ imageUrl, username, caption, postId, user }) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const postComment = (e) => {
    e.preventDefault();
    db.collection("posts").doc(postId).collection("comments").add({
      text: comment,
      username: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setComment("");
  };

  useEffect(() => {
    let unsubscribe;

    if (postId) {
      unsubscribe = db
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }

    return () => {
      // Clean up the listener when the component unmounts
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [postId]);

  return (
    <div className="post">
      <div className="post_header">
        <Avatar className="post_avatar" />
        <h3> {username}</h3>
      </div>

      <img
        src={imageUrl}
        className="post_image
      "
      />

      <h4 className="post_text">
        <strong>{username}</strong> : {caption}
      </h4>

      <div className="post_comments">
        {comments.map((comment) => (
          <p>
            <strong>{comment.username}</strong> {comment.text}
          </p>
        ))}
      </div>

      {user && (
        <form className="post_commentBox">
          <input
            className="post_input"
            type="text"
            placeholder="Add a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            type="submit"
            disabled={!comment}
            onClick={postComment}
            className="psot_button"
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
}

export default Post;
