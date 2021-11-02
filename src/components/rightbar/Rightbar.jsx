import React from "react";
import "./Rightbar.css";
import {Users} from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({profile}) {

  const HomeRightBar =()=>{
    return (
      <>
      <div className="birthdayContainer">
          <img className="birthdayImg" src="/gift.png" alt="" />
          <span className="birthdayText">
            <b>Anurag</b>and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img className="rightbarAd" src="/3.jpg" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u=>(
               <Online key={u.id} user={u}/>
          ))}
          
        </ul>
      </>
    );
  };

  const ProfileRightbar = () =>{
  return (
    <>
    <h4 className="rightbarTitle">User information</h4>
    <div className="rightbarInfo">
      <div className="rightbarInfoItem">
      <span className="rightbarInfokey">city:</span>
      <span className="rightbarInfoValue">Bhopal</span>
      </div> 
      <div className="rightbarInfoItem">
      <span className="rightbarInfokey">From</span>
      <span className="rightbarInfoValue">Madhya pradesh</span>
      </div> 
      <div className="rightbarInfoItem">
      <span className="rightbarInfokey">status</span>
      <span className="rightbarInfoValue">Single</span>
      </div> 
    </div>
    <h4 className="rightbarTitle">User Friends</h4>
    <div className="rightbarFollowings">
      <div className="rightbarFollowing">
        <img src="assets/persons/1.jpg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Anurag yadav</span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/persons/2.jpg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Anurag yadav</span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/persons/3.jpg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Anurag yadav</span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/persons/4.jpg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Anurag yadav</span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/persons/5.jpg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Anurag yadav</span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/persons/1.jpg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Anurag yadav</span>
      </div>
    </div>
    </>
  )
  };  

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <ProfileRightbar />
      </div>
    </div>
  );
}
