import React, { useEffect } from 'react'
import cookies from 'js-cookie'


const Logout = async() => {

    let result = await fetch('http://localhost:4000/api/v1/user/logout')
    const auth = cookies.get("user")
    const a = auth.remove();
        useEffect(()=>{

            
            if(a){
              navigate("/")     
            
              }

        }, [])






//   return (
//     <div>
//       <h1>Pavan Raghuwanshi</h1>
//     </div>
//   )
}

export default Logout;
