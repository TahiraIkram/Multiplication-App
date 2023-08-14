const num1= Math.floor(Math.random()*11);
const num2= Math.floor(Math.random()*11);
const questionEl=document.getElementById("question");
const inputEl = document.getElementById("input");
const scoreEl= document.getElementById("score")
const formEl = document.getElementById("form");
const correctAns=num1*num2;
questionEl.innerHTML= (`what is ${num1} multiply by ${num2} ?`);
let score=JSON.parse(localStorage.getItem("score"));
 if(!score){
    score=0;
 }
scoreEl.innerHTML=`score:${score}`;

formEl.addEventListener("submit", () => {
    const userAns= +inputEl.value;
    if(userAns===correctAns){
    score++
    updateStorage()
}else{
    score --
    updateStorage()
}
})

function updateStorage(){
    localStorage.setItem("score", JSON.stringify(score))
}