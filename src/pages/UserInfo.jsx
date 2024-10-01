import React from 'react';
import userInfo from "../assets/images/user-info.jpg";

const UserInfo = () => {
    return (
        <div className='user-info'>
            <img src={userInfo} alt="image" className='img' />
        </div>
    )
}

export default UserInfo;