import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DataRow {
  [key: string]: string | number;
}

interface DataContextType {
  data: DataRow[];
  columns: string[];
  setData: (data: DataRow[], columns: string[]) => void;
  clearData: () => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [data, setDataState] = useState<DataRow[]>([]);
  const [columns, setColumns] = useState<string[]>([]);

  const setData = (newData: DataRow[], newColumns: string[]) => {
    setDataState(newData);
    setColumns(newColumns);
  };

  const clearData = () => {
    setDataState([]);
    setColumns([]);
  };

  return (
    <DataContext.Provider value={{ data, columns, setData, clearData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
