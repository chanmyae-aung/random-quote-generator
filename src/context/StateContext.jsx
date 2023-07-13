import { createContext, useContext, useEffect, useState } from "react";

const StateContext = createContext({
  theme: 'light',
  toggleTheme: () => {
    
  }
});

export const StateContextProvider = ({ children }) => {
  const [quotes, setQuotes] = useState();
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    const response = await fetch("https://type.fit/api/quotes");
    const data = await response.json();
    setQuotes(data);
    setQuote(data[0]);
  };

  console.log(quote);

  const data = { quotes, quote, setQuotes, setQuote};
  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export const StateContextCustom = () => useContext(StateContext);
