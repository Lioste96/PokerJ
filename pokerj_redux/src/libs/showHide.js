function hide(){
  var elem = document.getElementById("changeButton");
  elem.style.display = "none";
}

function show(){
  var elem = document.getElementById("changeButton");
  if (elem.style.display === "none"){
    elem.style.display = "inline";

  }
}

export { hide, show };
