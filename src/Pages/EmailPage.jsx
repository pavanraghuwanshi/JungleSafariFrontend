import React, { useState } from 'react';
import axios from 'axios';

const EmailPage = () => {

 
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = "http://localhost:4000/api/email/send"


    try {
      await axios.post(url, { to, subject, text },
        {
          headers:{
              'Content-Type':"application/json"
          },
          // withCredentials:true
      }
      );
      setMessage('Email sent successfully');
    } catch (error) {
      console.error(error);
      setMessage('Error sending email');
    }
  };

  return (
    <>
      <form className='mt-5 mb-5 formStyle'  onSubmit={handleSubmit}>
      <div>
      <h2>Send Email</h2>

      <div>
        <input
        className='inputBox'
          type="email"
          placeholder="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          required
        />
        <input
          className='inputBox'
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
        <textarea
          className="form-control my-2 feedtxtarea"
          placeholder="Message"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          ></textarea>

          </div>

        <button type="submit" className='buttonBox'>Send</button>
         <p className='mt-3'>{message}</p>
        </div>



      </form>
    </>
  );
};

 

export default EmailPage;
