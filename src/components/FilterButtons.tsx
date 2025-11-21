import React from "react";
import { useFilter, type FilterValue } from "../context/FilterContext";

const FILTERS: FilterValue[] = ["all", "active", "completed"];

export function FilterButtons() {
  const { filter, setFilter } = useFilter();

  return (
    <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
      {FILTERS.map((value) => (
        <button
          key={value}
          onClick={() => setFilter(value)}
            style={{
            padding: "6px 12px",
            borderRadius: "4px",
            border: filter === value ? "2px solid #007bff" : "1px solid #ccc",
            background: filter === value ? "#44323bff" : "#07ba9c",
            color: "#ffffff", // add this for selected
            fontWeight: filter === value ? "bold" : "normal",
            textTransform: "capitalize",
            }}
        >
          {value}
        </button>
      ))}
    </div>
  );
}