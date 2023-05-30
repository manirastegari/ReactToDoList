import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";
import "./db";
import ToDo from "./ToDo";


function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    const newToDo = new ToDo({
      text: inputText,
    });
    newToDo.save(function (err) {
      if (err) {
        console.error(err);
      } else {
        console.log("Item saved to the database");
        setItems((prevItems) => [...prevItems, inputText]);
      }
    });
    // setItems((prevItems) => {
    //   return [...prevItems, inputText];
    // });
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
