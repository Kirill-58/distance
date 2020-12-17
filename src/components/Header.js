import React from 'react'
import avatarUrl from '../img/user-avatar-default.png'

export const Header = () => {
    return (
        <header className="header">
            <div className="header__block">
                <button className="toggle-mobile-menu">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </button>
                <div className="search">
                    <input type="text" className="search-input" placeholder="Search"/>
                </div>
                <nav className="navigation">
                    <div className="user">
                        <img src={avatarUrl} alt="avatar" className="user-avatar"/>
                        <span className="user-name">Ivan</span>
                    </div>
                    <div className="navigation-panel">
                        <a href="#" className="navigation-link">Home</a>
                        <a href="#" className="navigation-link">Create</a>
                    </div>
                    <div className="icons-panel">
                        <a href="#" className="icon-link">
                            <svg className='icon-header' width="20" height="20" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M18.906 16.0937H17.031V14.2187C17.031 14.1156 16.9467 14.0312 16.8435 14.0312H15.7185C15.6154 14.0312 15.531 14.1156 15.531 14.2187V16.0937H13.656C13.5529 16.0937 13.4685 16.1781 13.4685 16.2812V17.4062C13.4685 17.5093 13.5529 17.5937 13.656 17.5937H15.531V19.4687C15.531 19.5718 15.6154 19.6562 15.7185 19.6562H16.8435C16.9467 19.6562 17.031 19.5718 17.031 19.4687V17.5937H18.906C19.0092 17.5937 19.0935 17.5093 19.0935 17.4062V16.2812C19.0935 16.1781 19.0092 16.0937 18.906 16.0937ZM6.7537 9.68122C6.7326 9.47731 6.72088 9.27106 6.72088 9.06247C6.72088 8.68981 6.75604 8.32653 6.82166 7.97263C6.83807 7.88825 6.79354 7.80153 6.7162 7.76638C6.39745 7.62341 6.10448 7.42653 5.85135 7.1781C5.55309 6.88889 5.31838 6.54069 5.16221 6.15571C5.00604 5.77073 4.93183 5.35742 4.94432 4.94216C4.96541 4.18981 5.26776 3.47497 5.7951 2.93591C6.37401 2.34294 7.15213 2.0195 7.97948 2.02888C8.72713 2.03591 9.44901 2.32419 9.9951 2.83513C10.1803 3.00856 10.3396 3.20075 10.4732 3.407C10.5201 3.47966 10.6115 3.51013 10.6912 3.482C11.1037 3.33903 11.5396 3.23825 11.9873 3.19138C12.1185 3.17731 12.1935 3.03669 12.1349 2.9195C11.3732 1.41247 9.81698 0.371845 8.01698 0.34372C5.4201 0.303876 3.25448 2.43435 3.25448 5.03122C3.25448 6.5031 3.93182 7.8156 4.99354 8.67575C4.24823 9.02028 3.56151 9.49606 2.9662 10.0914C1.68182 11.3734 0.955259 13.0656 0.908384 14.8726C0.907758 14.8976 0.912146 14.9225 0.921288 14.9458C0.930431 14.9691 0.944143 14.9903 0.961616 15.0082C0.97909 15.0262 0.999972 15.0404 1.02303 15.0501C1.04609 15.0598 1.07086 15.0648 1.09588 15.0648H2.41073C2.51151 15.0648 2.59588 14.9851 2.59823 14.8843C2.64276 13.525 3.19354 12.2523 4.16151 11.2867C4.85057 10.5976 5.69432 10.1195 6.61542 9.88747C6.70448 9.86169 6.76542 9.77497 6.7537 9.68122ZM17.3123 9.06247C17.3123 6.49841 15.2521 4.41481 12.6974 4.37497C10.1006 4.33513 7.93729 6.4656 7.93729 9.06247C7.93729 10.5343 8.61698 11.8468 9.67635 12.707C8.92332 13.0561 8.23781 13.5353 7.65135 14.1226C6.36698 15.4047 5.64042 17.0968 5.59354 18.9015C5.59291 18.9265 5.5973 18.9514 5.60644 18.9747C5.61559 18.998 5.6293 19.0192 5.64677 19.0372C5.66425 19.0551 5.68513 19.0693 5.70819 19.079C5.73125 19.0887 5.75602 19.0937 5.78104 19.0937H7.09354C7.19432 19.0937 7.2787 19.014 7.28104 18.9132C7.32557 17.5539 7.87635 16.2812 8.84432 15.3156C9.85448 14.3054 11.1951 13.75 12.6248 13.75C15.2123 13.75 17.3123 11.6523 17.3123 9.06247ZM14.7459 11.1836C14.1787 11.7508 13.4264 12.0625 12.6248 12.0625C11.8232 12.0625 11.0709 11.7508 10.5037 11.1836C10.2207 10.902 9.99703 10.5665 9.84605 10.1969C9.69508 9.82733 9.61984 9.4312 9.62479 9.032C9.63182 8.26325 9.93885 7.52028 10.4756 6.9695C11.0381 6.39294 11.7904 6.07185 12.5943 6.06247C13.3889 6.05544 14.1599 6.36481 14.7271 6.92028C15.3084 7.48981 15.6271 8.25153 15.6271 9.06247C15.6248 9.86403 15.3131 10.6164 14.7459 11.1836Z"
                                />
                            </svg>

                        </a>
                        <a href="#" className="icon-link">
                            <svg className="icon-header" width="22" height="22" viewBox="0 0 22 22"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.87513 11C9.87513 11.2984 9.99366 11.5845 10.2046 11.7955C10.4156 12.0065 10.7018 12.125 11.0001 12.125C11.2985 12.125 11.5846 12.0065 11.7956 11.7955C12.0066 11.5845 12.1251 11.2984 12.1251 11C12.1251 10.7016 12.0066 10.4155 11.7956 10.2045C11.5846 9.99353 11.2985 9.875 11.0001 9.875C10.7018 9.875 10.4156 9.99353 10.2046 10.2045C9.99366 10.4155 9.87513 10.7016 9.87513 11ZM14.5626 11C14.5626 11.2984 14.6812 11.5845 14.8921 11.7955C15.1031 12.0065 15.3893 12.125 15.6876 12.125C15.986 12.125 16.2721 12.0065 16.4831 11.7955C16.6941 11.5845 16.8126 11.2984 16.8126 11C16.8126 10.7016 16.6941 10.4155 16.4831 10.2045C16.2721 9.99353 15.986 9.875 15.6876 9.875C15.3893 9.875 15.1031 9.99353 14.8921 10.2045C14.6812 10.4155 14.5626 10.7016 14.5626 11ZM5.18763 11C5.18763 11.2984 5.30616 11.5845 5.51714 11.7955C5.72812 12.0065 6.01426 12.125 6.31263 12.125C6.611 12.125 6.89715 12.0065 7.10813 11.7955C7.31911 11.5845 7.43763 11.2984 7.43763 11C7.43763 10.7016 7.31911 10.4155 7.10813 10.2045C6.89715 9.99353 6.611 9.875 6.31263 9.875C6.01426 9.875 5.72812 9.99353 5.51714 10.2045C5.30616 10.4155 5.18763 10.7016 5.18763 11ZM20.6845 6.93125C20.1548 5.67266 19.3954 4.54297 18.4275 3.57266C17.4663 2.60796 16.3252 1.84114 15.0689 1.31563C13.7798 0.774219 12.4111 0.5 11.0001 0.5H10.9533C9.53295 0.507031 8.15716 0.788281 6.86341 1.34141C5.61785 1.87232 4.48747 2.64049 3.53529 3.60312C2.5767 4.57109 1.82435 5.69609 1.30404 6.95C0.764977 8.24844 0.493102 9.62891 0.500133 11.0492C0.508086 12.6769 0.893161 14.2806 1.62513 15.7344V19.2969C1.62513 19.5828 1.73872 19.857 1.94091 20.0592C2.1431 20.2614 2.41732 20.375 2.70326 20.375H6.2681C7.72192 21.107 9.32559 21.492 10.9533 21.5H11.0025C12.4064 21.5 13.7681 21.2281 15.0501 20.6961C16.3001 20.1768 17.4369 19.419 18.397 18.4648C19.365 17.5063 20.1267 16.3859 20.6587 15.1367C21.2119 13.843 21.4931 12.4672 21.5001 11.0469C21.5072 9.61953 21.2306 8.23438 20.6845 6.93125ZM17.1431 17.1969C15.5001 18.8234 13.3204 19.7188 11.0001 19.7188H10.9603C9.54701 19.7117 8.1431 19.3602 6.90326 18.6992L6.70638 18.5938H3.40638V15.2938L3.30091 15.0969C2.63998 13.857 2.28841 12.4531 2.28138 11.0398C2.27201 8.70312 3.16498 6.50937 4.80326 4.85703C6.4392 3.20469 8.62591 2.29062 10.9626 2.28125H11.0025C12.1744 2.28125 13.3111 2.50859 14.3822 2.95859C15.4275 3.39687 16.365 4.02734 17.1712 4.83359C17.9751 5.6375 18.6079 6.57734 19.0462 7.62266C19.5009 8.70547 19.7283 9.85391 19.7236 11.0398C19.7095 13.3742 18.7931 15.5609 17.1431 17.1969Z"
                                />
                            </svg>
                        </a>
                        <a href="#" className="icon-link">
                            <svg width="16" className="icon-header" height="22" viewBox="0 0 16 22"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.1249 17H14.5624V9.03125C14.5624 5.72422 12.1179 2.99141 8.93744 2.53672V1.625C8.93744 1.10703 8.51791 0.6875 7.99994 0.6875C7.48197 0.6875 7.06244 1.10703 7.06244 1.625V2.53672C3.88197 2.99141 1.43744 5.72422 1.43744 9.03125V17H0.874939C0.460095 17 0.124939 17.3352 0.124939 17.75V18.5C0.124939 18.6031 0.209314 18.6875 0.312439 18.6875H5.37494C5.37494 20.1359 6.5515 21.3125 7.99994 21.3125C9.44838 21.3125 10.6249 20.1359 10.6249 18.6875H15.6874C15.7906 18.6875 15.8749 18.6031 15.8749 18.5V17.75C15.8749 17.3352 15.5398 17 15.1249 17ZM7.99994 19.8125C7.37885 19.8125 6.87494 19.3086 6.87494 18.6875H9.12494C9.12494 19.3086 8.62103 19.8125 7.99994 19.8125ZM3.12494 17V9.03125C3.12494 7.72813 3.63119 6.50469 4.55228 5.58359C5.47338 4.6625 6.69681 4.15625 7.99994 4.15625C9.30306 4.15625 10.5265 4.6625 11.4476 5.58359C12.3687 6.50469 12.8749 7.72813 12.8749 9.03125V17H3.12494Z"
                                />
                            </svg>

                        </a>
                        <a href="#" className="icon-link">
                            <svg width="24" className="icon-header" height="24" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.9999 1.5C6.2015 1.5 1.49994 6.20156 1.49994 12C1.49994 17.7984 6.2015 22.5 11.9999 22.5C17.7984 22.5 22.4999 17.7984 22.4999 12C22.4999 6.20156 17.7984 1.5 11.9999 1.5ZM11.9999 20.7188C7.18588 20.7188 3.28119 16.8141 3.28119 12C3.28119 7.18594 7.18588 3.28125 11.9999 3.28125C16.814 3.28125 20.7187 7.18594 20.7187 12C20.7187 16.8141 16.814 20.7188 11.9999 20.7188Z"
                                />
                                <path
                                    d="M10.8749 7.875C10.8749 8.17337 10.9935 8.45952 11.2044 8.6705C11.4154 8.88147 11.7016 9 11.9999 9C12.2983 9 12.5845 8.88147 12.7954 8.6705C13.0064 8.45952 13.1249 8.17337 13.1249 7.875C13.1249 7.57663 13.0064 7.29048 12.7954 7.0795C12.5845 6.86853 12.2983 6.75 11.9999 6.75C11.7016 6.75 11.4154 6.86853 11.2044 7.0795C10.9935 7.29048 10.8749 7.57663 10.8749 7.875ZM12.5624 10.5H11.4374C11.3343 10.5 11.2499 10.5844 11.2499 10.6875V17.0625C11.2499 17.1656 11.3343 17.25 11.4374 17.25H12.5624C12.6656 17.25 12.7499 17.1656 12.7499 17.0625V10.6875C12.7499 10.5844 12.6656 10.5 12.5624 10.5Z"
                                />
                            </svg>

                        </a>
                    </div>
                </nav>
            </div>
        </header>
    )
}