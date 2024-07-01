var data;
var noti_data;
fetch("./card-data.json")
  .then(async (response) => {
    await response.json().then(async (resp) => {
        console.log(resp.alert)
        data = await resp.alert;
        noti_data = resp.announcements;
        render();
        not_render();
    });
  });


const alrtbox = document.querySelector(".alertbox");
const nottbox = document.querySelector(".notbox");


alrtbox.addEventListener("mouseover" , () => {
  console.log("over");
  if (alrtbox.dataset["alert"] != "clicked") {
    alrtbox.dataset["alert"] = "open";
  }
})

alrtbox.addEventListener("mouseleave" , () => {
  if (alrtbox.dataset["alert"] != "clicked") {
    alrtbox.dataset["alert"] = "closed";
  }
})

function alertData() {
  console.log(alrtbox);
  if(alrtbox.dataset["alert"] == "closed" || alrtbox.dataset["alert"] == "open"){
    nottbox.dataset["not"] = "closed";
    sidebar.dataset["state"] = "closed";
    console.log("Closed in notbox")
  }
  alrtbox.dataset["alert"] =
    alrtbox.dataset["alert"] == "clicked" ? "closed" : "clicked";
}

function menuHovers() {
  console.log("Hovers");
  if (alrtbox.dataset["alert"] != "clicked") {
    alrtbox.dataset["alert"] = "open";

    console.log(alrtbox.dataset["alert"]);
  }
}

function menuLeaves() {
  if (alrtbox.dataset["alert"] != "clicked") {
    alrtbox.dataset["alert"] = "closed";
  }
}

function render(){

  const messageDiv = document.getElementById("messages")
  console.log(messageDiv)

  for(var i = 0 ; i < data.length ; i++){
    const div = `
    ${data[i].new === true ? `<div class="msg">` : `
      <div class="msg hovered_notmsg">
    `}
      <span class="alrtmsg">${data[i].message}
      ${data[i].new === true ? `<span class="alrtimg"> <img src="./Icons/check_circle.svg" alt="" srcset=""></span>` : `
        <span class="alrtimg"> <img src="./Icons/dnd.svg" alt="" srcset=""></span>
      `}
      </span>
      ${data[i].class === "Empty" ? '' : `
        <div class="courses">
          <span class="course-label">Course :</span> ${data[i].class}
        </div>
      `}
      <div class="alrttime">
        ${data[i].date}
      </div>
    </div>
  `;

  messageDiv.innerHTML += div;    
  }
}

nottbox.addEventListener("mouseover" , () => {
  console.log("over");
  if (nottbox.dataset["not"] != "clicked") {
    nottbox.dataset["not"] = "open";
  }
})

nottbox.addEventListener("mouseleave" , () => {
  if (nottbox.dataset["not"] != "clicked") {
    nottbox.dataset["not"] = "closed";
  }
})

function notData() {
  if(nottbox.dataset["not"] == "closed" || nottbox.dataset["not"] == "open"){
    alrtbox.dataset["alert"] = "closed";
    sidebar.dataset["state"] = "closed";
    console.log("Closed in alrtbox")
  }
  nottbox.dataset["not"] =
  nottbox.dataset["not"] == "clicked" ? "closed" : "clicked";
    console.log(nottbox);

}

function notHovers() {
  console.log("Hovers");
  if (nottbox.dataset["not"] != "clicked") {
    nottbox.dataset["not"] = "open";

    console.log(nottbox.dataset["not"]);
  }
}

function notLeaves() {
  if (nottbox.dataset["not"] != "clicked") {
    nottbox.dataset["not"] = "closed";
  }
}

function not_render(){

  const notmessageDiv = document.getElementById("not_messages")
  console.log(notmessageDiv)
  console.log(noti_data)

  for(var i = 0 ; i < noti_data.length ; i++){
  
  const not_div = `
              ${noti_data[i].new === true ? `<div class="notmsg">` : `
                <div class="notmsg hovered_notmsg">
              `}
                <div class="notheading">
                    <div class="pname">PA : ${noti_data[i].name}</div>
                    ${noti_data[i].new === true ? `<span class="alrtimg"> <img src="./Icons/check_circle.svg" alt="" srcset=""></span>` : `
                      <span class="alrtimg"> <img src="./Icons/dnd.svg" alt="" srcset=""></span>
                    `}
                </div>
                <span class="alrtmsg">${noti_data[i].content}
                </span>
                ${noti_data[i].course === "Empty" ? '' : `
                  <div class="courses">
                    <span class="course-label">Course :</span> ${noti_data[i].course}
                  </div>
                `}
                <div class="notbottom">
                  ${noti_data[i].attachments == 0 ? '' : `
                           <span><img src="./Icons/attach.svg" alt="" srcset="">${noti_data[i].attachments} files are attached</span>
                         `}
                    <div class="alrttime">
                        ${noti_data[i].timestamp}
                    </div>
                </div>
            </div>`

  console.log(not_div)
  notmessageDiv.innerHTML += not_div;


    console.log(not_div)
    
  }
}