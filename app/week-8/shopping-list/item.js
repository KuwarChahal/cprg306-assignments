import React from "react";

export default function Item({ name, quantity, category, onSelect }) {
    return (
        <div onClick={onSelect} style={{ cursor: "pointer" }}>
            <ul className="m-4 border-0 bg-gray-900 w-96  hover:bg-orange-700">
                <li className="font-bold text-lg"> {name}</li>
                <li className="text-lg"> Buy {quantity} in {category}</li>
            </ul>
        </div>
    );
}
