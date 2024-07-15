var data = await fetch("./js/data.json");
data = await data.json();
console.log(data);

export class Excel {
  index = 0;

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

    this.excelDiv = document.createElement("div");
    this.excelDiv.appendChild(this.excelRef);

    this.outerexcelDiv.appendChild(this.excelDiv);

    this.colHeaderRef.classList.add("colHeader");
    this.rowHeaderRef.classList.add("rowHeader");
    this.excelRef.classList.add("excel");
    this.outerexcelDiv.classList.add("outer-excel");
    this.excelDiv.classList.add("inner-excel");
    this.btn.classList.add("btn");

    divRef.appendChild(this.btn);
    divRef.appendChild(this.colHeaderRef);
    divRef.appendChild(this.rowHeaderRef);
    divRef.appendChild(this.outerexcelDiv);

    this.divRefs = divRef;

    // Object.keys()
    (event) => this.ChangeWidthAndHeight(event, divRef);

    this.IntilizeSize();
    
    this.rowHeaderRef.width = 43;
    this.rowHeaderRef.height = divRef.clientHeight-44;
    this.colHeaderRef.height = 43;
    this.colHeaderRef.width = divRef.clientWidth - 44;

    this.outerexcelDiv.addEventListener("scrollend", () => {
            this.IncreaseSizeofArray()
            this.drawColHeader();
            this.drawrowHeader();
            this.drawExcel();
        }
    );

    this.outerexcelDiv.addEventListener("scroll", () => {
        this.drawColHeader();
        this.drawrowHeader();
        this.drawExcel();
        }
      );
  }

  IntilizeSize() {
    var size = 0;
    for(var i = 0 ; i < this.columnWidth.length ; i++)
        size += this.columnWidth[i];

    var rowSize = 0;
    for(var i = 0 ; i < this.rowHeight.length ; i++)
        rowSize += this.rowHeight[i];
    this.excelDiv.style.width = size + "px";
    this.excelDiv.style.height = rowSize + "px";
    this.excelRef.width = this.divRefs.clientWidth - 18 - 44;
    this.excelRef.height = this.divRefs.clientHeight - 18 - 44;
  }

  IncreaseSizeofArray(){
    if (this.excelDiv.scrollWidth - (this.outerexcelDiv.scrollLeft + this.divRefs.clientWidth) < 275){
        this.columnWidth = [...this.columnWidth, ...Array(50).fill(100)];
        this.IntilizeSize();
        this.drawColHeader();
    }

    if (this.excelDiv.scrollHeight - (this.outerexcelDiv.scrollTop + this.divRefs.clientHeight) < 150){
        this.rowHeight = [...this.rowHeight, ...Array(50).fill(40)];
        this.IntilizeSize();
        this.drawrowHeader();
    }
  }

  drawColHeader() {
    var x = 0;
    this.colHeader.setTransform(1, 0, 0, 1, 0, 0);
    this.colHeader.clearRect(0,0,this.colHeaderRef.width, this.colHeaderRef.height)
    this.colHeader.translate(-this.outerexcelDiv.scrollLeft,0)
    var colCount = 0;
    for (var i = 0; i < this.columnWidth.length; i++) {
    if(x + this.columnWidth[i] >= this.outerexcelDiv.scrollLeft && x - this.columnWidth[i] <= this.outerexcelDiv.scrollLeft + this.outerexcelDiv.clientWidth)
        {
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
    this.rowHeader.clearRect(0,0,this.rowHeaderRef.width, this.rowHeaderRef.height)
    this.rowHeader.translate(0 , -this.outerexcelDiv.scrollTop)
    var rowCount = 0;
    for (var i = 0; i < this.rowHeight.length; i++) {
    if(x + this.rowHeight[i] >= this.outerexcelDiv.scrollTop && x - this.rowHeight[i] <= this.outerexcelDiv.scrollTop + this.outerexcelDiv.clientWidth)
        {
            this.rowHeader.save();
            this.rowHeader.beginPath();
            this.rowHeader.rect(0, x, 43 , this.rowHeight[i]);
            this.rowHeader.clip();
            this.rowHeader.font = "bold 18px Quicksand";
            this.rowHeader.fillText(`${i}`, 0 , x + 20);
            this.rowHeader.restore();
            this.rowHeader.stroke();
        }
        x += this.rowHeight[i];
    }
  }

  drawExcel(){
    var x = 0;
    this.excel.setTransform(1, 0, 0, 1, 0, 0);
    this.excel.clearRect(0,0,this.excelRef.width, this.excelRef.height)
    this.excel.translate(-this.outerexcelDiv.scrollLeft , -this.outerexcelDiv.scrollTop)
    for(var i = 0 ; i < this.rowHeight.length ; i++){
        var y = 0;
        for(var j = 0 ; j < this.columnWidth.length;j++){
            this.excel.save();
            this.excel.beginPath();
            this.excel.rect(y , x  , this.columnWidth[j] , this.rowHeight[i]);
            this.excel.clip();
            this.excel.stroke();
            this.excel.restore();
            y += this.columnWidth[j];
        }
        x += this.rowHeight[i]
    }
  }
}
