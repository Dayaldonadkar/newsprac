const reducer = (state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "GET_STORIES":
      return {
        ...state,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };

    case "SEARCH_QUERY":
      return {
        ...state,
        query: action.payload,
      };

    case "PREV_PAGE": {
      return {
        ...state,
        page: state.page < 1 ? 49 : state.page - 1,
      };
    }
    case "NEXT_PAGE": {
      return {
        ...state,
        page: state.page > 48 ? 0 : state.page + 1,
      };
    }
  }

  return state;
};

export default reducer;
