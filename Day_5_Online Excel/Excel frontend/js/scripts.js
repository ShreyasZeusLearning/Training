import {Excel} from "./Excel.js";
const divRef = document.querySelector(".canvasDiv");

const excel = new Excel(divRef);

excel.drawColHeader();

// async function FetchData(){
//     const respData = await fetch("./data.json");
//     const data = await respData.json();
//     console.log(data)
// }

// window.addEventListener("load" , () => {
//     FetchData();
// })