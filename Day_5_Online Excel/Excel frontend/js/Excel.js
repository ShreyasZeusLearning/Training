var data = await fetch("./js/data.json");
data = await data.json();
console.log(data);

export class Excel {
    
    columnWidth = [135 , 135 , 135 , 135 , 135 , 235 , 135 , 235, 135 , 135 , 135 , 135 , 135 , 135];

    constructor(divRef){
        this.rowHeaderRef = document.createElement("canvas");
        this.colHeaderRef = document.createElement("canvas");
        this.excelRef = document.createElement("canvas");
        this.btn = document.createElement("div");

        this.rowHeader = this.rowHeaderRef.getContext("2d");
        this.colHeader = this.colHeaderRef.getContext("2d");
        this.excel = this.excelRef.getContext("2d");

        const excelDiv = document.createElement("div");
        excelDiv.appendChild(this.excelRef);


        this.excelRef.width = window.innerWidth;
        this.excelRef.height = window.innerHeight;

        this.colHeaderRef.classList.add("colHeader");
        this.rowHeaderRef.classList.add("rowHeader");
        this.excelRef.classList.add("excel");
        this.btn.classList.add("btn");

        divRef.appendChild(this.btn);
        divRef.appendChild(this.colHeaderRef);
        divRef.appendChild(this.rowHeaderRef);
        divRef.appendChild(excelDiv);

        Object.keys()

        this.rowHeaderRef.width = 43;
        this.rowHeaderRef.height = divRef.offsetHeight;
        this.colHeaderRef.height = 43;
        this.colHeaderRef.width = divRef.offsetWidth;

        divRef.addEventListener("scroll" , (event) => this.ChangeWidthAndHeight(event , divRef));
    }

    ChangeWidthAndHeight(e , divRef){
        // console.log(this.colHeaderRef)
        // console.log(e.target.scrollLeft)
        // console.log(window.scrollY);
        // this.colHeaderRef.width += (this.colHeaderRef.width - e.target.scrollLeft);
        // this.drawColHeader(this.colHeaderRef.width + e.target.scrollLeft);

        console.log(this.colHeaderRef.width + e.target.scrollLeft);
    }

    drawColHeader(){
        var x = 0;
        for(var i = 0 ; i < this.columnWidth.length ; i++){
            this.colHeader.save();
            this.colHeader.beginPath();
            this.colHeader.rect(x, 0, this.columnWidth[i], 43);
            this.colHeader.clip();
            this.colHeader.font = "bold 18px Quicksand";
            this.colHeader.fillText("Hello", x + 2, 40);
            x += this.columnWidth[i];
            this.colHeader.restore();
            this.colHeader.stroke();
        }
    }
 
    drawrowHeader(){

    }
}