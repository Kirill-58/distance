import React from 'react'
import {Post} from "./Post/Post";
import {CreatePost} from "./Post/Create";

export const MainFeed = () => {
    return (
        <div className="main-feed">
           <CreatePost/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}