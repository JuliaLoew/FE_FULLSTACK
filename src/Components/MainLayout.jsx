import {
    createBrowserRouter,
    createRoutesFromElements,
    Link,
    Navigate,
    Outlet,
    Route,
    RouterProvider,
  } from 'react-router-dom';
import React from 'react';
import { useState, useEffect } from "react";

const MainLayout = () => {
    return (
      <>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Create">Create</Link>
          </li>
          {/* <li>
            <Link to="/Details">Details</Link>
          </li> */}
        </ul>
        <div className="container mx-auto">
          <Outlet />
        </div>
      </>
    );
  };
  
  export default MainLayout;