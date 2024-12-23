import React from "react";
import { observer } from "mobx-react-lite";
import styled from "styled-components";
import Input from "./Input";

const LogoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 50px;
  .Logo-controller-color > div {
    padding: 8px 0;
  }
  .Logo-controller-misc > div {
    padding: 8px 0;
  }
`;

const LogoController = ({ data, handleStoreChange }) => {
  return (
    <LogoContainer>
      <div className="Logo-controller-color">
        <div>
          Prefix Text Color: &nbsp;{" "}
          <Input
            type="color"
            dataType="prefixColor"
            value={data.prefixColor}
            onChange={handleStoreChange}
          />
        </div>
        <div>
          Suffix Text Color: &nbsp;{" "}
          <Input
            type="color"
            dataType="suffixColor"
            value={data.suffixColor}
            onChange={handleStoreChange}
          />
        </div>
        <div>
          Suffix Background Color: &nbsp;{" "}
          <Input
            type="color"
            dataType="postfixBgColor"
            value={data.postfixBgColor}
            onChange={handleStoreChange}
          />
        </div>
        <div>
          Transparent Background: &nbsp;
          <Input
            type="checkbox"
            dataType="transparentBg"
            value={data.transparentBg}
            onChange={handleStoreChange}
          />
        </div>
      </div>
      <div className="Logo-controller-misc">
        <div>
          Font Size: &nbsp;
          <Input
            type="range"
            dataType="fontSize"
            onChange={handleStoreChange}
            value={data.fontSize}
            min="30"
            max="100"
            name="fontsize"
          />
          &nbsp;
          <span style={{ color: "#fff" }}>{data.fontSize}px</span>
        </div>
        <div>
          Reverse Highlight: &nbsp;{" "}
          <Input
            type="checkbox"
            dataType="reverseHighlight"
            value={data.reverseHighlight}
            onChange={handleStoreChange}
          />
        </div>
      </div>
    </LogoContainer>
  );
};

export default observer(LogoController);
