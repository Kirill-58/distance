import React from 'react'
import addStore from '../../img/right-sidebar/add-story.png'
import concuria from '../../img/right-sidebar/concuria.png'
import figma from '../../img/right-sidebar/figma.png'
import antd from '../../img/right-sidebar/antd.png'

export const RightSidebar = () => {
    return (
        <div className="sidebar__right">
            <div className="sidebar__right__stories">
                <div className="sidebar__right__stories__header">
                    <h4 className="sidebar__right__stories__header-title">Stories</h4>
                    <div className="sidebar__right__stories__header-links">
                        <a href="#" className="sidebar__right__stories__header-link">
                            <svg width="16" height="16" className="clock-icon" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8 1C4.13438 1 1 4.13438 1 8C1 11.8656 4.13438 15 8 15C11.8656 15 15 11.8656 15 8C15 4.13438 11.8656 1 8 1ZM8 13.8125C4.79063 13.8125 2.1875 11.2094 2.1875 8C2.1875 4.79063 4.79063 2.1875 8 2.1875C11.2094 2.1875 13.8125 4.79063 13.8125 8C13.8125 11.2094 11.2094 13.8125 8 13.8125Z"
                                    fill="#0050B3"/>
                                <path
                                    d="M10.7297 9.97811L8.50156 8.36718V4.5C8.50156 4.43125 8.44531 4.375 8.37656 4.375H7.625C7.55625 4.375 7.5 4.43125 7.5 4.5V8.80311C7.5 8.84374 7.51875 8.88124 7.55156 8.90467L10.1359 10.789C10.1922 10.8297 10.2703 10.8172 10.3109 10.7625L10.7578 10.1531C10.7984 10.0953 10.7859 10.0172 10.7297 9.97811Z"
                                    fill="#0050B3"/>
                            </svg>
                            <span className="sidebar__right__stories__header-button-text">Archive</span>
                        </a>
                        <a href="#" className="sidebar__right__stories__header-link">
                            <span className="sidebar__right__stories__header-button-text">Settings</span>
                        </a>
                    </div>
                </div>
                <div className="sidebar__right__stories__items">
                    <a href="#" className="sidebar__right__stories__item">
                        <img src={addStore} alt='add-story' className="sidebar__right__stories__item-image "/>
                        <div className="sidebar__right__stories__item-text">
                            <span className="sidebar__right__stories__item-text-title">
                                Add to your story
                            </span>
                            <span className="sidebar__right__stories__item-text-info">
                                Share a photo or video or write something
                            </span>
                        </div>
                    </a>

                    <a href="#" className="sidebar__right__stories__item">
                        <img src={concuria} alt='add-story' className="sidebar__right__stories__item-image new-stories"/>
                        <div className="sidebar__right__stories__item-text">
                            <span className="sidebar__right__stories__item-text-title">
                               Concuria
                            </span>
                            <span className="sidebar__right__stories__item-text-info">
                                4 hours ago
                            </span>
                        </div>
                    </a>

                    <a href="#" className="sidebar__right__stories__item">
                        <img src={figma} alt='add-story' className="sidebar__right__stories__item-image"/>
                        <div className="sidebar__right__stories__item-text">
                            <span className="sidebar__right__stories__item-text-title">
                               Figma
                            </span>
                            <span className="sidebar__right__stories__item-text-info">
                                5 hours ago
                            </span>
                        </div>
                    </a>
                    <a href="#" className="sidebar__right__stories__item">
                        <img src={antd} alt='add-story' className="sidebar__right__stories__item-image new-stories"/>
                        <div className="sidebar__right__stories__item-text">
                            <span className="sidebar__right__stories__item-text-title">
                               Ant Design
                            </span>
                            <span className="sidebar__right__stories__item-text-info">
                                6 hours ago
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}