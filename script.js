//selecting all required element
const selectbox = document.querySelector(".selectbox"),
  selectXbtn = selectbox.querySelector(".playerx"),
  selectobtn = selectbox.querySelector(".playero"),
  playboard = document.querySelector(".playboard");

window.onload = () => {
  //when window loads
  selectXbtn.onclick = () => {
      selectbox.classList.add("hide");//hide the pplay box when x is clicked
      playboard.classList.add("show");//show playboard when x is clicked
  };
  selectobtn.onclick = () => {
    selectbox.classList.add("hide");
  };
};
