import React from 'react'
import "./post.css";
import { MoreVert } from '@mui/icons-material';

function Post() {
  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img className='postProfileImg' src="../../public/assests/Profile/2.jpg" alt="" />
                <span className="postUsername">Ahtasham</span>
                <span className="postDate">5 min ago</span>
            </div>
            <div className="postTopRight">
                <MoreVert/>
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">Hey it my First Post</span>
            <img className='postImg' src="../../public/assests/Post/5.jpg" alt="" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img className='likeIcon' src="../../public/assests/Like.png" alt="" />
                <img className='likeIcon' src="../../public/assests/Heart.png" alt="" />
                <span className="postLikeCounter">32 People Likes it</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">32 comments</span>    
                <span className="postCommentIcon"></span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Post
