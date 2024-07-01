//Cards Rednering using Templates in HTML

import datas from "./card-data.json" with {type: "json"}
const data =  datas.Card
const card = document.getElementById("card-demo");
const cards = document.querySelector(".cards");

for(var i = 0 ; i < data.length ; i++){

  const clone = document.importNode(card.content, true);

  //Image
  const image = clone.querySelector('.img');
  image.querySelector("img").src = data[i].img;


  //Heading
  const heading = clone.querySelector(".line-clamping")
  heading.textContent = data[i].heading;

  //Subject Grade And Plus

  const subGp = clone.querySelector(".subject")
  const plus = subGp.querySelector(".card-text-numb")

  console.log(subGp);
  console.log(plus);
  var subdata = data[i].Subject + ' | Grade' + data[i].Grade;
  subGp.textContent = subdata;
  plus.textContent = "+" + data[i].Plus;

  subGp.appendChild(plus);

  //ULT
  const unit = clone.querySelector(".unit");
  const lesson = clone.querySelector(".lesson");
  const topic = clone.querySelector(".topic");

  // unit.textContent = "Unit";
  if(data[i].Units != 0){
    const unumb = unit.querySelector(".unumb")
    unumb.textContent = "Unit";


    unit.textContent = data[i].Units;
    unit.append(unumb)

  }

  if(data[i].Lesson != 0){

    const uless = lesson.querySelector(".uless")
    uless.textContent = "Lesson";

    lesson.textContent = data[i].Lesson;
    lesson.append(uless)

  }

  if(data[i].Topics != 0){
    const utop = topic.querySelector(".utop")
    utop.textContent = "Topics";

    topic.textContent = data[i].Topics;
    topic.append(utop)
  }

  //Stud and date :-

  clone.querySelector(".studleft").textContent = data[i].Students;


  clone.querySelector(".date").textContent = "|" + "\xa0\xa0\xa0\xa0" + data[i].Date;
  
//   console.log(data[i].Teachers[0]);
  const daySelect = clone.querySelector(".prof");
  for(var j = 0 ; j < data[i].Teachers.length ; j++){
    
  daySelect.options[daySelect.options.length] = new Option(data[i].Teachers[j], data[i].Teachers[j]);
  }

  cards.appendChild(clone);

  const child = cards.querySelectorAll(".card");

  if(data[i].Units == 0 && data[i].Lesson == 0 && data[i].Topics == 0){

    child[child.length - 1].querySelector(".ult").classList.add("hideult");
  }

  if(data[i].Date == "Empty"){
        
        child[child.length - 1].querySelector(".date").classList.add("hideult");

  }

  if(data[i].Students == "Empty"){
        
    child[child.length - 1].querySelector(".studleft").classList.add("hideult");

}
if(data[i].expired == true){
    console.log("Expired")
    child[child.length-1].dataset["state"] = "expired";
}
console.log(data[i].manage)
if(data[i].favourite === false){
    child[child.length-1].querySelector(".starimg").classList.add("grayed")
}
if(data[i].manage === false){
    ToggleIcon(2);
}

if(data[i].preview === false){
    ToggleIcon(1);
}

if(data[i].grade === false){
    ToggleIcon(3);
}

if(data[i].report === false){
    ToggleIcon(4);
}

function ToggleIcon(ele){
    console.log(child[child.length - 1].querySelectorAll(".icons span")[ele-1].classList.add("icon-fade"))
}

}


