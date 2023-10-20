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
    } else if (careerInput=== "Dev Ops" && foodInput==="sushi" && bookInput==="horror" && seasonInput==="winter" &&vacationInput==="spain") {
    document.getElementById("swift").removeAttribute("class");
     } else document.getElementById("ruby").removeAttribute("class");
     console.log();

}

window.addEventListener("load",function() {
    const form = document.getElementById("questions");
    form.addEventListener("submit", langSelect)
});