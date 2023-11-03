import { createContext, useContext, useEffect, useReducer } from "react";
import { Reducer } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const API = "https://hn.algolia.com/api/v1/search?";

  const initialState = {
    query: "css",
    nbPages: 0,
    page: 0,
    hits: [],
    isLoading: true,
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log("fetched", data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiData(`${API}query=${state.query}`);
  }, []);
  return <AppContext.Provider value={"dayal"}>{children}</AppContext.Provider>;
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
