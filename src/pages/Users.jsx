import React from 'react';
import userImg from "../assets/images/user.jpg";

const Users = () => {
    return (
        <div className='users'>
            <img src={userImg} alt="image" className='img' />
        </div>
    )
}

export default Users;