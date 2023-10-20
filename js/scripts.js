function hideResults(){
    document.getElementById("swift").setAttribute("class", "hidden");
    document.getElementById("ruby").setAttribute("class", "hidden");
    document.getElementById("sharp").setAttribute("class", "hidden");
  
}

function langSelect(event){
    hideResults();
    event.preventDefault();
    const careerInput = document.getElementById("question1").value;
    const seasonInput = document.getElementById("question2").value;
    const foodInput = document.getElementById("question3").value;
    const bookInput = document.getElementById("question4").value;
    const vacationInput = document.getElementById("question5").value;
    if (careerInput === "developer"&& foodInput==="pizza" && bookInput==="fiction" && seasonInput==="summer" &&vacationInput==="hawaii"){
        document.getElementById("sharp").removeAttribute("class");
    } else if (careerInput=== "dev Ops" && foodInput==="sushi" && bookInput==="horror" && seasonInput==="winter" &&vacationInput==="spain") {
    document.getElementById("swift").removeAttribute("class");
    } else if (careerInput === "backend developer" && foodInput ==="pizza"&& bookInput==="mystery"&&seasonInput==="winter"&&vacationInput==="Italy"){
    document.getElementById("swift").removeAttribute("class");
    } else if (careerInput === "cyber security"&&foodInput==="pizza"&&bookInput==="fiction"&& seasonInput==="spring"&&vacationInput==="Mexico")
        document.getElementById("sharp").removeAttribute("class");
    else document.getElementById("ruby").removeAttribute("class");
}

window.addEventListener("load",function() {
    const form = document.getElementById("questions");
    form.addEventListener("submit", langSelect)
});