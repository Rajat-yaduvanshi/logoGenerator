import React from "react";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 50px 0 20px;
  .prefix {
    color: #fff;
    padding: 5px;
  }

  .postfix {
    color: #000;
    background-color: #fff;
    padding: 5px;
    border-radius: 7px;
  }
`;

const Logo = () => (
  <LogoContainer>
    <h1>
      <span className="prefix">Logo</span>
      <span className="postfix">Generator</span>
    </h1>
  </LogoContainer>
);

export default Logo;
