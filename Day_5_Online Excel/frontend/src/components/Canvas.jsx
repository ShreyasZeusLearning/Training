import React, { useEffect, useRef, useState } from "react";

const Canvas = () => {
  const [screenWidth, setWidth] = useState(0);
  var canvasRef = useRef();
  var updateText = useRef();

  let canva, ctx, w, h;
  var mouseEvent = false;

  useEffect(() => {
    canva = canvasRef.current;

    ctx = canva.getContext("2d");

    h = window.innerHeight;

    PaintCanva();
  });

  const titles = [
    "Email ID",
    "Name",
    "Country",
    "State",
    "City",
    "Telephone number",
    "Address line 1",
    "Address line 2",
    "Date of Birth",
    "FY2019-20",
    "FY2020-21",
    "FY2021-22",
    "FY2022-23",
    "FY2023-2024",
  ];

  const data = [
    [
      "user1@example.com",
      "John Doe",
      "USA",
      "California",
      "Los Angeles",
      "+1-123-456-7890",
      "123 Main St",
      "Apt 101",
      "1990-01-01",
      1500,
      2500,
      3500,
      4500,
      5500,
    ],
    [
      "user1@example.com",
      "John Doe",
      "USA",
      "California",
      "Los Angeles",
      "+1-123-456-7890",
      "123 Main St",
      "Apt 101",
      "1990-01-01",
      1500,
      2500,
      3500,
      4500,
      5500,
    ],
    [
      "user2@example.com",
      "Jane Smith",
      "Canada",
      "Ontario",
      "Toronto",
      "+1-987-654-3210",
      "456 Elm St",
      "Unit 202",
      "1985-05-15",
      1700,
      2700,
      3700,
      4700,
      5700,
    ],
    [
      "user3@example.com",
      "Alice Johnson",
      "UK",
      "England",
      "London",
      "+44-20-1234-5678",
      "789 Oak St",
      "Flat 3",
      "1982-11-30",
      1900,
      2900,
      3900,
      4900,
      5900,
    ],
    [
      "user1@example.com",
      "John Doe",
      "USA",
      "California",
      "Los Angeles",
      "+1-123-456-7890",
      "123 Main St",
      "Apt 101",
      "1990-01-01",
      1500,
      2500,
      3500,
      4500,
      5500,
    ],
    [
      "user2@example.com",
      "Jane Smith",
      "Canada",
      "Ontario",
      "Toronto",
      "+1-987-654-3210",
      "456 Elm St",
      "Unit 202",
      "1985-05-15",
      1700,
      2700,
      3700,
      4700,
      5700,
    ],
    [
      "user3@example.com",
      "Alice Johnson",
      "UK",
      "England",
      "London",
      "+44-20-1234-5678",
      "789 Oak St",
      "Flat 3",
      "1982-11-30",
      1900,
      2900,
      3900,
      4900,
      5900,
    ],
  ];

  let lx, ly, rx, ry;

  function PaintCanva(rx = -1 , ry = -1, lx = -1 , ly = -1) {
    if(canvasRef.current != undefined){
      // console.log(canvasRef)
      // console.log(ctx)

      // console.log(canvasRef.current.width, canvasRef.current.height);
      ctx.save();

      ctx.fillStyle = 'rgba(255, 255, 255, 1)';
      ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      ctx.restore();
      // console.log("Painting");
      
      // console.log(rx , ry , lx, ly);
      
      var x = 0;
      // console.log(w/14)
      var width = Math.max(135, 120);
      var height = 25;

      for (var i = 0; i < titles.length; i++) {
        ctx.save();
        ctx.rect(x, 0, width, height);
        ctx.clip();
        ctx.font = "18px Arial";
        ctx.fillText(titles[i], x + 2, 20);
        x += width;
        ctx.restore();
        ctx.stroke();
        // console.log(x);
      }

      x = 0;
      var y = height;
      for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[0].length; j++) {
          ctx.save();
          if((i >= lx && i <= rx) && ((j >= ly && j <= ry)||(ly == ry && j == ly))){
            ctx.fillStyle = "#5ec576"
            ctx.fillRect(x, y, width, height);
            ctx.rect(x, y, width, height);

            ctx.clip();

            ctx.fillStyle = "black";
            ctx.font = "18px Arial";

            ctx.fillText(data[i][j], x + 2, y + 20);
            
          }else{
            ctx.rect(x, y, width, height);
            ctx.stroke();
            ctx.clip();
            ctx.fillStyle = "black";
            ctx.font = "18px Arial";
            ctx.fillText(data[i][j], x + 2, y + 20);
          }
          if(lx ==rx && ly ==ry){
            if(updateText.current != undefined && i ==lx && j == ly){
              updateText.current.style.width = "135" + "px";
              updateText.current.style.height = "25" + "px"
              updateText.current.style.background = "white";
              updateText.current.style.left = x + "px";
              updateText.current.style.top = y + "px";
              updateText.current.style.display = "block";
            }
          }
          else{

            if(updateText.current != undefined)
              updateText.current.style.display = "none";

          }
          // console.log(clickopt)
          x += width;
          ctx.restore();
        }
        y += height;
        x = 0;
      }
      ctx.beginPath();
    }
  }

  let rangeSelected = true;
  // window.removeEventListener("mousemove", getCord);


  // if(rangeSelected){
  document.body.addEventListener("mouseup", (event) => {
    console.log("MouseUp")
    console.log(event)
    lx = event.offsetX;
    ly = Math.max(event.offsetY , event.clientY);
    console.log(lx + " " + ly);
    console.log(rx + " " + ry);

    var rcolumn = Math.max(Math.floor(lx / 135) , 0);
    var rrow = Math.max(Math.floor(ly / 25) - 1 , 0);
    var lcolumn = Math.max(Math.floor(rx / 135) , 0);
    var lrow = Math.max(Math.floor(ry / 25) - 1 , 0);
    mouseEvent = false;
    console.log(lcolumn, lrow, rcolumn, rrow , data.length , data[0].length);

    if(lcolumn > rcolumn){
      var c = lcolumn;
      lcolumn = rcolumn;
      rcolumn = c;
    }

    
    if(lrow > rrow){
      var c = lrow;
      lrow = rrow;
      rrow = c;
    }
    console.log("Event Removed");

    if(rcolumn >= data[0].length || lrow >= data.length || lcolumn >= data[0].length || rrow >= data.length){
      PaintCanva(-1 , -1 , -1 , -1)
    }
    else{
      PaintCanva(rrow , rcolumn , lrow , lcolumn)

      for (var i = lrow; i <= rrow; i++) {
        console.log(data[i][rcolumn]);
      }
    }

  });

  document.body.addEventListener("mousedown", (event) => {
    rx = event.offsetX;
    ry = Math.max(event.offsetY , event.clientY);
    console.log("Event" , event.x , rx , ry);
    mouseEvent = true;
    window.addEventListener("mousemove" ,(event) => {
      getCord(event , rx , ry);
    });
  });

  // function getCord(rx , ry)
  function getCord(event , rx , ry){
    if(mouseEvent == true){     
      console.log("Inside MouseMove" + (rx , ry , lx , ly)); 
      var rcolumn = Math.max(Math.floor(event.offsetX / 135) , 0);
      var rrow = Math.max(Math.floor(event.offsetY / 25) - 1 , 0);
      var lcolumn = Math.max(Math.floor(rx / 135) , 0);
      var lrow = Math.max(Math.floor(ry / 25) - 1 , 0);

      if(lcolumn > rcolumn){
        var c = lcolumn;
        lcolumn = rcolumn;
        rcolumn = c;
      }
  
      
      if(lrow > rrow){
        var c = lrow;
        lrow = rrow;
        rrow = c;
      }

      console.log("<MouseOver :- " + (lrow , lcolumn , rrow , rcolumn))

      PaintCanva(rrow , rcolumn , lrow , lcolumn);
    }
  }
  // }
  return (
    <div className="canva-bg">
      <canvas ref={canvasRef} width="1902px" height="400px"></canvas>
      <input type="text" ref={updateText} name="" className="inputText" />
    </div>
  );
};

export default Canvas;
