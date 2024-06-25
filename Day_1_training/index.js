const text = document.getElementById("heading");
const txt = text.innerHTML
const color = ["violet" , "indigo" , "blue" , "green" , "yellow" , "orange" , "red"];

var pos = 0;

function changeColor(pos){

    var numb = pos;
    var colorTxt = '';
    // console.log(txt.length)
    console.log(list)
    for(var i = 0 ; i < txt.length ; i++){

        if(numb > 6)
            numb = 0;
        // console.log(color[numb])
        colorTxt += '<span style="color : ' + color[numb] + '">' + txt[i] + `</span>`
        numb++;
        // console.log(txt[i])
    } 

    return colorTxt;
    
}

function mainFunc(){
    if(pos > 6) pos = 0;
    const colortxt = changeColor(pos);
    ++pos;
    text.innerHTML = colortxt;
}

setInterval(mainFunc , 1000);

var list = [];

const Tasks = document.getElementById("tasks");

const btn = document.getElementById('submit').addEventListener("click" , async () => {
    const data = await document.getElementById('tsk').value;
    console.log(data)
    list.push(data);
    const ele_data = display();

    console.log(ele_data)
    Tasks.innerHTML = ele_data;
})

function display() {

    console.log(list.length)
    var element = '<table>'
        list.forEach((paragraph) => {
            element += '<span style="display : flex; flexDirection : coloumn; marginTop : 15px; fontSize : 18px>' + paragraph + '</span>' 
        });

        element += '</table>'


    return element;
}