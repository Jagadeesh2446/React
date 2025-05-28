import React, { useState, useEffect } from "react";
import DataTable from 'react-data-table-component';

const EmployeeDetails = ({ data, loading }) => {
    debugger;
    const [employedata, setEmployeedata] = useState([]);
    const [originalEmployeeData, setOriginalEmployeeData] = useState([]);

    // Initialize data on first render or when `data` changes
    useEffect(() => {
        if (data) {
            setEmployeedata(data);
            setOriginalEmployeeData(data);
        }
    }, [data]);

    const employeeColumns = [
        { name: 'ID', selector: row => row.id, sortable: true },
        { name: 'Name', selector: row => row.name, sortable: true },
        { name: 'Email', selector: row => row.email, sortable: true },
        { name: 'Phone No.', selector: row => row.phone, sortable: true },
        { name: 'Salary', selector: row => row.salary, sortable: true },
        { name: 'Status', selector: row => row.status, sortable: true },
    ];

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
                        onChange={handleEmployeeSearch}
                    />
                }
            />
            {!loading && employedata.length === 0 && (
                <p>No employee data available.</p>
            )}
        </div>
    );
};

export default EmployeeDetails;
