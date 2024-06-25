const sidebar = document.querySelector(".sidebar")

function SideBar() {
    console.log("Hello");
    console.log(sidebar)
    sidebar.dataset["state"] = sidebar.dataset["state"] == "open" ? "closed" : "open";
}


function handlelinks(){
    let btn =  document.querySelectorAll('.link-tags a');
    btn.forEach((ele) => {
        if(ele.classList == "active"){
            ele.classList.remove("active")
        }
    })
}

function dash_link(event){
    console.log(event.target)
    handlelinks()
//     var element = document.getElementById("myDIV");
  event.target.classList.add("active");
}


function dash_cont(event){
    console.log(event.target)
    handlelinks()
//     var element = document.getElementById("myDIV");
  event.target.classList.add("active");
}

function dash_user(event){
    console.log(event.target)
    handlelinks()
//     var element = document.getElementById("myDIV");
  event.target.classList.add("active");
}

function dash_rep(event){
    console.log(event.target)
    handlelinks()
//     var element = document.getElementById("myDIV");
  event.target.classList.add("active");
}

function dash_admin(event){
    console.log(event.target)
    handlelinks()
//     var element = document.getElementById("myDIV");
  event.target.classList.add("active");
}

function reduceText(itemText) {
  const maxLengthOfLink = 120 // maximum no. of characters you want your text to have
  const itemTextArray = itemText.split(' ') // splitting the string into an array
  let reducedFlag = -1 // using a flag to identify if we have acquired the correct length and then to add the ellipsis

  return itemTextArray.reduce((accumulator, currentVal) => {
    if (accumulator.length + currentVal.length > maxLengthOfLink) {
      reducedFlag++
      return reducedFlag ? accumulator : `${accumulator}...`
    } else {
      return `${accumulator} ${currentVal}`
    }
  })
  //you can read more about the reduce function on mozilla.org
}
