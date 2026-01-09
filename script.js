function goToRecommendation() {
  let selectedCheckBoxes = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );
  console.log(selectedCheckBoxes);
  if (selectedCheckBoxes.length == 0) {
    alert("select atleast one symptom");
    return;
  }
  let selectedsymptoms = [];
  selectedCheckBoxes.forEach(function (checkedbox) {
    selectedsymptoms.push(checkedbox.value);
  });
  console.log(selectedsymptoms);
  localStorage.setItem("symptoms", JSON.stringify(selectedsymptoms))
  //programatically navigate
  location.href="recommendation.html"
}

function showRecommendation(){
  //Retrive data from browser storage
  let symptomsArray = JSON.parse(localStorage.getItem("symptoms"))
  let symptoms = symptomsArray.join(", ")
  let severity=""
  let doctor=""
  if(symptomsArray.includes("chest pain")||symptomsArray.includes("breathing")){
    severity="SEVERE"
     doctor="EMERGENCY DOCTOR"
  }else if(symptomsArray.includes("high fever")||symptomsArray.includes("vomiting")){
    severity="MODERATE"
     doctor="SPECIALIST DOCTOR"
  }else{
    severity="MILD"
     doctor="GENERAL PHYSICIAN"
  }

  //console.log(severity,doctor)//
  document.getElementById("result").innerHTML=`
  <b>symptoms:</b>${symptoms}<br>
  <b>severity:</b>${severity}<br>
  <b>recommended doctor:</b>${doctor}
  `
   localStorage.setItem("doctor", doctor)
}  
function confirmAppointment(){
  localStorage.setItem("pname",pname.value)
  localStorage.setItem("age", age.value)
  localStorage.setItem("date", appiontmentdate.value)
  location.href="confirmation.html"
  return false
}
