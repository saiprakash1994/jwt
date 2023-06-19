import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const TopNavigation = () => {
  let navigate = useNavigate();
  let storeObj = useSelector((store) => {
    return store;
  });

  useEffect(() => {
    console.log(storeObj);
    if (storeObj.loginDetails.isLoggedIn == true) {
      console.log("user can stay");
    } else {
      console.log("user is unauthorised");
      navigate("/");
    }
  }, []);

  return (
    <nav>
      <NavLink
        style={(obj) => {
          if (obj.isActive == true) {
            return { backgroundColor: "red", color: "white" };
          } else {
          }
        }}
        to="/dash"
      >
        DashBoard
      </NavLink>
      <NavLink
        style={(obj) => {
          if (obj.isActive == true) {
            return { backgroundColor: "red", color: "white" };
          } else {
          }
        }}
        to="/dsu"
      >
        Daily Status Update
      </NavLink>
      <NavLink
        style={(obj) => {
          if (obj.isActive == true) {
            return { backgroundColor: "red", color: "white" };
          } else {
          }
        }}
        to="/task"
      >
        Tasks
      </NavLink>
      <NavLink
        style={(obj) => {
          if (obj.isActive == true) {
            return { backgroundColor: "red", color: "white" };
          } else {
          }
        }}
        to="/leave"
      >
        Leaves
      </NavLink>
      <NavLink
        style={(obj) => {
          if (obj.isActive == true) {
            return { backgroundColor: "red", color: "white" };
          } else {
          }
        }}
        to="/message"
      >
        Messages
      </NavLink>
    </nav>
  );
};

export default TopNavigation;
