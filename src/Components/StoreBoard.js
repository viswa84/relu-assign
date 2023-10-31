import React from "react";
import "./StoreBoard.css";
import StoryBox from "./StoryBox";
import User_prof from "../Assets/pexels-ali-pazani-2613260.png";
import Feed_img from "../Assets/Feed_img1.png";
import User_p2 from "../Assets/pro2_img.png";
import Feed_img2 from "../Assets/Feed2_img.png";

const data = [
  {
    user_prof: User_prof,
    user_name: "Lara Leones",
    user_id: "@thewallart",
    feed_img: Feed_img,
  },
  {
    user_prof: User_p2,
    user_name: "Thomas J.",
    user_id: "@thecustomcreater",
    feed_img: Feed_img2,
  },
];

const StoreBoard = () => {
  return (
    <div className="story-box">
      <div className="story-content">
        <StoryBox data={data} />
      </div>
    </div>
  );
};

export default StoreBoard;
