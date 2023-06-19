import React,{useRef,useEffect} from 'react'
import {json, Link} from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import axios from "axios"
function Login() {
  let dispatch=useDispatch();
  let emailInputRef = useRef();
  let passwordInputRef = useRef();
  let navigate =useNavigate();
  useEffect(()=>{
    validateLoginToken();
let storedEmail = localStorage.getItem("email")
let storedPassword = localStorage.getItem("password")
if(storedEmail){
emailInputRef.current.value = storedEmail;
passwordInputRef.current.value= storedPassword;
}
},[])
// useEffect(()=>{
//    let storedEmail = sessionStorage.getItem("email")
//   let storedPassword = sessionStorage.getItem("password")
//   if(storedEmail){
//   emailInputRef.current.value = storedEmail;
//   passwordInputRef.current.value= storedPassword;
//   }
//   },[])
 
  let login = async () => {
    let dataToSend = new FormData();
    dataToSend.append("email", emailInputRef.current.value);
    dataToSend.append("password", passwordInputRef.current.value);

    console.log(dataToSend);
    // let reqOptions = {
    //   method: "POST",
    //   body: dataToSend,
    // };
    // let JSONData = await fetch("http://localhost:2233/validatelogin",reqOptions);
    // let JSOData = await JSONData.json();
    
     let response = await axios.post("http://localhost:2233/validatelogin",dataToSend)
     console.log("first")
     console.log(response)
    dispatch({type:"login",value:response.data})
    if(response.data.isLoggedIn == true){
      localStorage.setItem("email",emailInputRef.current.value);
      localStorage.setItem("password",passwordInputRef.current.value);
      localStorage.setItem("token",response.data.token);
      
      // sessionStorage.setItem("email",emailInputRef.current.value);
      // sessionStorage.setItem("password",passwordInputRef.current.value);
      navigate("/dash");
alert(`welcome to ${response.data.name}`);
    }else{
      alert(response.data.msg);

    }
  };

  let validateLoginToken = async()=>{
    let dataToSend = new FormData();
    dataToSend.append("token", localStorage.getItem("token"));
    let response = await axios.post("http://localhost:2233/validateToken",dataToSend)
    dispatch({type:"login",value:response.data})

console.log("first")
console.log(response)
if(response.data.isLoggedIn == true){
  localStorage.setItem("token",response.data.token);

navigate("/dash")
  
  alert(`welcome to ${response.data.name}`);
}else{
  alert(response.data.msg);

}
}
  return (
<div className=".App">
      <div className='login'>
        <img className="logo" src=".\images\logo-big.png"></img>
        </div>
        <div className='login'>
        <Form >
        <h3 className="heading">Login</h3>

         
          
          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Control
              ref={emailInputRef}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

        

          <Form.Group className="mb-2" controlId="formBasicPassword">
            <Form.Control
              ref={passwordInputRef}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          

          <input
            onClick={() => {
              login();
            }}
            class="btn btn-outline-warning btn-sm w-100"
            type="button"
            value="Login"
          />
          
        </Form>

      </div>
      
      <h6>(OR)</h6>

      <Link class="btn btn-outline-primary w-100 btn-sm mb-2" type="button" to="/signup">Create Account</Link>
      <Link class="btn btn-outline-danger w-100 btn-sm mb-2" type="button" to="/update">Update Account</Link>
      <Link class="btn btn-outline-secondary w-100 btn-sm mb-2" type="button" to="/delete">Delete Account</Link>

      _

<br></br>
      _
      _

<br></br>
      _
      _




    </div>
  )

}
export default Login