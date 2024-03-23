import React from "react";
import "./topbar.css";
import {
  Search,
  Person,
  QuestionAnswer,
  Notifications,
} from "@mui/icons-material";

function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarleft">
        <img src="../../public/assests/Logo.png" alt="" className="logo" />
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friends, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Home</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <QuestionAnswer />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img
          src="../../public/assests/Profile/2.jpg"
          alt=""
          className="topbarImg"
        />
        <span className="profileName">Ahtasham</span>
      </div>
    </div>
  );
}

export default Topbar;
// import React from "react";
// import { Search, Person, QuestionAnswer, Notifications } from "@mui/icons-material";

// function Topbar() {
//   return (
//     <div className="topbarContainer  bg-green-500 h-16 flex items-center justify-between px-4 w-screen">
//       <div className="topbarleft">
//         <img src="../../public/assests/Logo.png" alt="" className="logo w-56 h-9" />
//       </div>
//       <div className="topbarCenter flex justify-center flex-grow-0 ml-3 w-96">
//         <div className="searchbar bg-white flex items-center rounded-full px-2 py-1 w-96">
//           <Search className="searchIcon" />
//           <input
//             placeholder="Search for friends, post or video"
//             className="searchInput outline-none ml-2 flex-grow"
//           />
//         </div>
//       </div>
//       <div className="topbarRight flex items-center ">
//         <div className="topbarLinks mr-4">
//           <span className="topbarLink">Home</span>
//           <span className="topbarLink">Timeline</span>
//         </div>
//         <div className="topbarIcons mr-4 flex items-center">
//           <div className="topbarIconItem relative mr-4">
//             <Person />
//             <span className="topbarIconBadge absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center text-xs">1</span>
//           </div>
//           <div className="topbarIconItem relative mr-4">
//             <QuestionAnswer />
//             <span className="topbarIconBadge absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center text-xs">1</span>
//           </div>
//           <div className="topbarIconItem relative">
//             <Notifications />
//             <span className="topbarIconBadge absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center text-xs">1</span>
//           </div>
//         </div>
//         <img
//           src="../../public/assests/Profile/2.jpg"
//           alt=""
//           className="topbarImg w-8 h-8 rounded-full"
//         />
//         <span className="profileName">Ahtasham</span>
//       </div>
//     </div>
//   );
// }

// export default Topbar;