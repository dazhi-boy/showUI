import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () =>(
    <div>
        <div>
            <NavLink to='/FriendList'>聊天</NavLink> |&nbsp;
            <NavLink exact to='/'>首页</NavLink> |&nbsp;
            <NavLink to='/Product'>个人</NavLink>
        </div>
    </div>
)
export default NavBar;