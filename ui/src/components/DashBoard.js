import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import TopNavigation from "./TopNavigation";
import { useSelector } from "react-redux";
function DashBoard() {
  let location = useLocation();
  console.log(location);
 let storeObj = useSelector((store)=>
  {return store}
)

  return (
    <div className="App1">
           <TopNavigation></TopNavigation>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Collapse className="justify-content-start">
            <Navbar.Text>
              <h1>Welcome to {storeObj.loginDetails.name}</h1>
            </Navbar.Text>
          </Navbar.Collapse>
          <Navbar.Toggle />

          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Link class="btn btn-success " type="button" to="/">
                Signout{" "}
              </Link>
             </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar> 

      <img src={"http://localhost:2233/" + storeObj.loginDetails.profilepic}></img> 
    </div>
  );
}

export default DashBoard;
