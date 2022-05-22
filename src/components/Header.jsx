import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/profilance.svg";
import Login from "./Login";

const Header = () => {
  const dispatch = useDispatch()

  const {authorized} = useSelector((state) => state.usersReducer);

  const [openModal, setOpenModal] = useState(false);
  

  const handleLogout = () => {
    dispatch({type: "LOGOUT"})
    localStorage.clear();
  };

  return (
    <>
      <header className="header">
        <ul className="header__list-items">
          <li className="header__item">
            <Link to={"/"}>
              <img src={logo} alt="logo" className="header__logo" />
            </Link>
          </li>
          <li className="header__item">
            <NavLink to={"/news"}>Новости</NavLink>
          </li>

          {authorized ? (
            <li onClick={handleLogout} className="header__item">
              Выход
            </li>
          ) : (
            <li onClick={() => setOpenModal(true)} className="header__item">
              Вход
            </li>
          )}
        </ul>
      </header>
      {openModal && <Login setOpenModal={setOpenModal} />}
    </>
  );
};

export default Header;
