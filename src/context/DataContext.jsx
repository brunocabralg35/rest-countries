/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import api from '../assets/data.json'

const DataContext = createContext();

export function DataProvider({ children }) {

  const [data, setData] = useState(api);

  return (
    <DataContext.Provider
      value={{ data, setData }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
