import React from 'react';
import adminImg from "../assets/images/admin.jpg"

const AdminPanel = () => {
    return (
        <div className='admin'>
            <img src={adminImg} alt="image" className='img' />
        </div>
    )
}

export default AdminPanel;