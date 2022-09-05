import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  let location = useSelector((state) =>  state.appReducer.location);
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <h2 className="ui basic segment">Movie Ticket Booking Hub</h2>
      </div>
      <div class="right menu">
      <div class="ui item">
      <i class="map marker icon headerIcon"></i>
            <a>{location}</a>
        </div>
        <div class="ui item">
            <a>Login</a>
        </div>
      </div>
    </div>
    
  );
};

export default Header;
