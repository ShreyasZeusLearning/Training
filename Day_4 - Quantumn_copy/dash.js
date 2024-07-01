//SideBar Rendering
const sidebar = document.querySelector(".sidebar");
const down_arrow = document.querySelectorAll(".menu-down");
function SideBar() {
  if(sidebar.dataset["state"] == "closed" || sidebar.dataset["state"] == "open"){
    nottbox.dataset["not"] = "closed";
    alrtbox.dataset["alert"] = "closed"
    console.log("Closed in notbox")
  }
    sidebar.dataset["state"] = sidebar.dataset["state"] == "clicked" ? "closed" : "clicked";
}

sidebar.addEventListener("mouseover" , () => {
  console.log("over");
  if (sidebar.dataset["state"] != "clicked") {
    sidebar.dataset["state"] = "open";
  }
})

sidebar.addEventListener("mouseleave" , () => {
  if (sidebar.dataset["state"] != "clicked") {
    sidebar.dataset["state"] = "closed";
  }
})

function menuHover(){
  if(sidebar.dataset["state"] != "clicked"){
    sidebar.dataset["state"] = "open";
  }
}

function menuLeave(){
  if(sidebar.dataset["state"] != "clicked"){
    sidebar.dataset["state"] = "closed"
  }
}

const navContent = [
  ["Course Catalog"],
  ["Profile" , "Progress"],
  ["Grade" , "Semester"],
  ["Profile" , "Students"]
]

const list = document.querySelectorAll(".droplinks");

function start(ul){
  ul.style.width = "0px";
  ul.style.height = "0px";
  ul.style.opacity = "0";
}

async function close(ul){
  ul.style.width = "max-content";
  ul.style.opacity = "1"
  ul.style.height = ul.scrollHeight + "px";
  ul.style.visibility = "visible"
}


function dropdown(ele){
  const image = list[ele-1].querySelector(".arrow-div")
  console.log(image)

  if(image.classList.length == 1){
    const ul = document.createElement('ul');
    ul.style.transition = "height 0.6s ease-in , opacity 0.6s ease-in"

    for(var i  = 0 ; i < navContent[ele-1].length ; i++){
      const li = document.createElement('li');
      li.innerHTML = navContent[ele-1][i];
      li.classList.add("clicked-content")
      image.classList.add("rotate")
      ul.appendChild(li);
    }

    list[ele-1].appendChild(ul)
    start(ul)
    console.log(ul.scrollHeight)
    close(ul)
  }
  else{
    const un_ol = list[ele-1].querySelector("ul")
    start(un_ol);
    list[ele-1].classList.remove("clicked");
    image.classList.remove("rotate")
    list[ele-1].removeChild(un_ol);
  }
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
  event.target.classList.add("active");
}


function dash_cont(event){
    console.log(event.target)
    handlelinks()
  event.target.classList.add("active");
}

function dash_user(event){
    console.log(event.target)
    handlelinks()
  event.target.classList.add("active");
}

function dash_rep(event){
    console.log(event.target)
    handlelinks()
  event.target.classList.add("active");
}

function dash_admin(event){
    console.log(event.target)
    handlelinks()
  event.target.classList.add("active");
}

