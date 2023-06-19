import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Chat</span>
      <div className="user">
        <img
          src="https://img.ibxk.com.br/2019/02/17/17124052466014.jpg?ims=328x"
          alt=""
        />
        <span>Pablo</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
