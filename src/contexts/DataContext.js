import { createContext, useState } from "react";


const DataContext = createContext(null);

export const DataContextProvider = ({ children }) =>{

    const [data, setData] = useState();
    const [filteredData, setFilteredData] = useState();
    const [isAdding, setIsAdding] = useState(false);

    return(
        <DataContext.Provider
        value={{
            data,
            setData,
            filteredData,
            setFilteredData,
            isAdding,
            setIsAdding
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;