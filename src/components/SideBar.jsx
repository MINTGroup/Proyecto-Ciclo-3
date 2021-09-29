import React from 'react';

const SideBar = () => {
    return (
        <div>
            <aside className="container-aside">
                <div className="aside-home">
                    <div className="content-menu">
                        <div className="menu">
                            <div>
                                <img src="./assets/img/icons/face_black_24dp.svg" alt="profile"/>
                                <p>Roll</p>
                            </div>
                            <div>
                                <img
                                    src="./assets/img/icons/storefront_black_24dp.svg"
                                    alt="store"
                                />
                                <p>Sales</p>
                            </div>
                            <div>
                                <img
                                    src="./assets/img/icons/logout_black_24dp.svg"
                                    alt="LogOut"
                                />
                                <p>Logout</p>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default SideBar;