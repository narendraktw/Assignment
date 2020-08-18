import React, { useState, useEffect } from 'react'
import '../Css/UserDetail.css'
import MailOutlineIcon from '@material-ui/icons/MailOutline';

function UserDetail({ match }) {
    const id = match.params.id;
    const [usersData, setUsersData] = useState([]);

    useEffect(() => {
        console.log('loading')
        const fetchLogedInUser = async () => {
            try {
                const result = await fetch(`https://reqres.in/api/users/${id}`);
                const body = await result.json();
                console.log(body);
                setUsersData(body.data);
            } catch (err) {
                alert(err);
            }
        }
        fetchLogedInUser();
    }, [])

    return (
        <div className="userDetail">
            <h5>User Details</h5>
            <div className="userInfo">
                <img src={usersData.avatar}></img>
                <h4>{usersData.first_name} {usersData.last_name}</h4>
                <h6><MailOutlineIcon/> {usersData.email}</h6>
            </div>
        </div>
    )
}

export default UserDetail
