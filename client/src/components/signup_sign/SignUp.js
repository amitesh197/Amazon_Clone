import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {

  const [udata, setUData] = useState({
    fname: '',
    email: '',
    mobile: '',
    password: '',
    cpassword: ''
  });

  const adddata = (e) => {
    const {name, value} = e.target;

    setUData(()=>{
      return {
        ...udata,
        [name]:value
      }
    })
  };
  


  const senddata = async(e)=>{
    e.preventDefault();
    const {fname, email, mobile, password, cpassword} = udata;
    
    /*if(fname === ""){
      toast.warn("Provide Name!", {
        position: 'top-center'
      })
    }else if(email === ""){
      toast.warn("Provide Emal!", {
        position: 'top-center'
      })
    }*/

    const res = await fetch('/register', {
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        fname, email, mobile, password, cpassword
      })
    });

    const data = await res.json();
    //console.log(data);

    if(res.status === 422 || !data){
      //alert("No data!");
      toast.warn('Invalid Details!', {
        position: 'top-center'
      })
    }else{
      //alert("Data Successfully added!");
      toast.success('Data Successfully added!', {
        position: 'top-center'
      })
      setUData({...udata,fname:"", email:"", mobile:"", password:"", cpassword:""});
    }

  }

  return (
    <div>
        <section>
        <div className='sign_container'>
          <div className='sign_header'>
            <img src='./blacklogoamazon.png' alt='amazonlogo' />
          </div>
          <div className='sign_form'>
            <form method='POST'>
              <h1>Create Account</h1>
              <div className='form_data'>
               <label htmlFor='fname'>Name</label>
                  <input type='text' 
                  onChange={adddata}
                  value={udata.fname}
                  name='fname' id='fname' />
                <label htmlFor='email'>Email</label>
                  <input type='text' 
                  onChange={adddata}
                  value={udata.email}
                  name='email' id='email' />
                <label htmlFor='number'>Mobile</label>
                  <input type='text' 
                  onChange={adddata}
                  value={udata.mobile}
                  name='mobile' id='mobile' />
              </div>
              <div className='form_data'>
                <label htmlFor='password'>New Password</label>
                <input type='password' 
                onChange={adddata}
                value={udata.password}
                name='password' id='password' placeholder='Atleast 6 characters' />
              </div>
              <div className='form_data'>
                <label htmlFor='cpassword'>Re-enter Password</label>
                <input type='password' 
                onChange={adddata}
                value={udata.cpassword}
                name='cpassword' id='cpassword' />
              </div>
              <button className='signin_btn' onClick={senddata}>Continue</button>
              <div className='signin_info'>
                <p>Already have an account?</p>
                <NavLink to='/login'>Sign In</NavLink>
              </div>
            </form>
          </div>
          <ToastContainer />
        </div>
      </section>
    </div>
  )
}

export default SignUp