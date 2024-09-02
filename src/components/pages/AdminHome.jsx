import React from "react";
import Sidebar from "../Sidebar";
export const AdminHome = () =>{
    return(
        
        <>
        
        <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '250px', padding: '20px', width: '100%' }}>
        {/* Main content goes here */}
        <h1>Welcome to the Admin Page</h1>
      </div>
    </div>
        </>
    )
}