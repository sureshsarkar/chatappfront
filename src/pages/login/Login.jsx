import React, { useState } from 'react'
import SubmitButton from '../components/SubmitButton'
import UserName from '../components/UserName.jsx'
import Password from '../components/Password.jsx'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';
const Login = () => {
  const navigate = useNavigate();
  const [inputs,setInputs] = useState({
    username:'',
    password:'',
  });
  const handelSubmit = async (e)=>{
    try {
      e.preventDefault()
      const data ={
        username: inputs.username,
          password: inputs.password
      }
   
      // return false;
      const { userData } = await axios.put(`https://chatappbackend-l6tu.onrender.com/api/auth/login`, data)
      if (userData?.success) {
          navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (e)=>{
    setInputs((inputs) => ({
      ...inputs,
      [e.target.name]: e.target.value
  }));
  }
  return (
    <>
     <section>
      <div className="container bgImg">
        <div className="row">
          <div className="col-md-12">
            <div className="marginTop">
            <h1 className='h1 text-center'>Login into LiveChat</h1>
            <div className="formWidth">
            <form action='' method='post'>
              <UserName handleChange = {handleChange} selectedUsername={inputs.username}/>
              <Password handleChange = {handleChange} selectedPassword={inputs.password}/>
              <SubmitButton onClickSubmit={handelSubmit}/> <span className='text-primary underline'><Link to="/login">Login Now</Link></span>
            </form>
          </div>
          </div>
          </div>
        </div>
      </div>
     </section>
    </>
  )
}

export default Login
