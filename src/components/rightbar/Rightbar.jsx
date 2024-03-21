import React from "react";
import "./rightbar.css";

function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img
            className="birthdayImg"
            src="../../public/assests/Gift.png"
            alt=""
          />
          <span className="birthdayText">
            <b>Pola Foster </b>and <b>3 other friends</b> have birthday today
          </span>
        </div>
        <img src="../../public/assests/ad.png" className="rightbarAd" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="../../public/assests/Profile/1.jpg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">John Doe</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="../../public/assests/Profile/1.jpg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">John Doe</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="../../public/assests/Profile/1.jpg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">John Doe</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="../../public/assests/Profile/1.jpg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">John Doe</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="../../public/assests/Profile/1.jpg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">John Doe</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

const ProfileRightbar = () => {
  return (
    <>
      <h4 className="rightbarTitle">User information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">New York</span>
        </div>
        15px;
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Madrid</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img
            src="assets/person/1.jpeg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="assets/person/2.jpeg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="assets/person/3.jpeg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="assets/person/4.jpeg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="assets/person/5.jpeg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="assets/person/6.jpeg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
      </div>
    </>
  );
};
export default Rightbar;
