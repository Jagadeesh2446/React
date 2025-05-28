import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; // Importing CSS file for styling

function Navbar({ handleLogout }) {
  const navigate = useNavigate();

  const logout = () => {
    handleLogout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/DashBoard" className="navbar-brand">MyApp</Link>
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item"><Link to="/DashBoard" className="navbar-link">Dashboard</Link></li>
        <li className="navbar-item"><Link to="/EmployeeDetails" className="navbar-link">EmployeeDetails</Link></li>
        <li className="navbar-item">
          <button onClick={logout} className="navbar-button">Logout</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
