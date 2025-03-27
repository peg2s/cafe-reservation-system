import styled from "@emotion/styled";
import {NavLink} from "react-router-dom";

export const Topnav = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  margin: 0 3rem;
  justify-content: flex-start;
`

export const TopnavLink = styled(NavLink)`
  float: left;
  color: #ffffff;
  text-align: center;
  padding: 14px 16px;
  margin: 5px;
  text-decoration: none;
  font-size: 18px;
  font-weight: 600;


  &:hover {
    background-color: #57c1ec;
    transition-duration: 0.5s;
    color: #ffffff;
    font-weight: 600;
  }

  &.active {
    background-color: #57c1ec;
    color: #ffffff;
    font-weight: 600;
  }
`