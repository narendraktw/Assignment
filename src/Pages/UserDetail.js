import React,{useState,useEffect} from 'react'
import { getUser } from '../Utils/Common';

function UserDetail({match}) {
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
        <div>
            <h2>User Details</h2>
            <img src={usersData.avatar}></img>
            <h4>{usersData.first_name} {usersData.last_name}</h4>
            <h6>{usersData.email}</h6>
        </div>
    )
}

export default UserDetail
