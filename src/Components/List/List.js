import React, { useState } from "react";
import styles from './List.module.css';

const INITIAL_LIST = [
  { name: "Tomatoes", value: 5.0 },
  { name: "Basil", value: 2.5 },
  { name: "Mozzarella", value: 9.99 },
];

function List() {
  return <ItemValueList />;
}

const ItemValueList = () => {
  const [list, setList] = useState(INITIAL_LIST);
  const [newName, setNewName] = useState("");
  const [newValue, setNewValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setList([...list, { name: newName, value: Number(newValue) }]);
    setNewName("");
    setNewValue("");
  };

  return (
    <div className = {styles.container}>
      <div className = {styles.form}>
        <form onSubmit={onSubmit}>
          <input
            type={"text"}
            value={newName}
            required
            onChange={(e) => setNewName(e.target.value)}
          />
          <input
            type={"number"}
            required
            value={newValue}
            min={0}
            step={0.01}
            onChange={(e) => setNewValue(e.target.value)}
          />
          <input type={"submit"}/>
        </form>
      </div>
      {list.map((item) => {
        return (
          <div className = {styles.list}>
            <div className = {styles.listItem}>{item.name}</div>
            <div className = {styles.listItem}>{"$" + item.value}</div>
            <div
              className = {styles.close}
              onClick={() => setList(list.filter((ele) => ele !== item))}
            >
              ❌
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;