import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Login = ({ setOpenModalLogin }) => {

  const dispatch = useDispatch();

  const { users, error, authorized } = useSelector(
    (state) => state.usersReducer
  );

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const authorizedUser = users.find(
      (user) => user.login === login && user.password === password
    );

    if (authorizedUser) {
      localStorage.setItem("authorized", login);
      dispatch({ type: "LOGIN__FULFILLED", payload: login });
    }

    if (!authorizedUser) {
      dispatch({ type: "LOGIN__REJECTED" });
    }

    setLogin("");
    setPassword("");
  };

  useEffect(() => {
    if (authorized) {
      setOpenModalLogin(false);
    }
  }, [authorized, setOpenModalLogin]);

  return (
    <div className="modal-window" onClick={() => setOpenModalLogin(false)}>
      <div
        className="modal-window__container"
        onClick={(e) => e.stopPropagation()}
      >
        {error && <p>{error}</p>}
        <div className="modal-window__login-form">
          <input
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            type="text"
            placeholder="login"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
          />
          <button onClick={handleLogin}>Вход</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
