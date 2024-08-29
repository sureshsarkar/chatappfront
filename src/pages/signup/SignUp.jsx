import React, { useState } from 'react';
import axios from 'axios';
import GenderCheckBox from '../components/GenderCheckBox.jsx'
import FullName from '../components/FullName.jsx'
import UserName from '../components/UserName.jsx'
import Password from '../components/Password.jsx'
import Cpassword from '../components/Cpassword.jsx'
import SubmitButton from '../components/SubmitButton.jsx'
import {useNavigate, Link } from 'react-router-dom'


const SignUp = () => {
  const navigate = useNavigate();

  const [inputs,setInputs]= useState({
    fullname:'',
    username:'',
    password:'',
    cpassword:'',
    gender:'male'
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value
    }));
  };

  const handelCheckboxChange = (gender)=>{
    setInputs({...inputs, gender})
  }

  const handelSubmit = async (e)=>{
    try {
    e.preventDefault();
    const data = {
      fullname:inputs.fullname,
      username:inputs.username,
      password:inputs.password,
      cpassword:inputs.cpassword,
      gender:inputs.gender,
      profilePic:''

    }
 
    const user = await axios.post(`https://chatappbackend-l6tu.onrender.com/api/auth/signup`, data);

    if(user.data.success===true){
      navigate('/');
    }
  } catch (error) {
      
  }
  }
  return (
    <section>
      <div className="bgImg">
        <div className="row">
          <div className="col-md-12">
            <div className="marginTop">
              <h1 className="h1 text-center">Register into LiveChat</h1>
              <div className="formWidth">
                <form action="" method="post">
                  <FullName handleChange={handleChange} selectedFullname={inputs.fullname} />
                  <UserName handleChange={handleChange} selectedUsername={inputs.username}/>
                  <Password handleChange={handleChange} selectedPassword={inputs.password}/>
                  <Cpassword handleChange={handleChange} selectedCpassword={inputs.cpassword}/>
                  <GenderCheckBox onCheckboxChange={handelCheckboxChange} checkedGender={inputs.gender}/>
                  <SubmitButton onClickSubmit={handelSubmit}/> <span className='text-primary underline'><Link to="/login">Login Now</Link></span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp


