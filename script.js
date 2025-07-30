let input = document.getElementById("title_input");
let p1 = document.querySelector("#story_result");
let title = document.querySelector("#main_title");
let noun1 = document.getElementById("noun");
let verb1 = document.getElementById("verb");
let adjective1 = document.getElementById("adjective");
let submitButton = document.getElementById("submit_button");
formContainer = document.querySelector(".form_container")
let clear1 = false; 
let clear2 = false;
let clear3 = false;
let clear4 = false;

input.oninput = function(){
    clear1 = true;

    title.innerHTML = input.value;
    if (input.style.value == ""){
        clear1 = false;
    } else {
        clear1 = true;
    }
   
}

noun1.oninput = function(){
    clear2 = true
    p1.innerHTML = noun1.value;
    }
        if (noun1.style.value == ""){
        clear2 = false;
    } else {
        clear2 = true;
    }

verb1.oninput = function(){
    clear3 = true;
  
    p1.innerHTML = verb1.value;
        if (verb1.style.value == ""){
        clear3 = false;
    } else {
        clear3 = true;
    }
}
adjective1.oninput = function(){
    clear4 = true;
   
    p1.innerHTML = adjective1.value;
       if (adjective1.style.value == ""){
        clear4 = false;
    } else {
        clear4 = true;
    }
}

submitButton.onclick = function(event){
    event.preventDefault()
if (clear1 == true && clear2 == true && clear3 == true && clear4 == true){
    console.log ("hi");
    formContainer.style.display = "none";
    p1.innerHTML = "Last night I ate a " + noun1.value + " and today I just had to " + verb1.value + " what a " + adjective1.value + "day!"
} else {
    alert("Please fill all the blanks")
   
}
}