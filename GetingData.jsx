import React, { useEffect, useState } from 'react';
import EmployeeDetails from './EmployeeDetails';
//import UserDetails from './UserDetails';


const GetingData = () => {
    debugger;
    const [employeeData, setEmployeedata] = useState(null);
    const [userData, setUsersData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://localhost:7260/api/GetEmp', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(json => {
            setEmployeedata(json.employees);
            setUsersData(json.users);
            setLoading(false);
        })
        .catch(error => {
            // setError(error);
            setLoading(false);
        });
    }, []);
    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <EmployeeDetails data={employeeData} />
            {/* <UserDetails data={userData} /> */}
        </div>
    );
};

export default GetingData;
