const stateDefault = {
  mangSv: [
    // {
    //   maSv: "1",
    //   fullName: "Nguyen Phuoc Nguyen",
    //   phone: "123123",
    //   email: "n@gmail.com",
    // },
  ],
  selectedUser: null,
  // findUser: 0,
};

export const BTFormReducer = (state = stateDefault, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_USER": {
      const data = [...state.mangSv];
      const user = { ...action.payload, id: Date.now() };
      data.push(user);
      // state.mangSv = action.payload;
      return { ...state, mangSv: data };
    }
    case "DELETE_USER": {
      const data = state.mangSv.filter((item) => item.id !== action.payload);
      return { ...state, mangSv: data };
    }
    case "EDIT_USER": {
      const user = state.mangSv.find((item) => item.id === action.payload);
      return { ...state, selectedUser: user };
    }
    case "UPDATE_USER": {
      console.log(action.payload.id);
      const userList = state.mangSv.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
      state.selectedUser = null;
      return { ...state, mangSv: userList };
    }
    case "SEARCH_USER": {
      const user = state.mangSv.filter((item) => item.maSv === action.payload);

      if (user.length === 0) {
        return { ...state };
      } else {
        return { ...state, mangSv: user };
      }
    }

    default: {
      return { ...state };
    }
  }
};
