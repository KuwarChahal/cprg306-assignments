"use client";
import React, { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleItemSelect = (item) => {
        const cleanedItemName = item.name.split(',')[0].trim().replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]|\uD83D[\uDE80-\uDEFF]|�[�-�])/g, '');
        setSelectedItemName(cleanedItemName);
    };

    return (
        <main className="flex">
            <div className="mr-10">
                <NewItem onAddItem={(newItem) => setItems((prevItems) => [...prevItems, newItem])} />
                <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>
            <div>
                <MealIdeas ingredient={selectedItemName} />
            </div>
        </main>
    ); 
}
