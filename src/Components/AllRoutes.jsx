import React from "react";
import { Route,Routes } from "react-router-dom";
import ContactForm from "./ContactForm";
import Dashboard from "./Dashboard";
import ContactList from "./ContactList";

const AllRoutes =()=>{

 return(
    <Routes>
    <Route path="/" element={<Dashboard/>} />
    <Route path="/contacts" element={<ContactList/>} />

  </Routes>
 )
}

export default AllRoutes