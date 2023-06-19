import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Pesquise aqui" />
      </div>
      <div className="userChat">
        <img
          src="https://img.ibxk.com.br/2019/02/17/17124052466014.jpg?ims=328x"
          alt=""
        />
        <div className="userChatInfo">
          <span>Pablo</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
