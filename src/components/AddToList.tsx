import React, { useState } from "react";
import { IState as Props } from "../App";

interface Iprops {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

const AddToList: React.FC<Iprops> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    url: "",
    note: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleClick = (): void => {
    if (!input.name || !input.age || !input.url) {
      return;
    } else {
      setPeople([...people, { name: input.name, age: parseInt(input.age), url: input.url, note: input.note }]);
      setInput({
        name: "",
        age: "",
        url: "",
        note: "",
      });
    }
  };

  return (
    <div className="AddToList">
      <input type="text" name="name" id="name" value={input.name} onChange={handleChange} placeholder="Name" className="AddToList-input" />
      <input type="number" name="age" id="age" value={input.age} onChange={handleChange} placeholder="Age" className="AddToList-input" />
      <input type="text" name="url" id="url" value={input.url} onChange={handleChange} placeholder="Image URL" className="AddToList-input" />
      <textarea name="note" id="note" value={input.note} onChange={handleChange} placeholder="Note" className="AddToList-input" />
      <button className="AddToList-btn" onClick={handleClick}>
        Add to list
      </button>
    </div>
  );
};

export default AddToList;
