import React from "react";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './Login.css';

  
function Login({ setLoggedIn })
{
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
       
        email: '',
        password: '',
        Login:'',
    });
    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
const validations=()=>
{
    debugger;
    let tempErrors = {};
        if (!formData.email.trim()){
            tempErrors.email = "Name is required.";
        }    
        if (!formData.password.trim()){
            tempErrors.password = "password is required.";
        }
          
        setErrors(tempErrors);
        // return Object.keys(tempErrors).length === 0;

        if(Object.keys(tempErrors).length === 0)
        {
            // if(formData.email=="budithichintu@gmail.com" && formData.password=="123456")
            // {
            //     navigate('/DashBoard');
            // }
            // else{
            //     tempErrors.Login="Invalid Credentials."; 
            // }

            
            fetch('https://localhost:7260/api/Checklogins', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    email: formData.email,
                    password: formData.password,
                }),
                mode: 'cors', 
                
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Invalid Credentials');
                }
                return response.json();
            })
            .then((json) => {
                // alert('Submitted successfully');
                setLoggedIn(true);
                navigate('/DashBoard');
                
            })
            .catch((error) => {
                console.error('There was a problem with your fetch operation:', error);
                alert('Login failed : ' + error.message);
            });
        }
 } 
 const clearvalues=()=>{
    setFormData({
        email: '',
        password: '',
        Login:'',
    });
 }



    return (
        <div>

        <section>
        <div className="container">
            <div className=" m-auto w mt-5"  >
                
                <div className="form-control">
                <div className="row">
                    <h4 style={{textAlign:"center"}}>Login</h4>
                </div>
                <div className="mb-3">
                    <label id="lblemail">Email : </label>
                    <input type="text" id="email" name="email" value={formData.email}
                        onChange={handleChange} className="form-control"></input>
                </div>
                {errors.email && <div className="text-danger">{errors.email}</div>}
                <div>
                    <label id="lblpassword">Password : </label>
                    <input type="text" id="password" name="password" value={formData.password}
                        onChange={handleChange} className="form-control"></input>
                </div>
                {errors.password && <div className="text-danger">{errors.password}</div>}
                <br></br>
                <div className="row">
                    <div>
                    <Link to="/forgot-password">Forgot Password?</Link>
                    </div>
                    <div className="myStyle">
                    <button className="btn btn-danger" onClick={clearvalues}>Clear</button>
                    <button className="btn btn-primary" onClick={validations}>Login</button>
                    </div>
                </div>
                {errors.Login && <div className="text-danger">{errors.Login}</div>}
                <br></br>
                <div className="row">
                <div style={{textAlign:"center"}}>
                 <p>you don't have account please <br></br><Link to="/register">Register</Link></p>
                </div>
                </div>
                </div>
               
            </div>
            </div>
 </section>
        </div>
      );
    
}
export default Login;