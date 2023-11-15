import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reduce";

const AppContext = createContext();

const API = "https://hn.algolia.com/api/v1/search?";

const AppProvider = ({ children }) => {
  const initialState = {
    isLoading: true,
    query: "",
    nbPages: "",
    page: 0,
    hits: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchApiData = async (url) => {
    dispatch({ type: "SET_loading" });
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log("fetched", data.hits);
      dispatch({
        type: "GET_STORIES",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const searchPost = (searchQuery) => {
    dispatch({ type: "SEARCH_QUERY", payload: searchQuery });
    console.log(searchQuery, "searchquery");
  };

  const prevPage = () => {
    dispatch({ type: "PREV_PAGE" });
  };

  const nextPage = () => {
    dispatch({ type: "NEXT_PAGE" });
  };

  useEffect(() => {
    fetchApiData(`${API}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  return (
    <div>
      <AppContext.Provider value={{ ...state, searchPost, prevPage, nextPage }}>
        {children}
      </AppContext.Provider>
    </div>
  );
};

const useGLobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGLobalContext };
