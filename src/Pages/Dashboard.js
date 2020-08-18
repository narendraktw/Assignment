import React, { useState, useEffect } from 'react'
import Datatable from '../Components/Datatable'
import { getUser } from '../Utils/Common';

function Dashboard() {
    const [usersData, setUsersData] = useState([]);
    const user = getUser();
    var columns = [
        { title: "id", field: "id", hidden: true },
        { title: "Avatar", render: rowData => <img alt='avatar' width={40} src={rowData === undefined ? " " : rowData.avatar} /> },
        { title: "First name", field: "first_name" },
        { title: "Last name", field: "last_name" },
        { title: "email", field: "email" }
    ]

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const result = await fetch(`https://reqres.in/api/users?page=2`);
                const body = await result.json();
                setUsersData(body);
            } catch (err) {
                alert(err);
            }

        }
        fetchUserData();
    }, [])

    return (
        <div>
             <h5>Welcome {user} !</h5>
            {usersData?.data && <Datatable udata={usersData?.data} columns={columns} />}
           
        </div>
    )
}

export default Dashboard
