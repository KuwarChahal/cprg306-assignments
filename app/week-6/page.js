"use client";
import Itemlist from "./item-list";
import NewItem from "./new-item";
import React, { useState } from "react";
import itemsData from "./items.json";


export default function Page(){
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };

    return(
        <main>
            <h2 className="text-4xl font-bold flex justify-center">Shopping List</h2>

            <div className="flex justify-between items-start">
                <div className="mt-5 ml-auto mr-10">
                    <NewItem onAddItem={handleAddItem} />
                </div>
                
                <div className="mt-5 mr-auto ml-10">
                    <Itemlist items={items} />
                </div>
            </div>
        </main>
    );
}
