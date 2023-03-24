import React, { useState } from "react";
import * as S from "../styles/Record/CategoryStyle";

function Category(props) {
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
    props.getCategories(categories);
  };

  console.log(categories);

  return (
    <div>
      <S.CategoryTitle>카테고리를 선택해주세요</S.CategoryTitle>
      <S.CategoryWrap>
        {symptoms.map((symptom, idx) => (
          <S.CategoryList
            activeState={
              categories.find((category) => category === symptom)
                ? "menu-item active"
                : "menu-item"
            }
            onClick={() => onClickHandler(symptom)}
            key={idx}
          >
            {symptom}
          </S.CategoryList>
        ))}
      </S.CategoryWrap>
    </div>
  );
}
export default Category;
