import React, { useState, useEffect } from "react";
import "./Inventory.css";

const Inventory = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  useEffect(() => {
    const updateInventory = () => {
      const storedItems =
        JSON.parse(localStorage.getItem("inventory")) || [];
      setItems(storedItems);
    };

    // 이벤트 리스너 등록
    window.addEventListener("inventoryUpdate", updateInventory);

    // 초기 인벤토리 업데이트
    updateInventory();

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener("inventoryUpdate", updateInventory);
    };
  }, []);
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseDetail = () => {
    setSelectedItem(null);
  };

  return (
    <main className="inventory">
      <h2 className="title">인벤토리</h2>
      <div className="item_box">
        {items.length > 0 && (
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
        )}
        {selectedItem && (
          <section className="item_texts">
            <>
              <div className="item_text">
                <p>{selectedItem.description}</p>
              </div>
              <button className="cancel" onClick={handleCloseDetail}>
                x
              </button>
            </>
          </section>
        )}
      </div>
    </main>
  );
};

export default Inventory;
