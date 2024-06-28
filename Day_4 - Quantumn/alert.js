var data;
fetch("./card-data.json")
  .then(async (response) => {
    await response.json().then(async (resp) => {
        console.log(resp.alert)
        data = await resp.alert;
    });
  })

setTimeout(() => {
console.log(data)
const alrtbox = document.querySelector(".alertbox");

function alertData() {
  console.log(alrtbox);
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

const div = `<div class="msg">
    <span class="alrtmsg">License for Introduction to Algebra has been assigned to your school
        <span class="alrtimg"> <img src="./Icons/dnd.svg" alt="" srcset=""></span>
    </span>
    <div class="alrttime">
        15-Sept-2018 at 7:21 pm
    </div>
</div>`;
}, 1000);