import React, { useState } from "react";

const QRCode = require("qrcode.react");

const QRCodeComponent = () => {
  const [userURL, setUserURL] = useState("");
  const [size, setSize] = useState(150);
  const [checked, setChecked] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
  const [foregroundColor, setForegroundColor] = useState("#000000");
  const [imageURL, setImageURL] = useState(
    "https://spng.pngfind.com/pngs/s/11-115643_borrow-library-books-book-flat-design-png-transparent.png"
  );
  const handleClick = () => setChecked(!checked);
  const download = document.getElementById('download');

  // const handleDownload = () => {

    // download.addEventListener('click', function (e) {
      // const link = document.createElement('a');
      // link.download = 'download.png';
      // link.href = "asdfasdfasdfasdfa"
      // link.href = canvas.toDataURL();
      // link.click();
      // link.delete;
    // });
  // }

  // download.addEventListener('click', function (e) {
  //   const link = document.createElement('a');
  //   link.download = 'download.png';
  //   link.href = canvas.toDataURL();
  //   link.click();
  //   link.delete;
  // });
  
  // const downloadEmployeeData = () => {

  //   let url = window.URL.createObjectURL();
  //   let a = document.createElement('a');
  //   a.href = url;
  //   a.download = 'employees.json';
  //   a.click();


		// fetch('http://localhost:3000')
		// 	.then(response => {
		// 		response.blob().then(blob => {
		// 			let url = window.URL.createObjectURL(blob);
		// 			let a = document.createElement('a');
		// 			a.href = url;
		// 			a.download = 'employees.json';
		// 			a.click();

		// 		});
				//window.location.href = response.url;
		// });
  // }

  return (
    <div>
      <br />
      Enter your URL:
      <input type="text" onChange={(e) => setUserURL(e.target.value)} />
      <br />
      Set size:
      <input type="number" onChange={(e) => setSize(e.target.value)} />
      <br />
      Set image URL:
      <input type="text" onChange={(e) => setImageURL(e.target.value)} />
      <br />
      Set Background Color:
      <input
        type="color"
        value={backgroundColor}
        onChange={(e) => setBackgroundColor(e.target.value)}
      />
      <br />
      Set Foreground Color:
      <input
        type="color"
        value={foregroundColor}
        onChange={(e) => setForegroundColor(e.target.value)}
      />
      <br />
      Margin (On/Off)?:
      <br />
      <input type="checkbox" onClick={handleClick} checked={checked} />
      <br />
      <br />
      <QRCode
        value={userURL}
        size={size}
        includeMargin={checked}
        renderAs={"canvas"} // or 'svg'
        bgColor={backgroundColor}
        fgColor={foregroundColor}
        level={"L"}
        imageSettings={{
          src: imageURL,
          // x: null,
          // y: null,
          // height: 15,
          // width: 15,
          // excavate: true,
        }}
      />
      <br />
      {userURL}

      {/* <button onClick={downloadEmployeeData}>Download</button> */}


      {/* <canvas id="canvas" height="200"></canvas>
      <br />
      <button id="download" onclick={handleDownload((e) => e.preventDefault )} >Download</button> */}
    </div>
  );
};

export default QRCodeComponent;
