var data = await fetch("./js/data.json");
data = await data.json();
console.log(data);

export class Excel {
  index = 0;

  rx = 0;
  ry = 0; 
  lx = 0;
  ly = 0;

  selected = {
    selectedX : -1,
    selectedY : -1,
    width : -1,
    height : -1
  }

  columnWidth = [
    90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
    90, 90, 90, 90, 90, 90, 90, 90, 90,
  ];

  rowHeight = [
    40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40,
    40, 40, 40, 40, 40, 40, 40, 40, 40,
  ];

  // divRefs
  constructor(divRef) {
    this.rowHeaderRef = document.createElement("canvas");
    this.colHeaderRef = document.createElement("canvas");
    this.excelRef = document.createElement("canvas");
    this.btn = document.createElement("div");

    this.rowHeader = this.rowHeaderRef.getContext("2d");
    this.colHeader = this.colHeaderRef.getContext("2d");
    this.excel = this.excelRef.getContext("2d");

    this.outerexcelDiv = document.createElement("div");
    this.inptDiv = document.createElement("div");
    this.inptBox = document.createElement("input");
    this.excelDiv = document.createElement("div");
    this.overlayDiv = document.createElement("div");
    this.excelDiv.appendChild(this.excelRef);
    this.excelDiv.appendChild(this.inptDiv);
    this.outerexcelDiv.appendChild(this.excelDiv);
    this.inptDiv.appendChild(this.inptBox)
    this.excelDiv.appendChild(this.overlayDiv);

    this.colHeaderRef.classList.add("colHeader");
    this.rowHeaderRef.classList.add("rowHeader");
    this.excelRef.classList.add("excel");
    this.inptDiv.classList.add("inpt")
    this.outerexcelDiv.classList.add("outer-excel");
    this.excelDiv.classList.add("inner-excel");
    this.btn.classList.add("btn");
    this.overlayDiv.classList.add("overlayDiv");

    divRef.appendChild(this.btn);
    divRef.appendChild(this.colHeaderRef);
    divRef.appendChild(this.rowHeaderRef);
    divRef.appendChild(this.outerexcelDiv);

    this.divRefs = divRef;

    // Object.keys()
    (event) => this.ChangeWidthAndHeight(event, divRef);

    this.IntilizeSize();

    this.rowHeaderRef.width = 43;
    this.rowHeaderRef.height = divRef.clientHeight - 44;
    this.colHeaderRef.height = 43;
    this.colHeaderRef.width = divRef.clientWidth - 44;

    this.outerexcelDiv.addEventListener("scrollend", () => {
      this.IncreaseSizeofArray();
      this.drawColHeader();
      this.drawrowHeader();
      this.drawExcel();
    });

    this.outerexcelDiv.addEventListener("scroll", () => {
      this.drawColHeader();
      this.drawrowHeader();
      this.drawExcel();
    });

    this.excel.canvas.addEventListener("pointerdown" , this.startSelection);

    this.excel.canvas.addEventListener("dblclick" , (event) => {
      var x = event.offsetX;
      var y = event.offsetY;
      [this.lx , this.ly] = this.getRowAndCol(x , y);
      this.EditBox();
    })

    window.addEventListener("keydown", (e) => {
      if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
          e.preventDefault();
      }
    }, false);
    
    window.addEventListener("keydown" , (event) => {
      if(event.key == "ArrowUp"){
        this.MoveCell(1);
      }
      else if(event.key == "ArrowDown"){
        this.MoveCell(2);
      }
      else if(event.key == "ArrowLeft"){
        this.MoveCell(3);
      }
      else if(event.key == "ArrowRight"){
        this.MoveCell(4);
      }
    });
  }

  startSelection = (event) => {
    console.log(event)
    if(this.selected.selectedX != -1 && this.selected.selectedY != -1)
      this.clearCell();

    this.inptDiv.style.display = "none";
    this.overlayDiv.style.display = "none";
    var x = event.offsetX;
    var y = event.offsetY;
    [this.lx , this.ly] = this.getRowAndCol(x , y);
    console.log("Lx :- " , this.lx , " " , "Ly :- " , this.ly);
    
    let selectionMove = (event) => {
      event.preventDefault();
      event.stopPropagation();
      var x = event.offsetX;
      var y = event.offsetY;
      [this.rx , this.ry] = this.getRowAndCol(x , y);
      if(this.lx != this.rx && this.ly != this.ry)  
        this.PaintSelection();
      // console.log("Rx :- " , this.rx , " " , "Ry :- " , this.ry);

    }
    
    let EndSelection = (event) => {
      console.log(event)
      event.preventDefault();
      event.stopPropagation();
      var x = event.offsetX;
      var y = event.offsetY;
      [this.rx , this.ry] = this.getRowAndCol(x , y);
      console.log("Ending Rx :- " , this.rx , " " , "Ry :- " , this.ry);

      // if(this.lx == this.rx && this.ly == this.ry)
      //   this.PaintCell();
      // else  
        this.PaintSelection();

      this.excel.canvas.removeEventListener("pointermove" , selectionMove);
      this.excel.canvas.removeEventListener("pointerup" , EndSelection);
      this.outerexcelDiv.removeEventListener("pointermove" , selectionMove);
      this.outerexcelDiv.removeEventListener("pointerup" , EndSelection);
    }
      this.excel.canvas.addEventListener("pointermove" , selectionMove);
      this.excel.canvas.addEventListener("pointerup" , EndSelection);
      this.outerexcelDiv.addEventListener("pointermove" , selectionMove);
      this.outerexcelDiv.addEventListener("pointerup" , EndSelection);
  }

  // ClickEvent = (event) => {
  //   console.log(event)
  //   event.preventDefault();
  //   event.stopPropagation();
  //   var x = event.offsetX;
  //   var y = event.offsetY;
  //   [this.lx , this.ly] = this.getRowAndCol(x , y);
  //   this.PaintCell();
  // }

  PaintSelection(){
    console.log("Over here")
    var leftRowSize = 0 , rightRowSize = 0 , leftColSize = 0 , rightColSize = 0;
    
    var lr = Math.min(this.lx , this.rx);
    var lc = Math.min(this.ly , this.ry);
    var rr = Math.max(this.lx , this.rx); 
    var rc = Math.max(this.ly , this.ry);
    
    console.log(lr , lc , rr , rc)

    for(var i = 0 ; i <= rc ; i++){
        if(i < lc)
          leftColSize += this.columnWidth[i];

        rightColSize += this.columnWidth[i];
    }

    for(var i = 0 ; i <= rr ; i++){
      if(i < lr)
        leftRowSize += this.rowHeight[i];

      rightRowSize += this.rowHeight[i];
    }

    console.log(leftRowSize , leftColSize , rightRowSize , rightColSize)

    this.overlayDiv.style.display = "block"
    this.overlayDiv.style.top = leftRowSize + "px";
    this.overlayDiv.style.left = leftColSize + "px";
    this.overlayDiv.style.width = (rightColSize - leftColSize) + "px";
    this.overlayDiv.style.height = (rightRowSize - leftRowSize) + "px";

  }

  MoveCell(numb){

    if(numb == 1){
      this.lx = this.selected.selectedX - 1;
      this.ly = this.selected.selectedY;
      if(this.lx >= 0)
        this.PaintCell()
      else  
        this.lx = 0;
    }
    else if(numb == 2){
      this.lx = this.selected.selectedX + 1;
      this.ly = this.selected.selectedY;
      this.PaintCell()
    }
    else if(numb == 3){
      this.lx = this.selected.selectedX;
      this.ly = this.selected.selectedY - 1;
      if(this.ly >= 0)
        this.PaintCell();
      else  
        this.ly = 0;
    }
    else{
      this.lx = this.selected.selectedX ;
      this.ly = this.selected.selectedY + 1;
      this.PaintCell()
    }

    console.log(this.selected , this.outerexcelDiv.scrollLeft , this.excelRef.clientWidth)

    if((this.selected.width - this.outerexcelDiv.scrollLeft) > this.excelRef.clientWidth)
      this.outerexcelDiv.scrollBy(1000 , 0);
    else if(this.selected.width - this.outerexcelDiv.scrollLeft < 0)
      this.outerexcelDiv.scrollBy(-1000 , 0);
    else if((this.selected.height - this.outerexcelDiv.scrollTop) > this.excelRef.clientHeight)
      this.outerexcelDiv.scrollBy(0 , 500);
    else if(this.selected.height - this.outerexcelDiv.scrollTop < 0)
      this.outerexcelDiv.scrollBy(0 , -500);
  }

  getRowAndCol(x,y){
    // x = 180;
    // y=  80;
    var rowNo = 0;
    var colNo = 0;
    var rowOffset = (y + this.outerexcelDiv.scrollTop);
    var colOffset = (x + this.outerexcelDiv.scrollLeft);
    // console.log("Initial :- " , rowOffset , colOffset)
    
    for(var i = 0 ; i < Math.max(this.columnWidth.length , this.rowHeight.length) ; i++){
      
      if(colOffset > 0 && colOffset - this.columnWidth[i] <= 0){
        colNo = i;
      }

      if(rowOffset > 0 && rowOffset - this.rowHeight[i] <= 0){
        rowNo = i;
      }
      
      if(i < this.columnWidth.length)
        colOffset -= this.columnWidth[i];
      
      if(i < this.rowHeight.length)
        rowOffset -= this.rowHeight[i];

      // console.log(rowOffset , colOffset , i);

      if(colOffset <= 0 && rowOffset <= 0) break;
    }
    // console.log(rowNo , colNo)
    return [rowNo , colNo];
  }

  EditBox(){
    console.log(this.selected)
    this.inptDiv.style.display = "grid";
    this.inptDiv.style.width = this.columnWidth[this.ly] + "px";
    this.inptDiv.style.height = this.rowHeight[this.lx] + "px";
    this.inptDiv.style.position = "absolute";
    this.inptBox.value =  Object.values(data[this.lx])[this.ly] == undefined
    ? ""
    : Object.values(data[this.lx])[this.ly];
    this.inptBox.style.font = "bold 18px Quicksand"; 
    this.inptDiv.style.top = this.selected.height  + "px";
    this.inptDiv.style.left = this.selected.width  + "px";
    this.inptBox.style.width = "94%"
    this.inptDiv.style.alignItems = "end";
    this.inptDiv.style.border = "3.5px solid"
    this.inptBox.focus();
    // this.inptBox.style.marginLeft = 2.5 + "px"
    // this.inptBox.style.marginBottom = 2.5 + "px"
  }

  PaintCell(){
    this.inptDiv.style.display = "none"
    var colSize = 0 , rowSize = 0;
    for(var i = 0 ; i < Math.max(this.lx , this.ly) ; i++){
      if(i < this.lx)
        rowSize += this.rowHeight[i];

      if(i < this.ly)
        colSize += this.columnWidth[i];
    }
    // colSize -= this.outerexcelDiv.scrollLeft;
    // rowSize -= this.outerexcelDiv.scrollTop;

    if(this.selected.selectedX != -1 && this.selected.selectedY != -1)
      this.clearCell();

    this.excel.clearRect(colSize, rowSize, this.columnWidth[this.ly], this.rowHeight[this.lx]);
    this.excel.save();
    this.excel.beginPath();
    var val =
      Object.values(data[this.lx])[this.ly] == undefined
        ? ""
        : Object.values(data[this.lx])[this.ly];

    this.excel.lineWidth = 5
    this.excel.rect(colSize, rowSize, this.columnWidth[this.ly], this.rowHeight[this.lx]);
    this.excel.clip();
    this.excel.font = "bold 18px Quicksand";
    this.excel.fillText(val, colSize + 2, rowSize + 35);
    this.excel.stroke();
    this.excel.restore();
    this.selected.selectedX = this.lx;
    this.selected.selectedY = this.ly;
    this.selected.width = colSize ;
    this.selected.height = rowSize;
  }

  clearCell(){
    var colSize = this.selected.width;
    var rowSize = this.selected.height ;

    this.excel.clearRect(colSize, rowSize, this.columnWidth[this.selected.selectedY], this.rowHeight[this.selected.selectedX]);
    this.excel.save();
    this.excel.beginPath();
    var val =
      Object.values(data[this.selected.selectedX])[this.selected.selectedY] == undefined
        ? ""
        : Object.values(data[this.selected.selectedX])[this.selected.selectedY];

    this.excel.rect(colSize, rowSize, this.columnWidth[this.selected.selectedY], this.rowHeight[this.selected.selectedX]);
    this.excel.clip();
    this.excel.font = "bold 18px Quicksand";
    this.excel.fillText(val, colSize + 2, rowSize + 35);
    this.excel.stroke();
    this.excel.restore();
  }

  IntilizeSize() {
    var size = 0;
    for (var i = 0; i < this.columnWidth.length; i++)
      size += this.columnWidth[i];

    var rowSize = 0;
    for (var i = 0; i < this.rowHeight.length; i++)
      rowSize += this.rowHeight[i];
    this.excelDiv.style.width = size + "px";
    this.excelDiv.style.height = rowSize + "px";
    this.excelRef.width = this.divRefs.clientWidth - 18 - 44;
    this.excelRef.height = this.divRefs.clientHeight - 18 - 44;
  }

  IncreaseSizeofArray() {
    if (
      this.excelDiv.scrollWidth -
        (this.outerexcelDiv.scrollLeft + this.divRefs.clientWidth) <
      275
    ) {
      this.columnWidth = [...this.columnWidth, ...Array(50).fill(100)];
      this.IntilizeSize();
      this.drawColHeader();
    }

    if (
      this.excelDiv.scrollHeight -
        (this.outerexcelDiv.scrollTop + this.divRefs.clientHeight) <
      150
    ) {
      this.rowHeight = [...this.rowHeight, ...Array(50).fill(40)];
      this.IntilizeSize();
      this.drawrowHeader();
    }
  }

  drawColHeader() {
    var x = 0;
    this.colHeader.setTransform(1, 0, 0, 1, 0, 0);
    this.colHeader.clearRect(
      0,
      0,
      this.colHeaderRef.width,
      this.colHeaderRef.height
    );
    this.colHeader.translate(-this.outerexcelDiv.scrollLeft, 0);
    var colCount = 0;
    for (var i = 0; i < this.columnWidth.length; i++) {
      if (
        x - this.columnWidth[i] >
        this.outerexcelDiv.scrollLeft + this.outerexcelDiv.clientWidth
      )
        break;
      if (x + this.columnWidth[i] >= this.outerexcelDiv.scrollLeft) {
        this.colHeader.save();
        this.colHeader.beginPath();
        this.colHeader.rect(x, 0, this.columnWidth[i], 43);
        this.colHeader.clip();
        this.colHeader.font = "bold 18px Quicksand";
        this.colHeader.fillText(`Hello ${i}`, x + 2, 40);
        this.colHeader.restore();
        this.colHeader.stroke();
        colCount++;
      }
      x += this.columnWidth[i];
    }
  }

  drawrowHeader() {
    var x = 0;
    this.rowHeader.setTransform(1, 0, 0, 1, 0, 0);
    this.rowHeader.clearRect(
      0,
      0,
      this.rowHeaderRef.width,
      this.rowHeaderRef.height
    );
    this.rowHeader.translate(0, -this.outerexcelDiv.scrollTop);
    var rowCount = 0;
    for (var i = 0; i < this.rowHeight.length; i++) {
      if (
        x - this.rowHeight[i] >
        this.outerexcelDiv.scrollTop + this.outerexcelDiv.clientHeight
      )
        break;

      if (
        x + this.rowHeight[i] >= this.outerexcelDiv.scrollTop &&
        x - this.rowHeight[i] <=
          this.outerexcelDiv.scrollTop + this.outerexcelDiv.clientHeight
      ) {
        this.rowHeader.save();
        this.rowHeader.beginPath();
        this.rowHeader.rect(0, x, 43, this.rowHeight[i]);
        this.rowHeader.clip();
        this.rowHeader.font = "bold 18px Quicksand";
        this.rowHeader.fillText(`${i}`, 0, x + 37);
        this.rowHeader.restore();
        this.rowHeader.stroke();
      }
      x += this.rowHeight[i];
    }
  }

  drawExcel() {
    var x = 0;
    var y = 0;
    this.excel.setTransform(1, 0, 0, 1, 0, 0);
    this.excel.clearRect(0, 0, this.excelRef.width, this.excelRef.height);
    this.excel.translate(
      -this.outerexcelDiv.scrollLeft,
      -this.outerexcelDiv.scrollTop
    );
    for (var i = 0; i < this.rowHeight.length; i++) {
      if (
        x + this.rowHeight[i] >= this.outerexcelDiv.scrollTop &&
        x - this.rowHeight[i] <=
          this.outerexcelDiv.scrollTop + this.outerexcelDiv.clientHeight
      ) {
        y = 0;
        for (var j = 0; j < this.columnWidth.length; j++) {
          if (
            y + this.columnWidth[j] >= this.outerexcelDiv.scrollLeft &&
            y - this.columnWidth[j] <=
              this.outerexcelDiv.scrollLeft + this.outerexcelDiv.clientWidth
          ) {
            this.excel.save();
            this.excel.beginPath();
            var val =
              Object.values(data[i])[j] == undefined
                ? ""
                : Object.values(data[i])[j];
            this.excel.rect(y, x, this.columnWidth[j], this.rowHeight[i]);
            this.excel.clip();
            this.excel.font = "bold 18px Quicksand";
            this.excel.fillText(val, y + 2, x + 35);
            this.excel.stroke();
            this.excel.restore();
          }
          y += this.columnWidth[j];
        }
      }
      x += this.rowHeight[i];
    }

    if(this.selected.selectedX != -1 && this.selected.selectedY != -1)
        this.PaintCell();
  }
}
