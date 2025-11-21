// src/FilterContext.tsx
import React, { createContext, useContext, useState } from "react";

// 1. Allowed filter values
export type FilterValue = "all" | "active" | "completed";

// 2. Shape of the context
type FilterContextType = {
  filter: FilterValue;
  setFilter: (value: FilterValue) => void;
};

// 3. Create the context
export const FilterContext = createContext<FilterContextType | undefined>(
  undefined
);

// 4. Provider props
interface FilterProviderProps {
  children: React.ReactNode;
}

// 5. Provider component
export function FilterProvider({ children }: FilterProviderProps) {
  const [filter, setFilter] = useState<FilterValue>("all");

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
}

// 6. Convenience hook
export function useFilter() {
  const ctx = useContext(FilterContext);
  if (!ctx) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return ctx;
}