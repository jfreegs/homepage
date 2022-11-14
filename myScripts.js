//CLOCK SCRIPT
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    
    m = checkTime(m);
    
    document.getElementById('clock').innerHTML =  h + ":" + m;
    setTimeout(startTime, 1000);
   }
   
   function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
   }
   
  //JACKIE'S NOTES
if (localStorage["monday"]) {
    var monday = localStorage["monday"];
    document.getElementById("monday").value = monday;
  } 
  function saveMonday() {
    var monday = document.getElementById("monday").value;
    localStorage.setItem("monday", monday);
  }
  
  if (localStorage["tuesday"]) {
    var tuesday = localStorage["tuesday"];
    document.getElementById("tuesday").value = tuesday;
  }
  function saveTuesday() {
    var tuesday = document.getElementById("tuesday").value;
    localStorage.setItem("tuesday", tuesday);
  }
  
  if (localStorage["wednesday"]) {
    var wednesday = localStorage["wednesday"];
    document.getElementById("wednesday").value = wednesday;
  }
  function saveWednesday() {
    var wednesday = document.getElementById("wednesday").value;
    localStorage.setItem("wednesday", wednesday);
  }
  
  if (localStorage["thursday"]) {
    var thursday = localStorage["thursday"];
    document.getElementById("thursday").value = thursday;
  }
  function saveThursday() {
    var thursday = document.getElementById("thursday").value;
    localStorage.setItem("thursday", thursday);
  }
  
  if (localStorage["friday"]) {
    var friday = localStorage["friday"];
    document.getElementById("friday").value = friday;
  }
  function saveFriday() {
    var friday = document.getElementById("friday").value;
    localStorage.setItem("friday", friday);
  }
  if (localStorage["weekend"]) {
    var weekend = localStorage["weekend"];
    document.getElementById("weekend").value = weekend;
  }
  function saveWeekend() {
    var weekend = document.getElementById("weekend").value;
    localStorage.setItem("weekend", weekend);
  }