import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
function SignUp() {
  let nameInputRef = useRef();
  let ageInputRef = useRef();
  let imageInputRef = useRef();
  let emailInputRef = useRef();
  let mobileInputRef = useRef();
  let passwordInputRef = useRef();
  let genderInputRef = useRef();
  let martialStatusInputRef = useRef();

  let invalidStr = "* Invalid Data";
  let invalidStrcol = "red";

  let nameSpanRef = useRef();
  let namehelpRef = useRef();
  let namehelpStr = "Enter letters between 2 to 30 characters ";
  let ageSpanRef = useRef();
  let agehelpRef = useRef();
  let agehelpStr = "Enter age between 18 to 99 ";
  let emailSpanRef = useRef();
  let emailhelpRef = useRef();
  let emailhelpStr = "You can use letters, numbers and full stops";
  let mobileSpanRef = useRef();
  let mobilehelpRef = useRef();
  let mobilehelpStr = "Phone number must be 10 digits.";
  let passwordSpanRef = useRef();
  let passwordhelpRef = useRef();
  let passwordhelpStr =
    "Min 8 char,one upper,lower case,one number:";
  let genderSpanRef = useRef();
  let genderhelpRef = useRef();
  let genderhelpStr =
    "Enter your gender";
  let msSpanRef = useRef();
  let mshelpRef = useRef();
  let mshelpStr =
    "Enter your Marital status ";
  
   
    
  const [file, setFile] = useState();
  let handleChange = (e) => {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  };
  let signup = async () => {
    let dataToSend = new FormData();
    dataToSend.append("name",nameInputRef.current.value);
    dataToSend.append("age",ageInputRef.current.value);
    dataToSend.append("email",emailInputRef.current.value);
    dataToSend.append("mobile",mobileInputRef.current.value);
    dataToSend.append("password",passwordInputRef.current.value);
    dataToSend.append("gender",genderInputRef.current.value);
    dataToSend.append("ms",msSpanRef.current.value);
    dataToSend.append("profilepic",imageInputRef.current.files[0]);

    console.log(dataToSend);
    let reqOptions = {
      method: "POST",
      body: dataToSend,
    };
    let JSONData = await fetch("http://localhost:2233/signup", reqOptions);
    let JSOData = await JSONData.json();
    console.log(JSOData);
    alert(JSOData);
    if(JSOData="user created"){
    //window.location.reload();
    }
  };
  return (
    <div className=".App">
      <div>
        <img className="logo" src=".\images\logo-big.png"></img>
        <Form>
          <h3 className="heading">Sign Up</h3>
          <Form.Group className="mb-1" controlId="formBasicName">
            <Form.Control
              ref={nameInputRef}
              type="text"
              placeholder="Enter name"
              onBlur={() => {
                namehelpRef.current.style.visibility = "hidden";
              }}
              onFocus={() => {
                namehelpRef.current.style.visibility = "visible";
                namehelpRef.current.innerHTML = namehelpStr;
                namehelpRef.current.style.color = "white";


              }}
              onChange={() => {
                let regEx = /^[a-zA-Z ]{2,30}$/;
                let validName = regEx.test(nameInputRef.current.value);
                if(1){
                  namehelpRef.current.style.visibility = "visible";

                }

                if (validName == true) {
                  nameSpanRef.current.innerHTML = "";
                  nameSpanRef.current.style.visibility = "hidden";
                } else {
                  nameSpanRef.current.innerHTML = invalidStr;
                  nameSpanRef.current.style.color = invalidStrcol;
                  nameSpanRef.current.style.visibility = "visible";
                }
              }}
            />
            <p ref={namehelpRef}></p>
            <span ref={nameSpanRef}></span>
          </Form.Group>
          <Form.Group className="mb-1" controlId="formBasicAge">
            <Form.Control
              ref={ageInputRef}
              type="number"
              placeholder="Enter age"
              onBlur={() => {
                agehelpRef.current.style.visibility = "hidden";
              }}
              onFocus={() => {
                agehelpRef.current.style.visibility = "visible";
                agehelpRef.current.innerHTML = agehelpStr;
                agehelpRef.current.style.color = "white";


              }}
              onChange={() => {
                let regEx = /^(1[89]|[2-9][0-9])$/;
                let validName = regEx.test(ageInputRef.current.value);
                if (validName == true) {
                  ageSpanRef.current.innerHTML = "";
                  ageSpanRef.current.style.visibility = "hidden";
                } else {
                  ageSpanRef.current.innerHTML = invalidStr;
                  ageSpanRef.current.style.color = invalidStrcol;
                  ageSpanRef.current.style.visibility = "visible";
                }
              }}
            />
            <p ref={agehelpRef}></p>
            <span ref={ageSpanRef}></span>
          </Form.Group>
          <Form.Group className="mb-1" controlId="formBasicGender">
            <Form.Control
              ref={genderInputRef}
              type="text"
              placeholder="Enter Gender"
              onBlur={() => {
                genderhelpRef.current.style.visibility = "hidden";
              }}
              onFocus={() => {
                genderhelpRef.current.style.visibility = "visible";
                genderhelpRef.current.innerHTML = genderhelpStr;
                genderhelpRef.current.style.color = "white";


              }}
              onChange={() => {
                let regEx = /^[a-zA-Z ]{2,8}$/;
                let validGender = regEx.test(genderInputRef.current.value);
                if(1){
                  genderhelpRef.current.style.visibility = "visible";

                }

                if (validGender == true) {
                  genderSpanRef.current.innerHTML = "";
                  genderSpanRef.current.style.visibility = "hidden";
                } else {
                  genderSpanRef.current.innerHTML = invalidStr;
                genderSpanRef.current.style.color = invalidStrcol;
                  genderSpanRef.current.style.visibility = "visible";
                }
              }}
            />
            <p ref={genderhelpRef}></p>
            <span ref={genderSpanRef}></span>
          </Form.Group>
          <Form.Group className="mb-1" controlId="formBasicMS">
            <Form.Control
              ref={martialStatusInputRef}
              type="text"
              placeholder="Marital Status"
              onBlur={() => {
                mshelpRef.current.style.visibility = "hidden";
              }}
              onFocus={() => {
                mshelpRef.current.style.visibility = "visible";
                mshelpRef.current.innerHTML = mshelpStr;
                mshelpRef.current.style.color = "white";


              }}
              onChange={() => {
                let regEx = /^[a-zA-Z ]{2,10}$/;
                let validMS = regEx.test(martialStatusInputRef.current.value);
                if(1){
                  mshelpRef.current.style.visibility = "visible";

                }

                if (validMS == true) {
                  msSpanRef.current.innerHTML = "";
                  msSpanRef.current.style.visibility = "hidden";
                } else {
                  msSpanRef.current.innerHTML = invalidStr;
                msSpanRef.current.style.color = invalidStrcol;
                  msSpanRef.current.style.visibility = "visible";
                }
              }}
            />
            <p ref={mshelpRef}></p>
            <span ref={msSpanRef}></span>
          </Form.Group>
          <Form.Group className="mb-1" controlId="formBasicEmail">
            <Form.Control
              ref={emailInputRef}
              type="email"
              placeholder="Enter email"
              onBlur={() => {
                emailhelpRef.current.style.visibility = "hidden";
              }}
              onFocus={() => {
                emailhelpRef.current.style.visibility = "visible";
                emailhelpRef.current.innerHTML = emailhelpStr;
                emailhelpRef.current.style.color = "white";

              }}
              onChange={() => {
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

          <Form.Group className="mb-1" controlId="formBasicMobile">
            <Form.Control
              ref={mobileInputRef}
              type="text"
              placeholder="Enter Mobile number"
              onBlur={() => {
                mobilehelpRef.current.style.visibility = "hidden";
              }}
              onFocus={() => {
                mobilehelpRef.current.style.visibility = "visible";
                mobilehelpRef.current.innerHTML = mobilehelpStr;
                mobilehelpRef.current.style.color = "white";

              }}
              onChange={() => {
                let regEx =
                  /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
                let validName = regEx.test(mobileInputRef.current.value);
                if (validName == true) {
                  mobileSpanRef.current.innerHTML = "";
                  mobileSpanRef.current.style.visibility = "hidden";
                } else {
                  mobileSpanRef.current.innerHTML = invalidStr;
                  mobileSpanRef.current.style.color = invalidStrcol;
                  mobileSpanRef.current.style.visibility = "visible";
                }
              }}
            />
            <p ref={mobilehelpRef}></p>
            <span ref={mobileSpanRef}></span>
          </Form.Group>

          <Form.Group className="mb-1" controlId="formBasicPassword">
            <Form.Control
              ref={passwordInputRef}
              type="password"
              placeholder="Password"
              onBlur={() => {
                passwordhelpRef.current.style.visibility = "hidden";
              }}
              onFocus={() => {
                passwordhelpRef.current.style.visibility = "visible";
                passwordhelpRef.current.innerHTML = passwordhelpStr;
                passwordhelpRef.current.style.color = "white";

              }}
              onChange={() => {
                let regEx =
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
                let validName = regEx.test(passwordInputRef.current.value);
                if (validName == true) {
                  passwordSpanRef.current.innerHTML = "";
                  passwordSpanRef.current.style.visibility = "hidden";
                } else {
                  passwordSpanRef.current.innerHTML = invalidStr;
                  passwordSpanRef.current.style.color = invalidStrcol;
                  passwordSpanRef.current.style.visibility = "visible";
                }
              }}
            />
            <p ref={passwordhelpRef}></p>
            <span ref={passwordSpanRef}></span>
          </Form.Group>
          <Form.Group
            id="img-preview"
            className="mb-1"
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
              signup();
            }}
            class="btn btn-outline-info w-100  btn-sm mb-2"
            type="button"
            value="Sign Up"
          />
        </Form>
        <h6>(OR)</h6>
        <Link class="btn btn-outline-primary btn-sm mb-2 w-100" to="/">
          Login{" "}
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
