import { useState } from "react";

export default function Form({ onAddItem }) {
  const [desc, setDes] = useState("");
  const [num, setNum] = useState(1);

  function handleSubmit(e) {
    e.preventDefault(); //prevent the page to reload

    if (!desc) return;
    const newItem = {
      id: Date.now(),
      description: desc,
      quantity: num,
      packed: false,
    };

    onAddItem(newItem);

    setDes("");
    setNum(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 🥺 trip?</h3>
      <select value={num} onChange={(e) => setNum(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={desc}
        onChange={(e) => setDes(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
