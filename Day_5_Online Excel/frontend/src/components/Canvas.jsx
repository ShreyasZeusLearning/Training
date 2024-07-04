import React, { useEffect, useRef, useState } from 'react'

const Canvas = () => {
    const [screenWidth , setWidth] = useState(0);
    var canvasRef = useRef();
    let canva, ctx , w, h;

    useEffect(() => {
        canva = canvasRef.current
        
        ctx = canva.getContext("2d");
        
        h = window.innerHeight;

        PaintCanva();
    
    },[screenWidth]);

const titles = [ "Email ID", "Name", "Country", "State", "City", "Telephone number", "Address line 1", "Address line 2", "Date of Birth", "FY2019-20", "FY2020-21", "FY2021-22", "FY2022-23", "FY2023-2024"]

const data = [
   ["user1@example.com", "John Doe", "USA", "California", "Los Angeles", "+1-123-456-7890", "123 Main St", "Apt 101", "1990-01-01", 1500, 2500, 3500, 4500, 5500],
  ["user1@example.com", "John Doe", "USA", "California", "Los Angeles", "+1-123-456-7890", "123 Main St", "Apt 101", "1990-01-01", 1500, 2500, 3500, 4500, 5500],
  ["user2@example.com", "Jane Smith", "Canada", "Ontario", "Toronto", "+1-987-654-3210", "456 Elm St", "Unit 202", "1985-05-15", 1700, 2700, 3700, 4700, 5700],
  ["user3@example.com", "Alice Johnson", "UK", "England", "London", "+44-20-1234-5678", "789 Oak St", "Flat 3", "1982-11-30", 1900, 2900, 3900, 4900, 5900],
["user1@example.com", "John Doe", "USA", "California", "Los Angeles", "+1-123-456-7890", "123 Main St", "Apt 101", "1990-01-01", 1500, 2500, 3500, 4500, 5500],
  ["user2@example.com", "Jane Smith", "Canada", "Ontario", "Toronto", "+1-987-654-3210", "456 Elm St", "Unit 202", "1985-05-15", 1700, 2700, 3700, 4700, 5700],
  ["user3@example.com", "Alice Johnson", "UK", "England", "London", "+44-20-1234-5678", "789 Oak St", "Flat 3", "1982-11-30", 1900, 2900, 3900, 4900, 5900]
  
]

function PaintCanva()
{
    console.log("Painting")
    var x = 0;
    // console.log(w/14)
    var width = Math.max(135 , 120);
    var height = 25;

    for(var i = 0 ; i < titles.length ; i++){  
        ctx.save();  
        ctx.rect(x, 0, width, height);
        ctx.clip();
        ctx.font = "18px Arial"
        ctx.fillText(titles[i] , x + 2 , 20);
        x += width;
        ctx.restore();
        
        // console.log(x);
    
    }
    
    x = 0;
    var y = height
    for(var i = 0 ; i < data.length ; i++){
        for(var j = 0 ; j < data[0].length;j++){
        ctx.save();
        ctx.rect(x, y, width , height);
        ctx.clip();
        ctx.font = "18px Arial"
        ctx.fillText(data[i][j] , x + 2 , y + 20);
        x += width;
        ctx.restore();
        }
        y += height;
        x = 0;
    }
    
    ctx.stroke();
}
  // let mouseX, mouseY;
  
  let rangeSelected = true;
  
  if(rangeSelected){
    let lx , ly , rx , ry;
    document.body.addEventListener("mouseup", (event)=>{
      lx = event.clientX;
      ly = event.clientY;
  
    //   console.log(lx + " " + ly);
      
      
      const rcolumn = Math.floor(lx/130)-1;
      const rrow = Math.floor(ly/25)-1;
      const lcolumn = Math.floor(rx/130)-1;
      const lrow = Math.floor(ry/25)-1;
      
    //   console.log(lcolumn , lrow , rcolumn , rrow);
    });
  
    document.body.addEventListener("mousedown", (event)=>{
      rx = event.clientX;
      ry = event.clientY;
  
    //   console.log(rx + " " + ry);
    }); 
  }
  return (
    <div className='canva-bg'><canvas ref={canvasRef} width = "1902px" height = "400px"></canvas></div>
  )
}

export default Canvas