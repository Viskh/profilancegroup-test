import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";

const Home = () => {
  const authorized = useSelector((state) => state.usersReducer.authorized);

  return (
    <>
      <Header />
      <div className="home">
        {authorized ? `Привет, ${authorized}` : "Привет, Гость!"}
      </div>
    </>
  );
};

export default Home;
