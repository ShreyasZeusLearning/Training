import React, { useEffect, useRef, useState } from "react";

const Canvas = () => {
  const [screenWidth, setWidth] = useState(0);
  var canvasRef = useRef();
  var updateText = useRef();

  let canva, ctx, w, h;
  var mouseEvent = false;
  let updateCell = false;

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

  const columnWidth = [135 , 185 , 135 , 135 , 135 , 135 , 135 , 235, 135 , 135 , 135 , 135 , 135 , 135];


  let lx, ly, rx, ry;

  function PaintCanva(rx = -1 , ry = -1, lx = -1 , ly = -1) {
    if(canvasRef.current != undefined){

      ctx.save();

      ctx.fillStyle = 'rgba(255, 255, 255, 1)';
      ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      ctx.restore();

      
      var x = 0;
      var width = Math.max(135, 120);
      var height = 25;

      for (var i = 0; i < titles.length; i++) {
        ctx.save();
        ctx.rect(x, 0, columnWidth[i], height);
        ctx.clip();
        ctx.font = "bolder 18px Quicksand";
        ctx.fillText(titles[i], x + 2, 20);
        x += columnWidth[i];
        ctx.restore();
        ctx.stroke();
      }

      x = 0;
      var y = height;
      for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[0].length; j++) {
          ctx.save();
          if((i >= lx && i <= rx) && ((j >= ly && j <= ry)||(ly == ry && j == ly))){
            ctx.fillStyle = "#5ec576"
            ctx.fillRect(x, y, columnWidth[j], height);
            ctx.rect(x, y, columnWidth[j], height);

            ctx.clip();

            ctx.fillStyle = "black";
            ctx.font = "bold 18px Quicksand";

            ctx.fillText(data[i][j], x + 2, y + 20);
            
          }else{
            ctx.rect(x, y, columnWidth[j], height);
            ctx.stroke();
            ctx.clip();
            ctx.fillStyle = "black";
            ctx.font = "700 18px Quicksand";
            ctx.fillText(data[i][j], x + 2, y + 20);
          }
          if(lx ==rx && ly ==ry){
            if(updateText.current != undefined && i ==lx && j == ly){
              updateText.current.value = data[i][j];
              updateText.current.style.width = "135" + "px";
              updateText.current.style.height = "25" + "px"
              updateText.current.style.background = "white";
              updateText.current.style.left = x + "px";
              updateText.current.style.top = y + "px";
              updateText.current.style.display = "block";
              updateText.current.focus();
              updateCell = true;
            }
          }
          else{

            if(updateText.current != undefined)
              updateText.current.style.display = "none";

          }
          x += columnWidth[j];
          ctx.restore();
        }
        y += height;
        x = 0;
      }
      ctx.beginPath();
    }
  }

  function getColAndRow(lx, ly , rx , ry){
      var rcolumn = Math.max(Math.floor(lx / 135) , 0);
      var rrow = Math.max(Math.floor(ly / 25) - 1 , 0);
      var lcolumn = Math.max(Math.floor(rx / 135) , 0);
      var lrow = Math.max(Math.floor(ry / 25) - 1 , 0);

      return {rcolumn , rrow , lcolumn , lrow};
  }

  function getClickedDown(event) {
    if(event.target == updateText.current){
      return ;
    }
    rx = event.nativeEvent.offsetX;
    ry = Math.max(event.nativeEvent.offsetY , event.nativeEvent.clientY);
    // console.log("Event" , event , rx , ry);
    mouseEvent = true;
    
    
    canvasRef.current.addEventListener("pointermove" ,getCord);

    
    function getCord(event){
      // if(mouseEvent == true){     
        // console.log("Inside MouseMove" + (rx , ry , lx , ly)); 
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
  
        // console.log("<MouseOver :- " + (lrow , lcolumn , rrow , rcolumn))
  
        PaintCanva(rrow , rcolumn , lrow , lcolumn);
      // }
    }

    canvasRef.current.addEventListener("pointerup", (event) => {
      canvasRef.current.removeEventListener("pointermove", getCord);
      console.log("Mouse Uped")
  
      if(event.target == updateText.current){
        return ;
      }
      // console.log("MouseUp")
      // console.log(event)
      lx = event.offsetX;
      ly = Math.max(event.offsetY , event.clientY);
      // console.log(event.offsetX + " " + ly);
      // console.log(rx + " " + ry);
  
      // var rcolumn = Math.max(Math.floor(lx / 135) , 0);
      // var rrow = Math.max(Math.floor(ly / 25) - 1 , 0);
      // var lcolumn = Math.max(Math.floor(rx / 135) , 0);
      // var lrow = Math.max(Math.floor(ry / 25) - 1 , 0);
      var {rrow , rcolumn , lrow , lcolumn} = getColAndRow(lx , ly , rx , ry);

      // mouseEvent = false;
      // console.log(rcolumn, rrow);
  
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
      // console.log("Event Removed");
  
      if(rcolumn >= data[0].length || lrow >= data.length || lcolumn >= data[0].length || rrow >= data.length){
        PaintCanva(-1 , -1 , -1 , -1)
        if(updateCell == true)
          updateText.current.style.display = "none"
      }
      else{
        PaintCanva(rrow , rcolumn , lrow , lcolumn)
  
        // for (var i = lrow; i <= rrow; i++) {
        //   console.log(data[i][rcolumn]);
        // }
      }

      document.body.addEventListener('keyup' , PressEnter);

      function PressEnter(event){
        // console.log(event)
        if(event.key == 'Enter' && updateCell){
          // alert('Enter is pressed!');
          // console.log(event)
          var {rrow , rcolumn , lrow , lcolumn} = getColAndRow(lx , ly , rx , ry);
          console.log(rrow , rcolumn , lrow , lcolumn);
          // console.log(event.target.value);
          // console.log(data[rrow][rcolumn]);
          data[rrow][rcolumn] = event.target.value;
          updateCell = false;
          updateText.current.style.display = "none";
          PaintCanva(-1 , -1 , -1 , -1);
          // console.log(event)
        }
      }
    });
  };

  //  function PressEnter(event){
    // console.log(event)
    // if(event.key == 'Enter'){
    //   // alert('Enter is pressed!');
    // // console.log(rrow , rcolumn);
    // console.log(event)
    // }

  // };

  return (
    <div className="canva-bg">
      <canvas ref={canvasRef} onPointerDown={(event) => getClickedDown(event)} width="1902px" height="1000px"></canvas>
      <input type="text" ref={updateText} name="" className="inputText" />
    </div>
  );
};

export default Canvas;
