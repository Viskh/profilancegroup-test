import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import AddNews from "./AddNews";
import logo from "../assets/profilance.svg";
import Login from "./Login";

const Header = () => {
  const dispatch = useDispatch();

  const { users, authorized } = useSelector((state) => state.usersReducer);

  const user = users.find((item) => item.login === authorized);

  const [openModalLogin, setOpenModalLogin] = useState(false);
  const [openModalAddNews, setOpenModalAddNews] = useState(false);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.clear();
  };

  return (
    <>
      <header className="header">
        <div className="header__logo">
          <NavLink to={"/"}>
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        
        <ul className="header__list-items">
          <li className="header__item"></li>
          <li className="header__item">
            <NavLink to={"/news"}>Новости</NavLink>
          </li>

          {authorized ? (
            <li onClick={handleLogout} className="header__item">
              Выход
            </li>
          ) : (
            <li
              onClick={() => setOpenModalLogin(true)}
              className="header__item"
            >
              Вход
            </li>
          )}

          {authorized && user.role === "user" && (
            <li
              onClick={() => setOpenModalAddNews(true)}
              className="header__item add-news"
            >
              Добавить новость
            </li>

          )}
        </ul>
      </header>

      {openModalLogin && <Login setOpenModalLogin={setOpenModalLogin} />}
      {openModalAddNews && (
        <AddNews setOpenModalAddNews={setOpenModalAddNews} />
      )}

    </>
  );
};

export default Header;
