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
      <div className='flex flex-col min-h-screen'>
        <header className='bg-gray-800 text-white p-4'>
          <div className='container mx-auto flex justify-between items-center'>
            <h1 className='text-2xl font-bold'>My E-Book Collection</h1>
            <nav>
              <ul className='flex space-x-4 font-semibold'>
                <li>
                  <Link to="/" className='hover:underline hover:underline-offset-4'>Home</Link>
                </li>
                <li>
                  <Link to="/Create" className='hover:underline hover:underline-offset-4'>Create</Link>
                </li>
                {/* <li>
                  <Link to="/Details">Details</Link>
                </li> */}
              </ul>
            </nav>
          </div>
        </header>
        
        <div className="container mx-auto py-4">
          <Outlet />
        </div>

        <footer className='bg-gray-800 text-white p-4'>
        <div className="container mx-auto text-center">
          &copy; {new Date().getFullYear()} My Blog. All rights reserved.
        </div>
        </footer>
      </div>
    );
  };
  
  export default MainLayout;