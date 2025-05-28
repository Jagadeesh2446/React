import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";
import DataTable from 'react-data-table-component';

function Error_logo()
{

    const [errorData,setErrorData]=useState([]);
    const [sort,setSort]=useState([]);

useEffect(()=>
{
fetch('https://uat-tslabour.aptonline.in:8443/ReactDemo/api/sample/getdt',{
    method:'Get',
    headders:{
        'Content-Type':'application/json',
    }
})
.then(response => response.json())
.then(json=>{
    setErrorData(json.result);
    setSort(json.result);
})
},[])

const ErrorData = [
    { name: 'Error ID', selector: row => row.errorID, sortable: true },
    { name: 'Error Name', selector: row => row.errorName, sortable: true },
    { name: 'SP Name', selector: row => row.spName, sortable: true },
    { name: 'created_By', selector: row => row.created_By, sortable: true },
    { name: 'created_Date', selector: row => row.created_Date, sortable: true },
    ];


const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        if (searchTerm === "") {
            setErrorData(sort);
        } else {
            const filteredData = sort.filter(item =>
                item.errorID.toLowerCase().includes(searchTerm) ||
                item.errorName.toLowerCase().includes(searchTerm) ||
                item.spName.toLowerCase().includes(searchTerm)
            );
            setErrorData(filteredData);
        }
    };


return(
    <div className="table-container">
            <h2>Employee List</h2>
            <DataTable
                title="Error Logs"
                columns={ErrorData}
                data={errorData}
                //progressPending={loading}
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
                        onChange={handleSearch} // Call the search handler
                    />
                }
            />
            </div>
)
}
export default Error_logo;