import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import QRCodeStyling from "qr-code-styling";

// let TEST = new QRCodeStyling

const qrCode = new QRCodeStyling({
  width: 300,
  height: 300,
  image: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
  dotsOptions: {
    color: "#4267b2",
    type: "rounded", //string ('rounded' 'dots' 'classy' 'classy-rounded' 'square' 'extra-rounded')	
    // gradient: object

  },
  imageOptions: {
    crossOrigin: "anonymous",
    margin: 10, //whitespace margin
    hideBackgroundDots: true,
    imageSize: .5, // 0.5 to 2.0, 
  },

});

const styles = {
  inputWrapper: {
    margin: "20px 0",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  inputBox: {
    flexGrow: 1,
    marginRight: 20,
  },
};

function QRCode2() {
  const [imageSize, setImageSize] = useState("300")
  const [userQRString, setUserQrString] = useState("https://qr-code-styling.com");
  const [fileExt, setFileExt] = useState("png");
  const ref = useRef(null);

  useEffect(() => {
    qrCode.append(ref.current);
  }, []);

  useEffect(() => {
    // console.log(userQRString)
    qrCode.update({
      data: userQRString,
      width: imageSize,
      height: imageSize,
    });
  }, [userQRString, imageSize]);

  const onImageSizeChange = (event) => {
    setImageSize(event.target.value);
  };


  // useEffect(() => {
  // }, [imageSize])

  const onUserQRStringChange = (event) => {
    // event.preventDefault();
    setUserQrString(event.target.value);
  };

  const onExtensionChange = (event) => {
    setFileExt(event.target.value);
  };

  const onDownloadClick = () => {
    qrCode.download({
      extension: fileExt,
    });
  };

  return (
    <div className="qrcode2">
      <div style={styles.inputWrapper}>

        <input type="range" min="100" max="500" value={imageSize} onChange={onImageSizeChange} style={styles.inputBox} />
        <input value={userQRString} onChange={onUserQRStringChange} style={styles.inputBox} />
        {imageSize}
        <select onChange={onExtensionChange} value={fileExt}>
          <option value="png">PNG</option>
          <option value="jpeg">JPEG</option>
          <option value="webp">WEBP</option>
          <option value="svg">SVG</option>
        </select>
        <button onClick={onDownloadClick}>Download</button>
      </div>
      <div className="qrcode-image" ref={ref} />
      {/* <TEST /> */}
      {/* {console.log(ref)} */}

      
    </div>
  );
}

export default QRCode2;
