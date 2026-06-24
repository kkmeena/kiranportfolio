const text = ["Data Analyst", "Python", "Freelancer", "Mysql","Power BI"];
let index = 0;
let charIndex = 0;

function type() {
    const typing = document.querySelector(".typing");

    if(charIndex < text[index].length){
        typing.textContent += text[index].charAt(charIndex);
        charIndex++;
        setTimeout(type,100);
    }else{
        setTimeout(erase,1500);
    }
}

function erase(){
    const typing = document.querySelector(".typing");

    if(charIndex > 0){
        typing.textContent =
        text[index].substring(0,charIndex-1);
        charIndex--;
        setTimeout(erase,50);
    }else{
        index = (index+1)%text.length;
        setTimeout(type,300);
    }
}

document.addEventListener("DOMContentLoaded",type);