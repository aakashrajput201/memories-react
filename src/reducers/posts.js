export const postsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...state, action.payload];
    case "DELETE":
      return state.filter((item) => item._id !== action.payload);
    case "LIKE":
    case "UPDATE":
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : state
      );
    default:
      return state;
      break;
  }
};
