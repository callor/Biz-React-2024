import React, { useState, useEffect } from "react";
import "./Inventory.css";

const Inventory = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const storedItems =
      JSON.parse(localStorage.getItem("inventory")) || [];
    setItems(storedItems);
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseDetail = () => {
    setSelectedItem(null);
  };

  // "종이"와 "라이터" 아이템을 임시로 추가
  useEffect(() => {
    const tempItems = [
      {
        name: "종이",
        description: "010-9462-5221 이라고 적혀있다.",
      },
      {
        name: "라이터",
        description: "불을 피우는데 사용된다.",
      },
    ];
    localStorage.setItem("inventory", JSON.stringify(tempItems));
    setItems(tempItems);
  }, []);

  return (
    <main className="inventory">
      <h2 className="title">인벤토리</h2>
      <div className="item_box">
        <ul className="items">
          {items.map((item, index) => (
            <li
              className="item"
              key={index}
              onClick={() => handleItemClick(item)}
            >
              {item.name}
            </li>
          ))}
        </ul>
        <section className="item_texts">
          {selectedItem && (
            <>
              <div className="item_text">
                {/* <h3>{selectedItem.name}</h3> */}
                <p>{selectedItem.description}</p>
              </div>
              <div>
                <button
                  className="cancel"
                  onClick={handleCloseDetail}
                >
                  x
                </button>
              </div>
            </>
          )}
        </section>
      </div>
    </main>
  );
};

export default Inventory;
