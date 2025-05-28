import React,{useState,useEffect} from "react";

  
    

function Emp()
{

    const [inputField, setInputFiels] = useState({
        EmpID:"",
        name: "",
        email: "",
        Phone: "",
        Salary: "",
        status: "",
      });
      const [array,setArray]=useState([   ]);
      const [message, setMessage] = useState("");

     // const []
    
    
      const updateForm = (e) => {
        setInputFiels({ ...inputField, [e.target.name]: e.target.value });
      };


  const submitForm  = async (e) => {
    debugger;
        e.preventDefault();
       
        const data = { 
            EmpID:inputField.EmpID,
            name: inputField.name,
            email: inputField.email,
            Phone: inputField.Phone,
            Salary: inputField.Salary,
            status: inputField.status,
        };  // Data to send
    
        try {
          const res = await fetch('https://localhost:7260/api/Employees/AddEmp', {
            method: 'POST',
            mode:'no-cors',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),  
          });
        console.log(res);
          if (res.ok) {
            alert('res');
            
          }
          else{
            alert('Fail');
            // throw new Error('Failed to submit data');
          }
    
          const result = await res.json();  
          // setResponse(result);  // Store the API response in state
        } 
        catch (err) {
          // setError(err.message);  // Set error if request fails
        } finally {
          // setLoading(false);  // Stop loading
        }
    };

  const GetData = async (e) => {
    debugger;
    try {
      const response = await fetch('https://localhost:7260/api/Employees'); 
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      console.log(result);
    } catch (error) {
      // setError(error.message);
    } finally {
      // setLoading(false);
    }
  };
    return (
        <div className="container">
          <form >
          <label htmlFor="name">EmpID:</label>
            <input
              type="text"
              name="EmpID"
              value={inputField.EmpID}
              onChange={updateForm}
             />
             <br></br>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              value={inputField.name}
              onChange={updateForm}
             />
             {/* <span style={{ color: "red" }}>{message}</span> */}
            <br></br>
            <label htmlFor="email">Email:</label>
            
            <input
              type="text"
              name="email"
              value={inputField.email}
              onChange={updateForm}
            />
            {/* <span style={{ color: "red" }}>{message}</span> */}
            <br></br>
            <label htmlFor="city">Phone:</label>
            <input
              type="text"
              name="Phone"
              value={inputField.Phone}
              onChange={updateForm}
            />
            {/* <span style={{ color: "red" }}>{message}</span> */}
            <br></br>
            <label htmlFor="state">Salary:</label>
            <input
              type="text"
              name="Salary"
              value={inputField.Salary}
              onChange={updateForm}
            />
            {/* <span style={{ color: "red" }}>{message}</span> */}
            <br></br>
            <label htmlFor="country">status:</label>
            <input
              type="text"
              name="status"
              value={inputField.status}
              onChange={updateForm}
            />
            {/* <span style={{ color: "red" }}>{message}</span> */}
            <br></br>
            <button value="submit" onClick={submitForm}>Submit</button>
           <button onClick={GetData}>GetData</button>
           
          </form>
          
        </div>
    );
}
export default Emp;