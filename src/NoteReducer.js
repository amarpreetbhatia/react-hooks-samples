const notesReducer = (state, action) => {
  switch (action.type) {
    case "POPULATE_NOTES":
      return [...state];
    case "ADD_NOTES":
      return [
        ...state,
        {
          title: action.title,
          body: action.body
        }
      ];
    case "REMOVE_NOTES":
      return state.filter(n => n.title !== action.title);
    default:
      return state;
  }
};

export { notesReducer };
