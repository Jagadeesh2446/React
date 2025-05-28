import React from "react";
import { useNavigate } from 'react-router-dom';
import { useState,useEffect} from "react";

function Register()
{
    const navigate = useNavigate();
    const login=()=>
        {
            debugger;
            
           navigate('/');
        }
        const [formData,setFormData]=useState({
            name:'',
            mobile:'',
            email:'',
            gender:'',
            Photofile:null,
            password:'',
            cpassword:'',
        })
        const clearvalues=()=>
        {
            setFormData({ 
                name:'',
                mobile:'',
                email:'',
                gender:'',
                Photofile:'',
                password:'',
                cpassword:'',
            });
        }
        const eventhandeler=(e)=>
        {
            const{name,value}=e.target;
            setFormData({
                ...formData,
                [name]:value,
            })
        }
        const handleFileChange = (e) => {
            debugger;
            const file = e.target.files[0];
            //setFormData({ ...formData, Photofile: file.name });
            validatePhoto(file);
        };

        const validatePhoto = (file) => {
            let tempErrors={};
            
            const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
        
           
            if (!allowedTypes.includes(file.type)) {
                tempErrors.Photofile="Only JPG and PNG files are allowed.";
                setFormData({ ...formData, Photofile: null });
                setError(tempErrors);
                // file.current.value = ''; 
                return;
            }
        
            
            const maxSize = 2 * 1024 * 1024;; // 2MB
            if (file.size > maxSize) {
                tempErrors.Photofile="File size must be less than or equal to 1MB.";
                setFormData({ ...formData, Photofile: null });
                setError(tempErrors);
                return;
            }
        
            
            setError(tempErrors);
            setFormData({ ...formData, Photofile: file });
        };
        

        const [error,setError]=useState({});
        const validations=()=>
        {
            let tempErrors={};
            if(!formData.name.trim())
            {
                tempErrors.name="Name is required.";
            }
            if(!formData.mobile.trim())
            {
                tempErrors.mobile="Mobile Number is required.";
            }
            if(!formData.email.trim())
            {
                tempErrors.email="Email is required.";
            }
            if(!formData.gender.trim())
            {
                tempErrors.gender="Select the gender.";
            }
            if(formData.Photofile == null)
            {
                tempErrors.Photofile="Select the Photofile.";
            }
            if(!formData.password.trim())
            {
                tempErrors.password="Password is required.";
            }
            if(!formData.cpassword.trim())
            {
                tempErrors.cpassword="confirm password is required."
            }
            setError(tempErrors);

            if(Object.keys(tempErrors).length===0)
            {
                
                fetch('https://localhost:7260/api/AddUsers', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ 
                        Name : formData.name,
                        Mobile : formData.mobile,
                        Email: formData.email,
                        Gender: formData.gender,
                        Photo: formData.Photofile,
                        password: formData.password,
                        Cpassword: formData.cpassword,
                    }),
                    mode: 'cors', 
                    
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok ' + response.statusText);
                    }
                    return response.json();
                })
                .then((json) => {
                    alert('Submitted successfully');
                    navigate('/');
                })
                .catch((error) => {
                    console.error('There was a problem with your fetch operation:', error);
                    alert('Submission failed: ' + error.message);
                });
            }
        }
    return (
        <div>
        <section >
        <div className="container">
            <div className=" m-auto w mt-5"  >
                
                <div className="form-control">
                <div className="row">
                    <h4 style={{textAlign:"center"}}>Registration</h4>
                </div>
                <div>
                    <label id="lblname">Name : </label>
                    <input id="name" value={formData.name} name="name" onChange={eventhandeler} className="form-control"></input>
                </div>
                {error.name && <div className="text-danger">{error.name}</div>}
                <div>
                    <label id="lblmobile">Mobile : </label>
                    <input id="mobile" name="mobile" value={formData.mobile} onChange={eventhandeler} className="form-control"></input>
                </div>
                {error.mobile && <div className="text-danger">{error.mobile}</div>}
                <div>
                    <label id="lblpassword">Email : </label>
                    <input id="email" name="email" value={formData.email} onChange={eventhandeler} className="form-control"></input>
                </div>
                {error.email && <div className="text-danger">{error.email}</div>}
                <br></br>
                <div className="form-control">
                    <label id="lblgender">Gender : </label>
                    <input type="radio" id="male" name="gender" checked={formData.gender === 'Male'} value="Male" onChange={eventhandeler}  ></input>
                    <label htmlFor="male">  Male</label>
                    <input type="radio" id="female" name="gender" checked={formData.gender === 'female'} value="female" onChange={eventhandeler} ></input>
                    <label htmlFor="female">  female</label>
                    <input type="radio" id="Others" name="gender" checked={formData.gender === 'Others'} value="Others" onChange={eventhandeler} ></input>
                    <label htmlFor="Others">  others</label>
                </div>
                {error.gender && <div className="text-danger">{error.gender}</div>}
                <div>
                    <label id="lblfile">photo : </label>
                    <input type="file" id="Photofile" name="Photofile" onChange={handleFileChange} className="form-control"></input>
                </div>
                {error.Photofile&&<div className="text-danger">{error.Photofile}</div>}
                <div>
                    <label id="lblpassword">Password : </label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={eventhandeler} className="form-control"></input>
                </div>
                {error.password && <div className="text-danger">{error.password}</div>}
                <div>
                    <label id="lblcpassword">Confirm Password : </label>
                    <input type="password" id="cpassword" name="cpassword" value={formData.cpassword} onChange={eventhandeler} className="form-control"></input>
                </div>
                {error.cpassword && <div className="text-danger">{error.cpassword}</div>}
                <br></br>
                <div className="row">
                   
                    <div className="myStyle">
                    <button className="btn btn-danger" onClick={clearvalues}>Clear</button>
                    <button className="btn btn-primary" onClick={validations}>Submit</button>
                    </div>
                </div>
                <div>
                <button className="btn btn-warning" onClick={login}>Login</button>
            </div>
                
                </div>
               
            </div>
            </div>
 </section>
        </div>
      );
}
export default Register;