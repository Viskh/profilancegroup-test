const initialState = {
  users: [
    {
      id: 1,
      login: "Mark",
      password: "junior",
      role: "user",
    },
    {
      id: 2,
      login: "Admin",
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
