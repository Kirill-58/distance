import React from 'react'
import avatarUrl from "../../img/user-avatar-default.png";
import postImg from "../../img/post-image.jpg";
import {Post} from "./Post/Post";
import {CreatePost} from "./Post/Create";

export const MainFeed = () => {
    return (
        <div className="main-feed">
           <CreatePost/>
            <Post/>
        </div>
    )
}