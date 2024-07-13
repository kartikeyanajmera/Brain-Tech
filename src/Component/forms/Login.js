import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import './Form.css'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import hero from '../img/hero-bg.jpg'
// import { LoginContext } from '../context/ContextProvider';
const Sign_in = () => {
    
    const history = useNavigate();

    const [logdata,setData]=useState({
        fname:'',
        password:''
    });
    console.log(logdata);

    // const {account,setAccount} = useContext(LoginContext);
    

    const addData=(e)=>{
const{name,value}=e.target;

setData(()=>{
    return{
        ...logdata,
        [name]:value
    }
   })
};

const sendData = async(event)=>{
    event.preventDefault();
    
    const {fname,password}=logdata;

    const res = await fetch('http://localhost:9000/login',{
        method:'POST',
        headers:{
            'Content-Type': "application/json"
        },
        body:JSON.stringify({
            fname,password
        })
    });

    const data = await res.json();
    console.log(data);
    
    
    if(res.status === 400 || !data){
        console.log("Invalid details");
        toast.warn("Invalid details",{
            position: "top-center",
        })
    }else{
        console.log("data valid");
        // setAccount(data);
        history('/');
        toast.success('user valid',{
            position:'top-center',
        })
        localStorage.setItem('mhc',JSON.stringify(data))
        console.log(data);
    
        setData({...logdata,
                   fname:"",
                   password:""
                });
    }
   
}

  return (
    <>
      <section>
        <div className="sign-container">
            <img src={hero}/>
            <div className='index'>
            <div className="sign-header">
                <h1>Radiant Life</h1>
            </div>
            <div className="sign-form">
                <form method='POST'>
                    <h2>Sign-In</h2>
                    <div className="form-data">
                        <label htmlFor='fname'>fname</label>
                        <input type='text' name='fname' id='fname' onChange={addData} value={logdata.fname}/>
                    </div>
                    <div className="form-data">
                        <label htmlFor='password'>Password</label>
                        <input type='password' name='password' placeholder='At least 6 char' id='password' onChange={addData} value={logdata.password}/>
                    </div>
                    <button className='signin-btn' type='submit' onClick={sendData}>Continue</button>
     </form>
            </div>
            <div className="create-accountinfo">
                <p>New To Radiant Life?</p>
                <NavLink to='/register'>
                  <button>Create Your witware account</button>
              </NavLink>  
          </div>
          <ToastContainer/>
            </div>    
        </div>
      </section>
    </>
  )
}

export default Sign_in
