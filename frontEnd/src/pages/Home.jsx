import React from "react";
import Sidebar from "../components/SideBar";
import Chat from "../components/Chat";

const Home = () => {
  return (
    <div className="page">
      <div className="home">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
