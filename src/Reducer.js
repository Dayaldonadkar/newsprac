const reducer = (state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "GET_STORIES":
      return {
        ...state,
        hits: action.payload.hits,
      };

    case "SEARCH_QUERY":
      return {
        ...state,
        query: action.payload,
      };
  }

  return state;
};

export default reducer;
