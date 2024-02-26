import React from 'react'
import "./Feed.css"
import TweetBox from './TweetBox/TweetBox';
import Post from './Post/Post'
const Feed = () => {
  return (
    <div className="Feed">
       <header className="Feed_Header">
        <h2>Home</h2>
       </header>
       <TweetBox/>
       <Post/>
       <Post/>
       <Post/>
    </div>
  )
}

export default Feed;
