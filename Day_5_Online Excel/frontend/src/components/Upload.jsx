import React, { useState, useRef } from "react";
const Upload = () => {
  const [Files, setFiles] = React.useState("");
  const inputRef = useRef();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    console.log(event.dataTransfer.files[0])
    setFiles(event.dataTransfer.files[0]);
    console.log(Files)
  };

  const MouseEnter = (event) => {
    if(Files)
        console.log("Entered Div")
  }


  return (
    <div className="dropzone" data-state = "close" onDragOver={handleDragOver} onDrop={handleDrop} onMouseOver={MouseEnter}>
      <h1>Drag and Drop Files here to upload</h1>
      <h1>Or</h1>
      <input
        type="file"
        onChange={(event) => {
                console.log(event.target.files)
                setFiles(event.target.files[0])
            }
        }
        ref={inputRef}
        hidden
      />
      {Files == "" ? <button className="dropbtn" onClick={() => inputRef.current.click()}>Select a File</button>
      :<button className="dropbtn upload" onClick={() => inputRef.current.click()}>Upload</button>}
      {Files &&  <span className="file_name"> {Files.name} <span class="material-symbols-outlined" onClick={(event) => { setFiles("") }}>close</span> </span>}
    </div>
  );
};

export default Upload;
