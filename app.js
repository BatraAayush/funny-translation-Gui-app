var input = document.querySelector(".input-txt");
var clearBtn = document.querySelector(".clear-btn");
var translateBtn = document.querySelector(".translate-btn");
var outputTxt = document.querySelector(".output-txt");
var errorMsg = document.querySelector("#error-msg");

var serverURL = "https://api.funtranslations.com/translate/ferb-latin.json"

function clearHandler(){
    input.value="";
    outputTxt.innerText="";

}

function constURL(text){
    return(serverURL+"?text="+text)
}

function errHandler(err){
    console.log("error: " + err);
    errorMsg.innerHTML = "ERROR! No output returned from API. May be no of api calls exceded. Please try again after an hour.";
}

function translateHandler(){
    var inputValue = input.value
    if(inputValue === '') {
        errorMsg.innerHTML = "Please add input!"
    } else {
        fetch(constURL(inputValue))
        .then(response => response.json())
        .then(json => outputTxt.innerText = json.contents.translated)
        .catch(errHandler)

    }

}

translateBtn.addEventListener("click" , translateHandler);
clearBtn.addEventListener("click", clearHandler);
