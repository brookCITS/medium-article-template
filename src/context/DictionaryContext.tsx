import React, { createContext, useContext, useEffect, useState } from "react";
import { Article } from "../types/Content";

interface DictionaryContextProps {
  dictionary: Article | null;
  loading: boolean;
  error: string | null;
}

const DictionaryContext = createContext<DictionaryContextProps>({
  dictionary: null,
  loading: true,
  error: null,
});

export const DictionaryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [dictionary, setDictionary] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  console.log("about to fetch stuff")
  useEffect(() => {
    fetch("/assets/content.json")
      .then((res) => {
        console.log("fetched the content: ");
        console.log(res)
        if (!res.ok) throw new Error("Failed to load dictionary");
        return res.json();
      })
      .then((data: Article) => setDictionary(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <DictionaryContext.Provider value={{ dictionary, loading, error }}>
      {children}
    </DictionaryContext.Provider>
  );
};

export const useDictionary = () => useContext(DictionaryContext);
