import React from "react";
import "./Post.css";
import { MoreVert } from "@mui/icons-material";

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src="/assets/persons/1.jpg"
              alt=""
            />
            <span className="postUsername">balram kurmi</span>
            <span className="postDate">5 min ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
            <span className="postText">Hey its my first post</span>
            <img className="postImg" src="assets/persons/1.jpg" alt="" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img className="likeIcon" src="/like.jpg" alt="" />
                <img className="likeIcon" src="/2.jpg" alt="" />
                <span className="postLikeCounter">50 people like it</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">9 comments</span>
            </div>
        </div>
      </div>
    </div>
  );
}
