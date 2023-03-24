import styled from "styled-components";

export const CategoryTitle = styled.p`
  color: ${(props) => props.theme.subColor};
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  padding-bottom: 5px;
`;
export const CategoryWrap = styled.ul`
  display: flex;
  flex-flow: row wrap;
`;

export const CategoryList = styled.li`
  list-style: none;
  box-sizing: border-box;
  background: ${(props) =>
    props.activeState === "menu-item active" ? "#005DEA" : "#FFFFFF"};
  border: 2px solid ${(props) => props.theme.subColor};
  border-radius: 50px;
  width: 94px;
  height: 32px;
  margin: 10px 10px 10px 0;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -0.05em;
  color: ${(props) =>
    props.activeState === "menu-item active" ? "#FFFFFF" : "#000000"};
  display: flex;
  align-items: center;
  justify-content: center;
`;
