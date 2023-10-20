function hideResults(){
    document.getElementById("swift").setAttribute("class", "hidden");
    document.getElementById("ruby").setAttribute("class", "hidden");
    document.getElementById("sharp").setAttribute("class", "hidden");
}

function handleRadio(event){
    hideResults();
    event.preventDefault();
    const foodSelect = document.querySelector("input[name='food']checked".value);
    const seasonSelect = document.querySelector("input[name='season']checked".value);
    const jobSelect = document.querySelector("input[name='jobs']checked".value);
    const bookSelect = document.querySelector("input[name='books']checked".value);
    const picSelect = document.querySelector("input[name='picture']checked".value);
    console.log();
    if ((foodSelect==="pizza")&&(seasonSelect==="autumn")&&(jobSelect==="Dev")&&(bookSelect==="fiction")&&(picSelect==="quokka")){ 
        document.getElementById("swift").removeAttribute("class"); 
    } else if((foodSelect==="fries")&&(seasonSelect==="summer")&&(jobSelect==="web")&&(bookSelect==="horror")&&(picSelect==="raccoon")){ 
        document.getElementById("sharp").removeAttribute("class");
    } else if (())
  }

window.addEventListener("load", function(){
    document.getElementById("radio-form").addEventListener("submit", handleRadio);
});