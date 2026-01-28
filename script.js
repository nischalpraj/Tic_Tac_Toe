//selecting all required element
const selectbox = document.querySelector(".selectbox"),
  selectXbtn = selectbox.querySelector(".playerx"),
  selectobtn = selectbox.querySelector(".playero"),
  allbox = document.querySelectorAll("section span"),
  players = document.querySelector(".players"),
  playboard = document.querySelector(".playboard"),
  resultbox = document.querySelector(".resultbox"),
  wontext = resultbox.querySelector(".wintext"),
  replaybutton= resultbox.querySelector("button");

window.onload = () => {
  //when window loads

  for (let i = 0; i < allbox.length; i++) {
    //add onclickt attritbute on all available section's span
    allbox[i].setAttribute("onclick", "clickedbox(this)");
  }
  selectXbtn.onclick = () => {
    selectbox.classList.add("hide"); //hide the pplay box when x is clicked
    playboard.classList.add("show"); //show playboard when x is clicked
  };
  selectobtn.onclick = () => {
    selectbox.classList.add("hide");
    playboard.classList.add("show");
    players.classList.add("active", "player");
  };
};

let playerXicon = "fa-solid fa-x";
let player0icon = "fa-regular fa-circle";
let playersign = "X"; //suppose player sign is X
let runBot = true;

//user click function
function clickedbox(element) {
  if (players.classList.contains("player")) {
    element.innerHTML = `<i class="${player0icon}"></i>`; //adding circle icon at user clicked element
    players.classList.add("active");
    playersign = "O";
    element.setAttribute("id", playersign);
  } else {
    element.innerHTML = `<i class="${playerXicon}"></i>`; //adding cross icon at user clicked element
    players.classList.add("active");
    element.setAttribute("id", playersign);
  }
  selectWinner();
  playboard.style.pointerEvents = "none";//once user select the box the user cannot select another box until bot selects the box
  element.style.pointerEvents = "none";
  let randomDelaytime = (Math.random() * 1000 + 200).toFixed(); //generating random delay time to make bot delay randomly to select box
  setTimeout(() => {
    bot(runBot); //calling bot function
  }, randomDelaytime); //passing random delay time
}

//bot click function
function bot(runBot) {
  if(runBot){playersign = "O";
  let array = []; //creating empty array
  for (let i = 0; i < allbox.length; i++) {
    if (allbox[i].childElementCount == 0) {
      //if span has no any child element
      array.push(i); //inserting unclicked or unselected box inside array means that span has no children
    }
  }
  let randomBox = array[Math.floor(Math.random() * array.length)];
  if (array.length > 0) {
    if (players.classList.contains("player")) {
      allbox[randomBox].innerHTML = `<i class="${playerXicon}"></i>`; //adding cross icon at user clicked element
      players.classList.add("active");
      playersign = "X";
      allbox[randomBox].setAttribute("id", playersign);
    } else {
      allbox[randomBox].innerHTML = `<i class="${player0icon}"></i>`; //adding circle icon at user clicked element
      players.classList.remove("active");
      allbox[randomBox].setAttribute("id", playersign);
    }
    selectWinner();
  }
  allbox[randomBox].style.pointerEvents = "none";//once bot select any box user cannot seslect same box
  playboard.style.pointerEvents = "auto";
  playersign = "X";}
}


function getClass(idname){
  return document.querySelector(".box" + idname).id;// returning id name
}

function checkClasses(val1,val2,val3,sign) {
  if (getClass(val1) == sign && getClass(val2) == sign && getClass(val3) == sign) {
    return true;
  }
}

function selectWinner() {
  if (checkClasses(1, 2, 3, playersign) || checkClasses(4, 5, 6, playersign) || checkClasses(7, 8, 9, playersign) || checkClasses(1, 4, 7, playersign) || checkClasses(2, 5, 8, playersign) || checkClasses(3, 6, 9, playersign) || checkClasses(1, 5, 9, playersign) || checkClasses(7, 5, 3, playersign)) {
    console.log(playersign + " " + "is the winner");
    //once match won by someone then stop the bot
    runBot = false;
    bot(runBot);
    setTimeout(() => {
      playboard.classList.remove("show");
      resultbox.classList.add("show");

    }, 500)
    
    wontext.innerHTML = `Player <p>${playersign}</p> won the match!`;
  }
  else {
    //if match is drawn
    if (getClass(1) != "" && getClass(2) != "" && getClass(3) != "" && getClass(4) != "" && getClass(5) != "" && getClass(6) != "" && getClass(7) != "" && getClass(8) != "" && getClass(9) != "") {
        runBot = false;
        bot(runBot);
        setTimeout(() => {
          playboard.classList.remove("show");
          resultbox.classList.add("show");
        }, 500);

        wontext.textContent = `It's a Draw!`;
    }
  }
}