import React from 'react'
import {LeftSidebar} from "./LeftSidebar";
import {MainFeed} from "./MainFeed";
import {RightSidebar} from "./RightSidebar";

export const Main = () => {
    return (
        <div className="container">
            <LeftSidebar/>
            <MainFeed/>
            <RightSidebar/>
        </div>
    )
}