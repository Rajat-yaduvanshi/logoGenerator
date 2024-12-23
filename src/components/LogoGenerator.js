import React from "react";
import domToImage from "dom-to-image";
import styled from "styled-components";
import { useStore } from "../store";
import LogoView from "./LogoView";
import LogoController from "./LogoController";
import ShareButton from "./ShareButton";
import { observer } from "mobx-react-lite";

// styled component
const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  padding: 20px 20%;
`;

const LogoGenerator = (props) => {
  const logoRef = React.useRef(null);
  const { data, getText, changeText, handleStoreChange } = useStore();
  const text = getText();
  console.log(data, "from this");
  // const store = useLocalStore(() => ({
  //   data: {
  //     prefixColor: "#ffffff",
  //     suffixColor: "#000000",
  //     postfixBgColor: "#ff9900",
  //     transparentBg: false,
  //     reverseHighlight: false,
  //     fontSize: 55
  //   },
  //   handleStoreChange(value, type) {
  //     console.log(value, type);
  //     store.data[type] = value;
  //   }
  // }));

  const download = () => {
    const node = logoRef && logoRef.current;
    domToImage.toPng(node).then((res) => {
      downloadImage(res, `logo`);
    });
  };
  const share = () => {
    // let url = "https://logoly.pro";
    // let title = "Logo Generator";
    window.open(`https://twitter.com/`);
  };

  return (
    <LogoContainer>
      <LogoView
        logoRef={logoRef}
        viewDirection={props.viewDirection}
        data={data}
        text={text}
        changeText={changeText}
      />
      <LogoController
        data={data}
        text={text}
        handleStoreChange={handleStoreChange}
      />
      <ShareButton handleDownload={download} handleShare={share} />
    </LogoContainer>
  );
};

// down image helper
function downloadImage(data, name) {
  let image = new Image();
  image.setAttribute("crossOrigin", "anonymous");
  image.onload = function () {
    let canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    let ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0, image.width, image.height);
    let url = canvas.toDataURL("image/png");
    let a = document.createElement("a");
    let event = new MouseEvent("click");
    a.download = name || "logo";
    a.href = url;
    a.dispatchEvent(event);
  };
  image.src = data;
}

export default observer(LogoGenerator);
