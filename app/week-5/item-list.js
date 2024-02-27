"use client";
import { useState } from "react";
import React from "react";
import Item from "./item";
import items from "./items.json";

const ItemList = () => {
  const [sortBy, setSortBy] = useState("name");

  const sortItems = (a, b) => {
    return sortBy === "name" ? a.name.localeCompare(b.name) : a.category.localeCompare(b.category);
  };

  const renderSortButton = (label, value) => (
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

  return (
    <div>
      <div>
        <label htmlFor="sort" className="m-2">Sort by: </label>
        {renderSortButton("Name", "name")}
        {renderSortButton("Category", "category")}
      </div>
      <ul>
        {[...items].sort(sortItems).map(item => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;