const body = document.querySelector("body");
const lightBtn = document.getElementById("light");
const darkBtn = document.getElementById("dark");

lightBtn.addEventListener("click", function (e){
   body.style.backgroundColor = "white";
});

darkBtn.addEventListener("click", function (e){
   body.style.backgroundColor = "black";
});

