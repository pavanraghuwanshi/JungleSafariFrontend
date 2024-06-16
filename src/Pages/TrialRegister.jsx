
import React from 'react'
// import { Axios } from "axios";
import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import cookies from 'js-cookie'
import { FaSignInAlt } from 'react-icons/fa';


     

function RegisterTrial() {

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const [data, setData] = useState({
    name:"",
    email:"",
    password:""

});

  console.log(data);


  const handleOnChange = (e)=>{
    
    const [name, value] = e.target;

    setData((prev)=>{
     return{ ...prev, 
      [name]: value
    }
    })
  }




  const collectData = async()=>{


    const url = "http://localhost:4000/api/v1/user/register"

    const response = await axios.post(url, {name,email, password},
    
        {
            headers:{
                'Content-Type':"application/json"
            },
            withCredentials:true
        }
    
    )
    cookies.set("user",response);

   

    
    // let result = await fetch('http://localhost:4000/api/v1/user/register',{
    //     method:'post',
    //     body:JSON.stringify({name,email,password}),
    //     headers:{'Content-Type':'application/json'},

    //     })

    //     result = await result.json()
    //     console.log(result);
    //     cookies.set("user",JSON.stringify(result));
        
}

useEffect(()=>{
  const auth = cookies.get("user")
if(auth){
  navigate("/")     

  }
 
},[])



  return (
    <>

<form className='mt-3 mb-5 formStyle'>
        <div>
          <h3 className='mb-3 mt-3'>Login/SigIn</h3>
  <div className="mb-3">
    <label className="form-label">Enter your name</label>
    <input type="text" className="form-control" value={data.name} name='name' onChange={handleOnChange}/>
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" 
     
     value={data.email} name='email'  onChange={handleOnChange}/>


    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="current-password" className="form-control" id="exampleInputPassword1"  value={data.password} name='password' onChange={handleOnChange}/>
    {/* <div className="mt-3 ">
    <label htmlFor=" "  className="form-label ms-3 btntext"> Alredy have a account   
    
        <button className="btn btn-primary subBtn ms-3" onClick={logpage}>

        < FaSignInAlt/>
        </button>
        </label>

    </div> */}

  </div>
  <button type="submit" onClick={collectData} className="btn btn-primary subBtn">Submit</button>


  </div>
</form>

    </>
  )
}


export default  RegisterTrial;