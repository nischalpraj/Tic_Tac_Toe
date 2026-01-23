//selecting all required element
const selectbox = document.querySelector(".selectbox"),
  selectXbtn = document.querySelector(".playerx"),
  selectobtn = document.querySelector(".playero");

window.onload = () => {
  //when window loads
  selectXbtn.onclick = () => {
    selectbox.classList.add("hide");
  };
};
