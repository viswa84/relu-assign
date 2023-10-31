import React from "react";
import SellerCard from "./RightCard";
import "./RightBar.css"; 
let dummyData = [
  {
    name: "Thomas Edward",
    username: "thewildwithyou",
    avatarUrl:
      "https://images.pexels.com/photos/3170635/pexels-photo-3170635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageUrl:
      "https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Madhu",
    username: "thesmatter",
    avatarUrl:
      "https://images.pexels.com/photos/12803630/pexels-photo-12803630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageUrl:
      "https://images.pexels.com/photos/7951585/pexels-photo-7951585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Viswanath",
    username: "thechanger",
    avatarUrl:
      "https://images.pexels.com/photos/11091118/pexels-photo-11091118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageUrl:
      "https://images.pexels.com/photos/7951560/pexels-photo-7951560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Praveen Kumar",
    username: "thecreator",
    avatarUrl:
      "https://images.pexels.com/photos/10682175/pexels-photo-10682175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageUrl:
      "https://images.pexels.com/photos/1152188/pexels-photo-1152188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];
const App = () => (
  <div className="rightbar ">
    <div className="tabs">
      <span className="b1">Artists</span>
      <span className="b2">Photographers</span>
    </div>
    <div>
      {dummyData.map((item, index) => (
        <SellerCard
          avatarUrl={item.avatarUrl}
          name={item.name}
          username={item.username}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  </div>
);

export default App;