import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import { json } from "react-router-dom";

const Canvas = () => {
  const [AggData , setAggData] = useState({
    mean : "Na",
    max : "Na",
    min : "Na"
  });
  // const navigator = navigator.clipboard
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
      if(canvasRef.current != undefined && ctx != undefined){

      ctx.save();

      ctx.fillStyle = 'rgba(255, 255, 255, 1)';
      ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      ctx.restore();

      ctxTitle.save();

      ctxTitle.fillStyle = 'rgba(255, 255, 255, 1)';
      ctxTitle.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      ctxTitle.restore();
  
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
          ctx.beginPath();

          if((i >= lx && i <= rx) && ((j >= ly && j <= ry)||(ly == ry && j == ly))){

            ctx.fillStyle = "rgba(94, 197, 118, 0.5)"
            ctx.strokeStyle = "rgba(0, 0, 0 , 1)"
            ctx.fillRect(x, y, columnWidth[j], height);
            ctx.rect(x, y, columnWidth[j], height);
            ctx.stroke();
            ctx.clip();

            ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
            ctx.font = "600 18px Quicksand";
            var {rrow , rcolumn , lrow , lcolumn} = getColAndRow(lx , ly , rx , ry);
            ctx.fillText(data[i][j], x + 2, y + 20);
            // ctx.restore();
          }else{
            // ctx.save();
            ctx.rect(x, y, columnWidth[j], height);
            ctx.strokeStyle = "rgba(0, 0, 0 , 0.5)"
            ctx.stroke();
            ctx.clip();
            ctx.fillStyle = "black";
            ctx.font = "600 18px Quicksand";
            ctx.fillText(data[i][j], x + 2, y + 20);
            // ctx.restore();
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

          // await new Promise((r) => {
          //   setTimeout(r,100);
          // })
        }
        y += height;
        x = 0;
      }
      ctx.beginPath();
    }
  }

  let offset = 0;
  let animationId = null;
  function AntsAnimation(){
    if(ctx != undefined){
      ctx.save();
      // ctx.beginPath();
      ctx.lineDashOffset = offset;
      var c = Math.max(lx , rx);
      var d = Math.min(rx , lx);

      lx = d;
      rx = c;

      c = Math.max(ly , ry);
      d = Math.min(ry , ly);

      ly = d;
      ry = c;
      // console.log(lx,ly,rx,ry);
      var {rrow , rcolumn , lrow , lcolumn} = getColAndRow(lx , ly , rx , ry);
      // console.log(rrow , rcolumn , lrow , lcolumn)

      var rrpixel = 0 , lrpixel = 0 , lcpixel = 0 , rcpixel = 0;
      // console.log(lcol , rcol)
      for(var k = 0 ; k <= lcolumn ; k++){
        rrpixel += columnWidth[k];

        if(k < rcolumn)
          lrpixel += columnWidth[k];
      }
      if(rrow == 0)
        lcpixel = 0;
      else
        lcpixel = rrow * 25 + 0;
      rcpixel = (lrow+1)*25 + 0;

      ctx.setLineDash([6, 4]);
      // console.log(lrpixel, lcpixel, rrpixel , rcpixel,rrpixel - lrpixel, rcpixel - lrpixel);
      ctx.strokeStyle = "#1A5319";
      ctx.lineWidth = 3;
      ctx.strokeRect(lrpixel, lcpixel, rrpixel - lrpixel, rcpixel - lcpixel);
      if(offset > 6) offset = 0;
      else offset += 1;
      ctx.restore();
    }
    animationId = window.requestAnimationFrame(() => {
      PaintCanva(lrow , lcolumn , rrow , rcolumn);
      AntsAnimation();
    })
  }

  function getColAndRow(lx, ly , rx , ry){
      var rcolumn = 0;
      const navbar = (document.querySelector(".navbar").getBoundingClientRect().height);
      const agtbox = (document.querySelector(".aggr-box").getBoundingClientRect().height);
      var rrow = Math.max(Math.floor((ly - (navbar + agtbox))/ 25) - 1 , 0);
      var lcolumn = 0;
      var lrow = Math.max(Math.floor((ry - (navbar + agtbox))/ 25) - 1 , 0);
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

      return {rcolumn , rrow , lcolumn , lrow};
  }



  function getClickedDown(event) {
    if(event.target == updateText.current){
      return ;
    }

    if(ctx.lineDashOffset != null && animationId != null)
      window.cancelAnimationFrame(animationId);
    
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
          }

          let mean =  Number((sum/newArray.length).toFixed(4)).valueOf();
          let maxEle = Math.max(...newArray);
          let minEle = Math.min(...newArray);
          // maxEle === 'Infinity' ? 'NAN' : maxEle;
          if(maxEle == "Infinity"){
            maxEle = 'NAN';
          }

          // const jsonData = {
          //   mean,
          //   max : maxEle,
          //   min : minEle
          // };
          // setAggData(jsonData)
          // console.log(mean , maxEle , minEle)
        }

        PaintCanva(rrow , rcolumn , lrow , lcolumn);


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

  window.addEventListener("keydown" , (event) => {
    var {rrow , rcolumn , lrow , lcolumn} = getColAndRow(lx , ly , rx , ry);


    if(event.ctrlKey == true && event.code == "KeyC"){
      let text = '';
      console.log("Inside Copy");
      for(var i = lrow ; i <= rrow ; i++){
        for(var j = lcolumn ; j <= rcolumn ; j++){
          text += data[i][j] + '\t' + '\t';
        }

        text += '\n';
        navigator.clipboard.writeText(text);
      }

      AntsAnimation();
    }

    if(event.key == "Escape"){
      window.cancelAnimationFrame(animationId);
      PaintCanva(-1,-1,-1,-1)
    }

  })

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
    <div className="mainContainer">
      <div className='navbar'>
        <div className=""></div>
        <ul>
            <li><img src="./Images/home.svg" alt="" srcset="" /><p className="link-tags" href="/">Home</p></li>
            <li><img src="./Images/upload.svg" alt="" srcset="" /> <a className="link-tags" href="/upload">Upload</a></li>
            <li><img src="./Images/add.svg" alt="" srcset="" /> <a  className="link-tags" href="#">Insert</a></li>
            <li><img src="./Images/graph.svg" alt="" srcset="" /> <p className="link-tags" href="/upload">Graphs</p></li>
        </ul>
        <div className="search">
            <input type="text" name="srchInptTxt" className='srchInptbox' id="" />
            <span class="material-symbols-outlined">search</span>
        </div>
      </div>
      <div className="aggr-box">
        <span>Mean :- {AggData.mean}</span>
        <span>Max :- {AggData.max}</span>
        <span>Minimum :- {AggData.min}</span>
      </div>
      <div className="canva-bg">
        <canvas ref={canvasTitleRef} onPointerDown={(event) => ChangeSizeInitial(event)} className="canvaTitleBlock" width="1902px" height="25px"></canvas>
        <canvas ref={canvasRef} onPointerDown={(event) => getClickedDown(event)} width="1902px" height="300px"></canvas>
        <input type="text" ref={updateText} name="" className="inputText" />
      </div>

      <div id="myModal" className="modal">
        <div className="modal-content">
          <div className="heading">
            <span className="material-symbols-outlined close">close</span>
          </div>

          <div className="row">
            <div className="iptbox">
              <label htmlFor="username" className="lbl">Username</label>
              <input type="username" name="username" className="iptbox" />
            </div>

            <div className="iptbox">
              <label htmlFor="lbl" className="lbl">Email</label>
              <span className="mailbox"><span className="mailspan">@</span><input type="email" name="email" className="iptbox" /></span>
            </div>
          </div>

          <div className="row">
            <div className="iptbox">
              <label htmlFor="contact" className="lbl">Contact Number</label>
              <input type="number" name="contact" className="iptbox" />
            </div>

            <div className="iptbox">
              <label htmlFor="dob" className="lbl">Date Of Birth</label>
              <input type="date" name="dob" className="iptbox" />
            </div>
          </div>

          <div className="row">
            <div className="iptbox">
              <label htmlFor="country" className="lbl">Country</label>
              <input type="text" name="country" className="iptbox3" />
            </div>

            <div className="iptbox">
              <label htmlFor="state" className="lbl">State</label>
              <input type="text" name="state" className="iptbox3" />
            </div>

            <div className="iptbox">
              <label htmlFor="city" className="lbl">City</label>
              <input type="text" name="city" className="iptbox3" />
            </div>
          </div>

          <div className="row">
            <div className="iptbox">
              <label htmlFor="addressl1" className="lbl">Address Line 1</label>
              <input type="text" name="addressl1" className="address" />
            </div>
          </div>

          <div className="row">
            <div className="iptbox">
              <label htmlFor="addressl2" className="lbl">Address Line 2</label>
              <input type="text" name="addressl2" className="address" />
            </div>
          </div>

          <div className="row">
            <div className="iptbox">
              <label htmlFor="contact" className="lbl">FY - 2019-2020</label>
              <input type="number" name="contact" className="amtnumb" />
            </div>

            <div className="iptbox">
              <label htmlFor="dob" className="lbl">FY - 2019-2020</label>
              <input type="number" name="dob" className="amtnumb" />
            </div>
          </div>

          <div className="row">
            <div className="iptbox">
              <label htmlFor="contact" className="lbl">FY - 2019-2020</label>
              <input type="number" name="contact" className="amtnumb" />
            </div>

            <div className="iptbox">
              <label htmlFor="dob" className="lbl">FY - 2019-2020</label>
              <input type="number" name="dob" className="amtnumb" />
            </div>
          </div>
          <button className="btn" type="submit">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Canvas;
