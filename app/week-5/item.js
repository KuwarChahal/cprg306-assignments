export default function Item({ name, quantity, category }) {
    return (
        <div>
            <ul className="m-4 border-0 bg-gray-900 w-96">
                <li className="font-bold text-lg"> {name}</li>
                <li className="text-lg"> Buy {quantity} in {category}</li>
            </ul>
        </div>
    );
}
