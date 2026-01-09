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
//Language selection 
const languageData={
  en:{
    title:"My Virtual Hospital",
    desc:"Online Health Assistance (Educational)",
    welcome:"Welcome",
    p:"This is a Virtual hospital that helps you assess symptom severity and book appointments.",
    start:"start health check"
  },
  te:{
    title:"నా వర్చువల్ హాస్పిటల్",
    desc:"ఆన్‌లైన్ ఆరోగ్య సహాయం (విద్య)",
    welcome:"స్వాగతం",
    p:"ఇది ఒక వర్చువల్ ఆసుపత్రి, ఇది సలహా తీవ్రత అంచనా వేయడానికి మరియు నియామకాలను బుక్ చేయడానికి సహాయం చేస్తుంది.",
    start:"ఆరోగ్య తనిఖీని ప్రారంభించండి"
  }
}
function setLanguage(lang){
  document.getElementById("title").innerHTML=languageData[lang].title;
  document.getElementById("desc").innerHTML=languageData[lang].desc;
  document.getElementById("welcome").innerHTML=languageData[lang].welcome;
  document.getElementById("p").innerHTML=languageData[lang].p;
  document.getElementById("start").innerHTML=languageData[lang].start;
}
