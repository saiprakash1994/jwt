import React,{useRef,useState} from 'react'
import {json, Link} from "react-router-dom";
import Form from "react-bootstrap/Form";

function Update() {
  let emailInputRef = useRef();
  let passwordInputRef = useRef();
  let imageInputRef = useRef();
  let emailSpanRef=useRef();
  let emailhelpRef=useRef();
  let emailhelpStr="You can use letters, numbers and full stops";
  let passwordSpanRef=useRef();
  let passwordhelpRef=useRef();
  let passwordhelpStr="Minimum 8 char,one uppercase,lowercase letter ,one number:";
  let invalidStr="* Invalid Data";
  let invalidStrcol="red";

  const [file, setFile] = useState();
  let handleChange = (e) => {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  };
  let update = async () => {
    let dataToSend = new FormData();
    dataToSend.append("email",emailInputRef.current.value);
    dataToSend.append("password",passwordInputRef.current.value);
    dataToSend.append("profilepic",imageInputRef.current.files[0]);


    console.log(dataToSend);
    let reqOptions = {
      method: "PUT",
      body: dataToSend,
    };
    let JSONData = await fetch("http://localhost:2233/updateDetails",reqOptions);
    let JSOData = await JSONData.json();
    
    
    console.log(JSOData);
  };
  return (
<div className=".App">
      <div>
        <img className="logo" src=".\images\logo-big.png"></img>
        <Form >
        <h3 className="heading">Update</h3>

         
          
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              ref={emailInputRef}
              type="email"
              placeholder="Enter email"
              onBlur={()=>{
                emailhelpRef.current.style.visibility="hidden";
              }}
              onFocus={()=>{
                emailhelpRef.current.style.visibility="visible";

              }}
              onChange={() => {
                emailhelpRef.current.innerHTML=emailhelpStr;
                let regEx = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/ ;
                let validName = regEx.test(emailInputRef.current.value);
                if (validName == true) {
                  emailSpanRef.current.innerHTML="";
                  emailSpanRef.current.style.visibility="hidden";
                } else{
                  emailSpanRef.current.innerHTML = invalidStr;
                  emailSpanRef.current.style.color=invalidStrcol;
                  emailSpanRef.current.style.visibility="visible";

                }
              }}
            />
            <p ref={emailhelpRef}></p>
            <span ref={emailSpanRef}></span>
          </Form.Group>

        

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              ref={passwordInputRef}
              type="password"
              placeholder="Password"
              onBlur={()=>{
                passwordhelpRef.current.style.visibility="hidden";
              }}
              onFocus={()=>{
                passwordhelpRef.current.style.visibility="visible";

              }}
              onChange={() => {
                passwordhelpRef.current.innerHTML=passwordhelpStr;
                let regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ ;
                let validName = regEx.test(passwordInputRef.current.value);
                if (validName == true) {
                  passwordSpanRef.current.innerHTML="";
                  passwordSpanRef.current.style.visibility="hidden";
                } else{
                  passwordSpanRef.current.innerHTML = invalidStr;
                  passwordSpanRef.current.style.color=invalidStrcol;
                  passwordSpanRef.current.style.visibility="visible";

                }
              }}
            />
            <p ref={passwordhelpRef}></p>
            <span ref={passwordSpanRef}></span>
          </Form.Group>
          
          <Form.Group
            id="img-preview"
            className="mb-3"
            controlId="formBasicImage"
          >
            <Form.Control
              onChange={handleChange}
              ref={imageInputRef}
              type="file"
            />
            <img className="preview" src={file} />
          </Form.Group>
          <input
            onClick={() => {
              update();
            }}
            class="btn btn-outline-info btn-sm w-100"
            type="button"
            value="Update"
          />
          
        </Form>
      </div>
      <h6>(OR)</h6>

      <Link class="btn btn-outline-warning btn-sm w-100" type="button" to="/">login</Link>
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

export default Update