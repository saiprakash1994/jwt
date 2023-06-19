import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

function Delete() {
  let emailInputRef = useRef();
  let emailSpanRef = useRef();
  let emailhelpRef = useRef();
  let emailhelpStr = "You can use letters, numbers and full stops";
  let invalidStr = "* Invalid Data";
  let invalidStrcol = "red";
  let deleteUser = async () => {
    let dataToSend = new FormData();
    dataToSend.append("email",emailInputRef.current.value);
    let reqOptions = {
      method: "DELETE",
      body:dataToSend,
    };
    let JSONData = await fetch("http://localhost:2233/deleteUser", reqOptions);
    let JSOData = await JSONData.json();
    if(JSOData.deletedCount == 1){
      alert("USER DELETED SUCESSFULLY");
    }
    else {
      console.log("No user with the email id");

    

    }

  };
  return (
    <div className=".App">
      <div>
        <img className="logo" src=".\images\logo-big.png"></img>
        <Form>
          <h3 className="heading">Delete User</h3>

          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Control
              ref={emailInputRef}
              type="email"
              placeholder="Enter email"
              onBlur={() => {
                emailhelpRef.current.style.visibility = "hidden";
              }}
              onFocus={() => {
                emailhelpRef.current.style.visibility = "visible";
              }}
              onChange={() => {
                emailhelpRef.current.innerHTML = emailhelpStr;
                let regEx = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
                let validName = regEx.test(emailInputRef.current.value);
                if (validName == true) {
                  emailSpanRef.current.innerHTML = "";
                  emailSpanRef.current.style.visibility = "hidden";
                } else {
                  emailSpanRef.current.innerHTML = invalidStr;
                  emailSpanRef.current.style.color = invalidStrcol;
                  emailSpanRef.current.style.visibility = "visible";
                }
              }}
            />
            <p ref={emailhelpRef}></p>
            <span ref={emailSpanRef}></span>
          </Form.Group>

          <input
            onClick={() => {
              deleteUser();
            }}
            class="btn btn-outline-warning btn-sm w-100"
            type="button"
            value="Delete"
          />
        </Form>
      </div>
      <h6>(OR)</h6>
      <Link
        class="btn btn-outline-info btn-sm w-100"
        type="button"
        to="/signup"
      >
        Create New Account
      </Link>
      _<br></br>_ _<br></br>_ _
    </div>
  );
}

export default Delete;
