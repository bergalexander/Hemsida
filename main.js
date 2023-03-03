// const body = document.body;

// const personInfo = document.querySelector("#contact-info");
const copy = document.querySelectorAll(".copy-pic");

copy.forEach((element) =>{
    element.addEventListener("click", clickCopy);
    element.addEventListener("mouseover", ReturnHoverTextValue);
});

function clickCopy(event){
    let imgClicked = event.target;

    let parentElement = imgClicked.parentElement;
    let copy = parentElement.querySelector(".copy");

    let link = parentElement.querySelector("a")

    if (link==undefined){
        navigator.clipboard.writeText(parentElement.querySelector(".copy-value").innerText);
    }
    else{
        navigator.clipboard.writeText(link.href);
    }

    copy.innerText ="Kopierad ✔😃";
    
}

function ReturnHoverTextValue(event){
    let imgClicked = event.target;
  
    let parentElement = imgClicked.parentElement;
    let copy = parentElement.querySelector(".copy");
  
    copy.innerText = "Klicka för att kopiera"
  
  }