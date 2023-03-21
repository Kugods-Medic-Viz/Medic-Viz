import React, { useState } from "react";

function Category() {
  const symptoms = [
    "감기/몸살",
    "눈 질환",
    "남성 질환",
    "만성 질환",
    "소아 진료",
    "소화기 질환",
    "여성 질환",
    "정신 질환",
    "치아",
    "통증",
    "피부 질환",
    "한방의학",
    "기타 질환",
  ];
  const [categories, setCategories] = useState([]);

  const onClickHandler = (selectedItem) => {
    if (categories.includes(selectedItem)) {
      setCategories(categories.filter((category) => category !== selectedItem));
      return;
    }
    setCategories([...categories, selectedItem]);
  };

  console.log(categories);

  return (
    <div>
      <p>태그를 선택해주세요</p>
      <ul>
        {symptoms.map((symptom, idx) => (
          <li
            className={
              categories.find((category) => category === symptom)
                ? "menu-item active"
                : "menu-item"
            }
            onClick={() => onClickHandler(symptom)}
            key={idx}
          >
            {symptom}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Category;
