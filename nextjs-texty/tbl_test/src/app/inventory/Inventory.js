import React, { useState, useEffect } from "react";
import { selectAll } from "../api/inven";
import "./Inventory.css";

const Inventory = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await selectAll(); // 데이터베이스에서 아이템 목록 가져오기
        setItems(data || []); // 데이터가 null이면 빈 배열로 대체
      } catch (error) {
        console.error("Failed to fetch items:", error);
        setItems([]); // 오류 발생 시 빈 배열로 설정
      }
    };

    fetchItems();
  }, []); // 의존성 배열이 비어있으므로 컴포넌트가 마운트될 때 한 번만 실행됩니다.

  //   localStorage.setItem("inventory", JSON.stringify(tempItems));
  //   setItems(tempItems);
  // }, []);

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
