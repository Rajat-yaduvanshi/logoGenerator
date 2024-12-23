import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react-lite";
// import { useStore } from "../store";

const EditBox = styled.div`
  border: 4px solid #333;
  border-radius: 10px;
  padding: 40px;
  margin: 40px 0px;
  max-width: 100%;
`;

const EditArea = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  font-size: ${props => props.fontSize}px;
  background-color: ${props => props.transparentBg};
  padding: 20px;
  text-align: center;
  font-weight: 700;
  border-radius: 10px;
`;

const PrefixSpan = styled.div`
  display: inline-block;
  outline:none;  
	border:0px;
  text-align:center;
  color: ${props => props.color};
  background-color: ${props =>
    props.reverseHighlight ? props.postfixBgColor : "transparent"};
  border-radius: ${props => (props.reverseHighlight ? "7px" : "none")};
  padding: ${props => (props.reverseHighlight ? "5px 10px" : "5px")};(
`;

// const PostfixSpan = styled.div`
//   color: ${props => props.color};
//   background-color: ${props =>
//     !props.reverseHighlight ? props.postfixBgColor : "transparent"};
//   border-radius: ${props => (!props.reverseHighlight ? "7px" : "none")};
//   padding: ${props => (!props.reverseHighlight ? "5px 10px" : "5px")};
// `;

const LogoView = ({ data, text, changeText, ...props }) => {
  const prefixEl = React.useRef(null);
  const postfixEl = React.useRef(null);

  return (
    <EditBox>
      <EditArea
        ref={props.logoRef}
        direction={props.viewDirection}
        fontSize={data.fontSize}
        transparentBg={data.transparentBg ? "transparent" : "#000000"}
      >
        <PrefixSpan
          ref={prefixEl}
          contentEditable
          reverseHighlight={data.reverseHighlight}
          spellCheck="false"
          suppressContentEditableWarning={true}
          postfixBgColor={data.postfixBgColor}
          color={data.reverseHighlight ? data.suffixColor : data.prefixColor}
          onInput={e =>
            // prefixEl.current.innerHTML === data.prefixText &&
            {
              e.persist();

              setTimeout(
                () => changeText(e.target.textContent, "prefixText"),
                0
              );
            }
          }
        >
          {text.prefixText}
        </PrefixSpan>
        <PrefixSpan
          contentEditable
          ref={postfixEl}
          reverseHighlight={!data.reverseHighlight}
          spellCheck="false"
          suppressContentEditableWarning={true}
          color={!data.reverseHighlight ? data.suffixColor : data.prefixColor}
          postfixBgColor={data.postfixBgColor}
          onInput={e =>
            // postfixEl.current.innerHTML === data.suffixText &&
            {
              // let value = e.target.value;
              e.persist();

              setTimeout(
                () => changeText(e.target.textContent, "suffixText"),
                0
              );
            }
          }
        >
          {text.suffixText}
        </PrefixSpan>
      </EditArea>
    </EditBox>
  );
};

export default observer(LogoView);
