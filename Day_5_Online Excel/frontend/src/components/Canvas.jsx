import React, { useEffect, useRef, useState } from "react";

const Canvas = () => {
  var canvasRef = useRef();
  var updateText = useRef();
  var canvasTitleRef = useRef();

  let canva, ctx , ctxTitle , canvaTitle, w, h;
  let updateCell = false;

  useEffect(() => {
    canva = canvasRef.current;

    canvaTitle = canvasTitleRef.current;
    canvasTitleRef.current.addEventListener("pointermove" , changeCursor);

    ctx = canva.getContext("2d");

    ctxTitle = canvaTitle.getContext("2d");

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

  var columnWidth = [135 , 185 , 135 , 135 , 135 , 135 , 135 , 235, 135 , 135 , 135 , 135 , 135 , 135];


  let lx, ly, rx, ry;

  function PaintCanva(rx = -1 , ry = -1, lx = -1 , ly = -1) {
    if(canvasRef.current != undefined){

      ctx.save();

      ctx.fillStyle = 'rgba(255, 255, 255, 1)';
      ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      ctx.restore();

      ctxTitle.save();

      ctxTitle.fillStyle = 'rgba(255, 255, 255, 1)';
      ctxTitle.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      ctxTitle.restore();

      // if(LineEffect){
      //   ctx.setLineDash([5, 3]);/*dashes are 5px and spaces are 3px*/
      //   ctx.beginPath();
      //   ctx.moveTo(rx,0);
      //   ctx.lineTo(rx, 500);
      //   ctx.stroke();
      // }

      
      var x = 0;
      var width = Math.max(135, 120);
      var height = 25;

      for (var i = 0; i < titles.length; i++) {
        ctxTitle.save();
        ctxTitle.beginPath();
        ctxTitle.rect(x, 0, columnWidth[i], height);
        ctxTitle.clip();
        ctxTitle.font = "bold 18px Quicksand";
        ctxTitle.fillText(titles[i], x + 2, 20);
        x += columnWidth[i];
        ctxTitle.restore();
        ctxTitle.stroke();
      }

      x = 0;
      var y = 0;
      for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[0].length; j++) {
          ctx.save();
          if((i >= lx && i <= rx) && ((j >= ly && j <= ry)||(ly == ry && j == ly))){
            ctx.fillStyle = "rgba(94, 197, 118, 0.2)"
            ctx.fillRect(x, y, columnWidth[j], height);
            ctx.rect(x, y, columnWidth[j], height);

            ctx.clip();

            ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
            ctx.font = "600 18px Quicksand";

            ctx.fillText(data[i][j], x + 2, y + 20);
            
          }else{
            ctx.rect(x, y, columnWidth[j], height);
            ctx.stroke();
            ctx.clip();
            ctx.fillStyle = "black";
            ctx.font = "600 18px Quicksand";
            ctx.fillText(data[i][j], x + 2, y + 20);
          }
          if(lx ==rx && ly ==ry){
            if(updateText.current != undefined && i ==lx && j == ly){
              updateText.current.value = data[i][j];
              updateText.current.style.width = columnWidth[j] + "px";
              updateText.current.style.height = "25" + "px"
              updateText.current.style.background = "white";
              updateText.current.style.left = x + "px";
              updateText.current.style.top = y + 25 + "px";
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
      var rcolumn = 0;
      var rrow = Math.max(Math.floor(ly / 25) - 1, 0);
      var lcolumn = 0;
      var lrow = Math.max(Math.floor(ry / 25) - 1 , 0);
      // console.log(rrow , lrow)
      var lc = lx ,rc = rx ;
      for(var i = 0 ; i < columnWidth.length ; i++){
        // console.log(lc , rc);
        if(lc > 0){
          if(lc - columnWidth[i] <= 0){
            // console.log("lc is set" , i-1);
            rcolumn = Math.max(i , 0);
          }

          lc -= columnWidth[i];
        }
        if(rc > 0){
          if(rc - columnWidth[i]<= 0){
            // console.log("rc is set" , i - 1);
            lcolumn = Math.max(i , 0);
          }
            
          rc -= columnWidth[i];
        }

        if(lc <= 0 && rc <= 0){
          break;
          // console.log("called Break for it ")
        };
      }

      // console.log(lx , ly , rx , ry);

      // console.log(rcolumn , rrow , lcolumn , lrow);

      return {rcolumn , rrow , lcolumn , lrow};
  }



  function getClickedDown(event) {
    if(event.target == updateText.current){
      return ;
    }
    rx = event.nativeEvent.offsetX;
    ry = Math.max(event.nativeEvent.offsetY , event.nativeEvent.clientY);
    // console.log("Event" , event , rx , ry);
    
    
    canvasRef.current.addEventListener("pointermove" ,getCord);

    
    function getCord(event){
        // console.log(event.offsetY)
        var {rrow , rcolumn , lrow , lcolumn} = getColAndRow(event.offsetX ,  Math.max(event.offsetY , event.clientY) , rx , ry);

        // console.log("<MouseOver :- " + lrow , lcolumn , rrow , rcolumn)

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
    
        PaintCanva(rrow , rcolumn , lrow , lcolumn);
      // }
    }

    canvasRef.current.addEventListener("pointerup", (event) => {
      canvasRef.current.removeEventListener("pointermove", getCord);
      // console.log("Mouse Uped")
  
      if(event.target == updateText.current){
        return ;
      }
      lx = event.offsetX;
      ly = Math.max(event.offsetY , event.clientY);
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
        PaintCanva(rrow , rcolumn , lrow , lcolumn);
        console.log(rrow - lrow)
        if(rrow - lrow > 0){
          const newArray = [];
          for (var i = lrow; i <= rrow; i++) {
            if(lcolumn == rcolumn){
              const numb = new Number(data[i][rcolumn]).valueOf();
              if(numb != NaN){
                newArray.push(numb);
              }
              else{
                newArray = [];
                break;
              }
            }
          }
          
          let sum = 0;
          for(var i = 0 ; i < newArray.length ; i++){
            sum += newArray[i]; 
            console.log(newArray[i])
          }

          console.log(newArray)

          let mean = sum/newArray.length;
          let maxEle = Math.max(...newArray);
          let minEle = Math.min(...newArray);
          console.log(mean , maxEle , minEle)
        }

      }

      document.body.addEventListener('keyup' , PressEnter);

      function PressEnter(event){
        // console.log(event)
        if(event.key == 'Enter' && updateCell){
          // alert('Enter is pressed!');
          // console.log(event)
          var {rrow , rcolumn , lrow , lcolumn} = getColAndRow(lx , ly , rx , ry);
          // console.log(rrow , rcolumn , lrow , lcolumn);
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

      function changeCursor(event){
        if(event.pressure == 0){
          let x = event.offsetX;
          // console.log(event.offsetX)

          for(var i = 0 ; i < columnWidth.length ; i++){
            // console.log(Math.abs(x - event.offsetX))
            // console.log(event)
            if(Math.abs(x - columnWidth[i]) <= 5){
              event.target.style.cursor = "col-resize";
              break;
            }
            else{
              canvasTitleRef.current.style.cursor = "default";
            }
            x -= columnWidth[i];
          }
        }
      }
          // event.target.style.cursor = "col-resize";

    function ChangeSizeInitial(event){
      let x = event.nativeEvent.offsetX;
      let lx = 0;
      console.log(event)
      console.log("Mouse ")
      var i = 0;
      for(i = 0 ; i < columnWidth.length ; i++){
      
        if(Math.abs(x - columnWidth[i]) <= 5){
          console.log("Inside Mouse Down");
          lx = event.nativeEvent.offsetX;
          console.log(lx);
          canvasTitleRef.current.removeEventListener("pointermove" , changeCursor);

          canvasTitleRef.current.addEventListener("pointermove" , LineEffect);

          canvasTitleRef.current.addEventListener("pointerup" , ChangeSizeAfter);
          canvasTitleRef.current.addEventListener("pointerleave" , function removeListeners(event){
            canvasTitleRef.current.removeEventListener("pointerup" , ChangeSizeAfter);
            canvasTitleRef.current.removeEventListener("pointerleave" , removeListeners);
            canvasTitleRef.current.removeEventListener("pointermove" , LineEffect);
            canvasTitleRef.current.addEventListener("pointermove" , changeCursor);


          })
          break;
        }
        x -= columnWidth[i];
      }

      function LineEffect(event){
        event.target.style.cursor = "col-resize";
        const rx = event.offsetX;
        console.log(rx , lx)
        if(columnWidth[i] + rx - lx > 10)
          columnWidth[i] += (rx - lx);
        else  
          columnWidth[i] = 10
        PaintCanva();
        console.log(columnWidth[i]);
        lx = rx;
      }

      
      function ChangeSizeAfter(event){
        // console.log(i);
        // const rx = event.offsetX;
        // console.log(rx)
        // if(columnWidth[i] + rx - lx > 10)
        //   columnWidth[i] += rx - lx;
        // else  
        //   columnWidth[i] = 10
        // PaintCanva()
        // console.log(columnWidth[i]);
        // LineEffect = false;
        canvasTitleRef.current.removeEventListener("pointermove" , LineEffect);
        canvasTitleRef.current.addEventListener("pointermove" , changeCursor);
        canvasTitleRef.current.removeEventListener("pointerup" , ChangeSizeAfter);
      }
    }


  

  return (
    <div className="canva-bg">
      <canvas ref={canvasTitleRef} onPointerDown={(event) => ChangeSizeInitial(event)} className="canvaTitleBlock" width="1902px" height="25px"></canvas>
      <canvas ref={canvasRef} onPointerDown={(event) => getClickedDown(event)} width="1902px" height="900px"></canvas>
      <input type="text" ref={updateText} name="" className="inputText" />
    </div>
  );
};

export default Canvas;
