"use client";

import { useState } from "react";

const NewItem = () => {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");


    const handleSubmit = (event) => {
        event.preventDefault();

        const Item ={
            name,
            quantity,
            category,
        };

        console.log(Item)

        alert("added item ".concat(name,", Quantity:").concat(quantity,", Category:").concat(category))

        
        setName("");
        setQuantity(1);
        setCategory("Produce");

    };


        return (
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" value={name} onChange={({target}) => setName(target.value)} required />
                
                <label>Quantity:</label>
                <input type="number" min="1" max="99" value={quantity} onChange={({target}) => setQuantity(parseInt(target.value))} required />
                
                <label>Category:</label>
                <select value={category} onChange={({target}) => setCategory(target.value)}>
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen-foods">Frozen Foods</option>
                    <option value="canned-goods">Canned Goods</option>
                    <option value="dry-goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
                
                <button type="submit"
                class="w-full mt-4 py-2 px-4
                bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 
                focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">+</button>
            </form>
        );
};

export default NewItem;