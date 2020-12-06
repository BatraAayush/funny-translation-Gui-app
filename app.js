var input = document.querySelector(".input-txt");
var clearBtn = document.querySelector(".clear-btn");
var translateBtn = document.querySelector(".translate-btn");
var outputTxt = document.querySelector(".output-txt");

var serverURL = "https://api.funtranslations.com/translate/ferb-latin.json"

function clearHandler(){
    input.value="";
    outputTxt.innerText="";
    console.log("xyz");

}

function constURL(text){
    return(serverURL+"?text="+text)
}

function translateHandler(){
    var inputValue = input.value
    fetch(constURL(inputValue))
    .then(response => response.json())
    .then(json => outputTxt.innerText = json.contents.translated)
}

translateBtn.addEventListener("click" , translateHandler);
clearBtn.addEventListener("click", clearHandler);
