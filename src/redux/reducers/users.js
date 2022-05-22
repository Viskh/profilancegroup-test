const initialState = {
  users: [
    {
      id: 1,
      login: "mark",
      password: "junior",
      role: "user",
    },
    {
      id: 2,
      login: "admin",
      password: "senior",
      role: "admin",
    },
  ],
  authorized: localStorage.getItem("authorized"),
  error: '',
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN__FULFILLED":
      return {
        ...state,
        error: '',
        authorized: action.payload
      };

    case "LOGIN__REJECTED":
      return {
        ...state,
        error: "Неверный логин или пароль!",
      };

    case "LOGOUT": 
    return {
      ...state,
      authorized: null
    }

    default:
      return state;
  }
};
