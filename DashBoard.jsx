import React from "react";
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from "react";
import { Modal, Button } from 'react-bootstrap';
import EmployeeDetails from './EmployeeDetails';
import "./DashBoard.css";
import DataTable from 'react-data-table-component';

function DashBoard() {
    const [employedata, setEmployeedata] = useState([]);
    const [usersdata, setUsersData] = useState([]);
    const [originalEmployeeData, setOriginalEmployeeData] = useState([]); 
    const [originalUserData, setOriginalUserData] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState("");

    const handleCloseModal = () => setShowModal(false);

    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    };

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
            setOriginalEmployeeData(json.employees); // Store original employee data
            setUsersData(json.users);
            setOriginalUserData(json.users); // Store original user data
            setLoading(false);
        })
        .catch(error => {
            setError(error);
            setLoading(false);
        });
    }, []);

    const employeeColumns = [
        { name: 'ID', selector: row => row.id, sortable: true },
        { name: 'Name', selector: row => row.name, sortable: true },
        { name: 'Email', selector: row => row.email, sortable: true },
        { name: 'Phone No.', selector: row => row.phone, sortable: true },
        { name: 'Salary', selector: row => row.salary, sortable: true },
        { name: 'Status', selector: row => row.status, sortable: true },
    ];

    const userColumns = [
        { name: 'User ID', selector: row => row.id, sortable: true },
        { name: 'Username', selector: row => row.name, sortable: true },
        { name: 'phone', selector: row => row.mobile, sortable: true },
        { name: 'User Email', selector: row => row.email, sortable: true },
        { name: 'User Gender', selector: row => row.gender, sortable: true },
        { 
            name: 'User Photo', 
            cell: row => (
                <Button 
                    variant="primary" 
                    onClick={() => handleViewPhoto(row.photo)}
                >
                    View
                </Button>
            ), 
            ignoreRowClick: true, 
            allowOverflow: true, 
            button: true 
        },
        { name: 'User Password', selector: row => row.password, sortable: true },
        { name: 'confirm password', selector: row => row.cpassword, sortable: true },
        
   
    ];


    const handleViewPhoto = (photoUrl) => {
        setSelectedPhoto(photoUrl);
        setShowModal(true);
    };

    // Search handler for employee data
    const handleEmployeeSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        if (searchTerm === "") {
            setEmployeedata(originalEmployeeData);
        } else {
            const filteredData = originalEmployeeData.filter(item =>
                item.name.toLowerCase().includes(searchTerm) ||
                item.email.toLowerCase().includes(searchTerm) ||
                item.phone.toLowerCase().includes(searchTerm)
            );
            setEmployeedata(filteredData);
        }
    };

    // Search handler for user data
    const handleUserSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        if (searchTerm === "") {
            setUsersData(originalUserData);
        } else {
            const filteredData = originalUserData.filter(item =>
                (item.name?.toLowerCase().includes(searchTerm) || "") ||
            (item.email?.toLowerCase().includes(searchTerm) || "") ||
            (item.phone?.toLowerCase().includes(searchTerm) || "")
            );
            setUsersData(filteredData);
        }
    };

    // Loading and Error handling
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching data: {error.message}</div>;
    }

    return (
        <div className="table-container">
            <h2>Employee List</h2>
            <DataTable
                title="Employees"
                columns={employeeColumns}
                data={employedata}
                progressPending={loading}
                pagination
                highlightOnHover
                fixedHeader
                fixedHeaderScrollHeight="400px"
                subHeader
                subHeaderComponent={
                    <input
                        type="text"
                        placeholder="Search Employees..."
                        className="search-input"
                        onChange={handleEmployeeSearch} // Call the search handler
                    />
                }
            />
            <h2>User List</h2>
            <DataTable
                title="Users"
                columns={userColumns}
                data={usersdata}
                progressPending={loading}
                pagination
                highlightOnHover
                fixedHeader
                fixedHeaderScrollHeight="400px"
                subHeader
                subHeaderComponent={
                    <input
                        type="text"
                        placeholder="Search Users..."
                        className="search-input"
                        onChange={handleUserSearch} // Call the search handler
                    />
                }
            />
              <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>User Photo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img 
                        src={selectedPhoto} 
                        alt="User" 
                        style={{ width: '100%', height: 'auto' }} 
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <button className="btn btn-warning mt-3" onClick={handleLogout}>
                Logout
            </button>
        </div>
        
    );
}
export default DashBoard;