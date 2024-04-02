"use client";
import React, { useState } from "react";
import Item from "./item";

const ItemList = ({ items, onItemSelect }) => {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const renderSortButton = (label, value) => {
    return (
      <button
        key={value}
        onClick={() => setSortBy(value)}
        style={{
          backgroundColor: sortBy === value ? "#dddddd" : "#333333",
          color: sortBy === value ? "#333333" : "#dddddd",
          transform: sortBy === value ? "scale(1.1)" : "scale(1)",
          transition: "transform 0.3s ease"
        }}
        className="bg-orange-700 p-1 m-2 w-28"
      >
        {label}
      </button>
    );
  };

  return (
    <div>
      <div>
        <label htmlFor="sort" className="m-2">Sort by: </label>
        {renderSortButton("Name", "name")}
        {renderSortButton("Category", "category")}
      </div>
      <ul>
        {sortedItems.map((item) => (
          <Item 
            key={item.id} 
            {...item} 
            onSelect={() => onItemSelect(item)}
          />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
