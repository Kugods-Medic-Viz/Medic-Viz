import styled from "styled-components";

export const Nav = styled.nav`
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0px 20px;
  background: ${(props) =>
    props.navColor === "nav sky" ? "#DEEBFF" : "##FEFEFE"};
`;

export const MenuBtn = styled.div`
  width: 24px;
  height: 24px;
  background: url("img/Nav/menuBtn.png");
  background-size: cover;
  border: none;
  margin-right: 60px;
`;

export const MenuIcon = styled.div`
  width: 25px;
  height: 32px;
  background: url("img/Nav/Logo.png");
  background-size: cover;
  border: none;
  margin
`;

export const StartBtn = styled.button`
  width: 94px;
  height: 35px;
  background: url("img/Nav/StartBtn.png");
  background-size: cover;
  border: none;
  ${"" /* margin-right: 20px; */}
  ${"" /* margin-left: 120px; */}
`;

export const LoggedinBtn = styled.button`
  width: 94px;
  height: 35px;
  background: url("img/Nav/KimGoogle.png");
  background-size: cover;
  border: none;
  ${"" /* margin-right: 10px; */}
  ${"" /* margin-left: 130px; */}
`;
