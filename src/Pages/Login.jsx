import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import cookies from 'js-cookie'



export default  function Logout() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate =  useNavigate()


    const handdler = async()=>{

        let result = await fetch('http://localhost:4000/api/v1/user/login', {
          method:'post',
          body:JSON.stringify({email,password}),
          headers:{'Content-Type':'application/json'},
  
        })

        result = await result.json()
        cookies.set("user",JSON.stringify(result));

        if(result){
          navigate("/destination")
        }

    }






return (
  <>
    
    <form className='mt-5 mb-5 formStyle'>
      <div>
<div className="mb-3">
  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
</div>
<div className="mb-3">
  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
  <input type="current-password" className="form-control" id="exampleInputPassword1" value={email}  onChange={(e)=>setEmail(e.target.value)}/>
</div>
<div className="mb-3 form-check">
  <input required type="checkbox" className="form-check-input" id="exampleCheck1"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
  <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
</div>
<button type="submit" onClick={handdler} className="btn btn-primary subBtn">Submit</button>

</div>
</form>

  </>
)
}
