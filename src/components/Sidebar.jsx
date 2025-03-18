import React from 'react';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  //early return
  if (!isMenuOpen) return null;
  return (
    <div className="col-span-1 shadow-lg px-5 py-2 ">
      <ul>
        <li>Home</li>
        <li>Live</li>
        <li>Shorts</li>
      </ul>
      <ul>
        Subscription
        <li>Music</li>
        <li>Videos</li>
        <li>Subscription</li>
      </ul>
      <ul>
        <li>Home</li>
        <li>Live</li>
        <li>Subscription</li>
      </ul>
    </div>
  );
};

export default Sidebar;
