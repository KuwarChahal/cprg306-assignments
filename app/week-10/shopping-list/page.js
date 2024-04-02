"use client";
import React, { useState, useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service";

// export default function Page() {
//     const [items, setItems] = useState(itemsData);
//     const [selectedItemName, setSelectedItemName] = useState("");

//     const handleItemSelect = (item) => {
//         const cleanedItemName = item.name.split(',')[0].trim().replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]|\uD83D[\uDE80-\uDEFF]|�[�-�])/g, '');
//         setSelectedItemName(cleanedItemName);
//     };

//     return (
//         <main className="flex">
//             <div className="ml-10 mr-10">
//                 <NewItem onAddItem={(newItem) => setItems((prevItems) => [...prevItems, newItem])} />
//                 <ItemList items={items} onItemSelect={handleItemSelect} />
//             </div>
//             <div>
//                 <MealIdeas ingredient={selectedItemName} />
//             </div>
//         </main>
//     ); 
// }


const Page = () => {
    const { user } = useUserAuth();
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState(null);
  
    useEffect(() => {
      if (user) {
        loadItems();
      }
    }, [user]);
  
    const loadItems = async () => {
      try {
        const userItems = await getItems(user.uid);
        setItems(userItems);
      } catch (error) {
        console.error("Error loading items:", error);
      }
    };
  
    const handleAddItem = async (newItem) => {
      try {
        const newItemId = await addItem(user.uid, newItem);
        if (newItemId) {
          setItems((prevItems) => [...prevItems, { id: newItemId, ...newItem }]);
        }
      } catch (error) {
        console.error("Error adding item:", error);
      }
    };
  
    const handleItemSelect = (itemName) => {
      if (typeof itemName === "string") {
        const cleanedItemName = itemName.replace(
          /,.*|[\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�]|\p{Emoji}/gu,
          ""
        ).trim();
        setSelectedItemName(cleanedItemName);
      } else {
        console.error("Invalid itemName:", itemName);
      }
    };
  
    if (!user) {
      return (
        <div>
          <p>Please log in to view the shopping list.</p>
        </div>
      );
    }
  
    return (
      <main className="bg-slate-950">
        <h1 className="text-3xl font-bold m-2">Shopping List</h1>
        <div className="flex">
          <div className="flex-1 max-w-sm m-2">
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
          <div className="flex-1 max-w-sm m-2 p-3">
            <h3 className="text-xl font-bold">Meal Ideas</h3>
            <MealIdeas ingredient={selectedItemName} />
          </div>
        </div>
      </main>
    );
  };
  
  export default Page;
