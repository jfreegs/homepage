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
   
   //POST-IT NOTE (JAVASCRIPT)
if (localStorage["monday"]) {
    var note = localStorage["monday"];
    document.getElementById("monday").value = note;
   }
   
   function autoSave() {
    var note = document.getElementById("monday").value;
    localStorage.setItem("monday", note);
   }

   if (localStorage["tuesday"]) {
    var note = localStorage["tuesday"];
    document.getElementById("tuesday").value = note;
   }
   
   function autoSave() {
    var note = document.getElementById("tuesday").value;
    localStorage.setItem("tuesday", note);
   }
   
   if (localStorage["wednesday"]) {
    var note = localStorage["wednesday"];
    document.getElementById("wednesday").value = note;
   }
   
   function autoSave() {
    var note = document.getElementById("wednesday").value;
    localStorage.setItem("wednesday", note);
   }

   if (localStorage["thursday"]) {
    var note = localStorage["thursday"];
    document.getElementById("thursday").value = note;
   }
   
   function autoSave() {
    var note = document.getElementById("thursday").value;
    localStorage.setItem("thursday", note);
   }

   if (localStorage["friday"]) {
    var note = localStorage["friday"];
    document.getElementById("friday").value = note;
   }
   
   function autoSave() {
    var note = document.getElementById("friday").value;
    localStorage.setItem("friday", note);
   }

   if (localStorage["sat"]) {
    var note = localStorage["sat"];
    document.getElementById("sat").value = note;
   }
   
   function autoSave() {
    var note = document.getElementById("sat").value;
    localStorage.setItem("sat", note);
   }