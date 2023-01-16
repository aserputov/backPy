import React, { useState, useEffect } from "react";

function Camera() {
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: false,
      })
      .then((stream) => {
        const video = document.querySelector("video");
        video.srcObject = stream;
        video.onloadedmetadata = (e) => {
          video.play();
        };
      });
  }, []);

  const takePicture = () => {
    const video = document.querySelector("video");
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0);
    setImgSrc(canvas.toDataURL());
  };

  const savePicture = () => {
    fetch("http://127.0.0.1:5000/pic", {
      method: "POST",
      body: imgSrc,
    });
  };

  return (
    <div>
      <video autoPlay></video>
      <button onClick={takePicture}>Take Picture</button>
      <button onClick={savePicture}>Save Picture</button>
    </div>
  );
}

export default Camera;
