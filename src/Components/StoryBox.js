import React from "react";
import User_prof from "../Assets/pexels-ali-pazani-2613260.png";
import Feed_img from "../Assets/Feed_img1.png";
import Feed_like from "../Assets/Feed_love.svg";
import Feed_cmt from "../Assets/comment.svg";
import Feed_share from "../Assets/share.svg";

import "./StoryBox.css";

const StoryBox = ({ data }) => {
  return (
    <>
      {data.map((el, i) => (
        <>
          <div className="story-container">
            <div className="story-header">
              <div className="user-profile">
                <img src={el.user_prof} alt="profile" className="user-img" />
                <div className="user-name-box">
                  <span className="user-name"> {el.user_name}</span>
                  <br />
                  <span className="user-id">{el.user_id}</span>
                </div>
              </div>
              <div className="user-options-label">
                <span>.</span>
                <span>.</span>
                <span>.</span>
              </div>
            </div>
            <div className="story-content">
              <p className="story-content-header">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.{" "}
                <span>Read More</span>
              </p>
            </div>
            <div className="feed-img-box">
              <img src={el.feed_img} alt="feed-img" />
            </div>
            <div className="feed-line-box"></div>
            <div className="feed-cmt-box">
              <div className="feed-like">
                <img src={Feed_like} width="20" height="22" alt="lo" />
                <span className="feed-like-text">9.8k</span>
              </div>
              <div className="feed-like">
                <img src={Feed_cmt} width="20" height="22" alt="lo" />
                <span className="feed-like-text">8.6k</span>
              </div>
              <div className="feed-like">
                <img src={Feed_share} width="20" height="22" alt="lo" />
                <span className="feed-like-text">7.2k</span>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default StoryBox;
