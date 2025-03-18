import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <div className="grid grid-flow-col grid-cols-5">
      <Sidebar></Sidebar>
      <Outlet />
    </div>
  );
};

export default Body;
