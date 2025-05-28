import React from "react";
import './App.css';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

function Fpassword()
{
    const [formData,setFormData]=useState({
        email:'',
        Newpassword:'',
    })
const eventhandeler=(e)=>
{
    const{name,value}=e.target;
    setFormData({
        ...formData,
        [name]:value,
    })
}
const clearvalues=()=>
{
    setFormData({
        email:'',
        Newpassword:'',
    });
    setShowNewPassword(false);
    SetsPassword(true);
    SetuPassword(false);
}
    const [error,setError]=useState({});
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [spassword, SetsPassword] = useState(true);
    const [upassword, SetuPassword] = useState(false);
    const navigate = useNavigate();
    const login=()=>
        {
            debugger;
           navigate('/');
        }
        const validations=()=>
        {
           let temperrors={};
           if(!formData.email.trim())
           {
            temperrors.email="Email Id is required.";
           }
           

           setError(temperrors);

           if(Object.keys(temperrors).length===0)   
           {
            setShowNewPassword(true);
            SetsPassword(false);
            SetuPassword(true);
           }
        }

        const Npasswordvalidations=()=>
        {
            let temperrors={};

            if(!formData.Newpassword.trim())
                {
                 temperrors.Newpassword="New password is required.";
                }

                setError(temperrors);

                if(Object.keys(temperrors).length===0)
                {
                    fetch('https://localhost:7260/api/Updatepassword', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ 
                           
                            Email: formData.email,
                            password: formData.Newpassword,
                           
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
        
return(
    
    <div>
    <section >
    <div className="container">
        <div className=" m-auto w mt-5"  >
            
            <div className="form-control">
            <div className="row">
                <h4 style={{textAlign:"center"}}>forgot Password</h4>
            </div>
            <div>
                <label id="lblemail">Email : </label>
                <input id="email" value={formData.email} name="email" onChange={eventhandeler} className="form-control"></input>
            </div>
           {error.email && <div className="text-danger">{error.email}</div>}
           <div id="NPASS" style={{ display: showNewPassword ? "block" : "none" }}>
                <label id="lblnewpassword">New Password : </label>
                <input id="Newpassword" value={formData.Newpassword} name="Newpassword" onChange={eventhandeler} className="form-control"></input>
            </div>
           {error.Newpassword && <div className="text-danger">{error.Newpassword}</div>}
            <br></br>
            <div className="row">
              
                <div className="fmyStyle">
                <button className="btn btn-danger" onClick={clearvalues}>Clear</button>
                <button style={{ display: spassword ? "block" : "none" }}  className="btn btn-primary" onClick={validations}>Set password</button>
                <button style={{ display: upassword ? "block" : "none" }}  className="btn btn-primary" onClick={Npasswordvalidations}>Update password</button>
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

export default Fpassword;