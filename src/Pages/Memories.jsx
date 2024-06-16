import React,{useState} from 'react';







export default function Memories() {

            const [file1, setFile1] = useState();
            const [file2, setFile2] = useState();
            const [file3, setFile3] = useState();
            function handleChange1(e){
              console.log(e.target.files);
              setFile1(URL.createObjectURL(e.target.files[0]));

            }
            function handleChange2(e){
              console.log(e.target.files);
              setFile2(URL.createObjectURL(e.target.files[0]));

            }
            function handleChange3(e){
              console.log(e.target.files);
              setFile3(URL.createObjectURL(e.target.files[0]));

            }


  return (
    <>
    <div className='memohead'>

    <h4 className='mx-5 mt-5 mb-5'>Share your memories with people :</h4>
    </div>


    <div className=" col-sm-12 col-md-6 col-lg-4 mt-4  d-lg-flex w-100">
    <div className="" >
      <input type="file" onChange={handleChange1}  />    
      <img  className='imageDiv mt-3 mb-3' src={file1} />  
    </div>

    <div className="" >
      <input type="file" onChange={handleChange2}  />   
      <img  className='imageDiv mt-3 mb-3' src={file2}/>    
    </div>

    <div className="" >
      <input type="file" onChange={handleChange3}  />  
      <img  className='imageDiv mt-3 mb-3' src={file3} />  
    </div>

    </div>
    
    </>
  )
}

