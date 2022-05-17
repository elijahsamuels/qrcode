import React, { useState, useEffect } from "react";
// import { saveAs } from "file-saver";
// var FileSaver = require("file-saver");
import Button from "react-bootstrap/Button";
import ToggleButton from "react-bootstrap/ToggleButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const QRCode = require("qrcode.react");

const radios = [
  { name: "URL", value: "1" },
  { name: "Email", value: "2" },
  { name: "SMS", value: "3" },
  { name: "Phone", value: "4" },
];

const QRCodeComponent = () => {
  const [userString, setUserString] = useState("");
  const [fileName, setFileName] = useState("New QR Code");
  const [size, setSize] = useState(100);
  const [checked, setChecked] = useState(true);
  const [gradientChecked, setgradientChecked] = useState(false);
  const [emailAddress, setEmailAddress] = useState("");
  const [emailSubject, setEmailSubject] = useState("");
  const [userStringBody, setUserStringBody] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
  const [foregroundColor1, setForegroundColor1] = useState("#000000");
  const [foregroundColor2, setForegroundColor2] = useState("#000000");

  const [radioValue, setRadioValue] = useState("1");

  const handleClick = () => setChecked(!checked);
  const handleGradientClick = () => setgradientChecked(!gradientChecked);

  // let canvas = document.getElementsByName("QRCode");

  const handleSaveImg = () => {
    const canvas = document.getElementById("QRCode");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `${fileName}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const qrcodeValue = () => {
    switch (radioValue) {
      case "1":
        return userString;

      case "2":
        return `mailto:${emailAddress}?subject=${emailSubject}&body=${userStringBody}`;

      case "3":
        return `sms:${userString}&body=${userStringBody}`;

      case "4":
        return `tel:${userString}`;

      default:
        return false;
    }
  };

  const userRadioSelect = () => {
    switch (radioValue) {
      // If the user selected URL
      case "1":
        return (
          <React.Fragment>
            <div className="container">
              <div className="text-container">URL:</div>
              <input
                type="text"
                onChange={(e) => setUserString(e.target.value)}
              />
            </div>
          </React.Fragment>
        );

      case "2":
        // If the user selected Email
        return (
          <React.Fragment>
            <div className="container">
              <div className="text-container">Email address:</div>
              <input
                type="email"
                onChange={(e) => setEmailAddress(e.target.value)}
              />
            </div>
            <div className="container">
              <div className="text-container">Email subject:</div>
              <input
                type="text"
                onChange={(e) => setEmailSubject(e.target.value)}
              />
            </div>
            <div className="container">
              <div className="text-container">Email body:</div>
              <textarea
                placeholder="Type your email"
                onChange={(e) => setUserStringBody(e.target.value)}
              />
            </div>
          </React.Fragment>
        );

      case "3":
        // If the user selected SMS
        return (
          <React.Fragment>
            <div className="container">
              <div className="text-container">Phone number to text:</div>
              <input
                type="text"
                onChange={(e) => setUserString(e.target.value)}
              />
            </div>
            <div className="container">
              <div className="text-container">Text message:</div>
              <textarea
                placeholder="Type your message"
                onChange={(e) => setUserStringBody(e.target.value)}
              />
            </div>
          </React.Fragment>
        );

      case "4":
        // If the user selected Phone
        return (
          <React.Fragment>
            <div className="container">
              <div className="text-container">Phone number:</div>
              <input
                type="text"
                onChange={(e) => setUserString(e.target.value)}
              />
            </div>
          </React.Fragment>
        );

      default:
        return false;
      // console.log(`default`);
    }
  };

  const gradientOptions = () => {
    if (gradientChecked === false) {
      return (
        <React.Fragment>
          <div className="text-container">Foreground Color:</div>
          <input
            type="color"
            value={foregroundColor1}
            // {...console.log(foregroundColor1)}
            onChange={(e) => setForegroundColor1(e.target.value)}
          />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div className="text-container">Gradient Color 1:</div>
          <input
            type="color"
            value={foregroundColor1}
            onChange={(e) => setForegroundColor1(e.target.value)}
          />
          <div className="text-container">Gradient Color 2:</div>
          <input
            type="color"
            value={foregroundColor2}
            onChange={(e) => setForegroundColor2(e.target.value)}
          />
        </React.Fragment>
      );
    }
  };

  return (
    <div>
      <ButtonGroup>
        {radios.map((radio, index) => (
          <ToggleButton
            key={index}
            id={`radio-${index}`}
            type="radio"
            // variant={index % 2 ? 'outline-primary' : 'outline-danger'}
            variant={"outline-primary"}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
            // {...console.log(radioValue)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>

      {userRadioSelect()}

      <div className="container">
        <div className="text-container">File name:</div>
        <input type="text" onChange={(e) => setFileName(e.target.value)} />
      </div>

      <div className="container">
        <div className="text-container">Size ({size}):</div>
        <input
          type="range"
          onChange={(e) => setSize(e.target.value)}
          min="75"
          max="400"
          value={size}
        />
      </div>

      {/* Set image URL: */}
      {/* <input type="text" onChange={(e) => setImageURL(e.target.value)} /> */}
      {/* <br /> */}

      <div className="container">
        <div className="text-container">Background Color:</div>
        <input
          type="color"
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
        />
      </div>

			{/* *********** Turned off temporarily to fix gradients *********** */}

      {/* <div className="container">
        <div className="text-container">Gradient (On/Off)?:</div>
        <input
          type="checkbox"
          onClick={handleGradientClick}
          defaultChecked={gradientChecked}
        />
        {gradientOptions()}
      </div> */}

      <div className="container">
        <div className="text-container">Margin (On/Off)?:</div>
        <input type="checkbox" onClick={handleClick} defaultChecked={checked} />
      </div>

      <div className="button">
        <Button onClick={handleSaveImg}>Save .png</Button>
      </div>
      <br />

      <div className="container">
        <div className="text-container">File Name: {`${fileName}.png`}</div>
      </div>

      {/* <div className="container">
        <div className="text-container">URL: {userString}</div>
      </div> */}

      <div className="container">
        <QRCode
          name="QRCode"
          id="QRCode"
          value={qrcodeValue()}
          // value={userString}
          size={parseInt(size)}
          // {...console.log(size)}
          includeMargin={checked}
          renderAs={"canvas"} // or 'svg'
          bgColor={backgroundColor}
          // fgColor={"hsla(240, 100%, 50%, .7)"}
          // fgColor={`linear-gradient(to right, ${foregroundColor1}, ${foregroundColor2})`}
          level={"L"}
          // imageSettings={{
          // src: imageURL,
          // x: null,
          // y: null,
          // height: 15,
          // width: 15,
          // excavate: true,
          // }}
        />
      </div>
      {/* {console.log(<QRCode />)} */}
    </div>
  );
};

export default QRCodeComponent;
