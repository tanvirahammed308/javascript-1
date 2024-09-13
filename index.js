 const firstNumberIn=document.getElementById("firstNumber")
 

const secondNumberIn=document.getElementById("secondNumber")

const result=document.getElementById("result")

const btnMultiply=document.getElementById("btnMultiply")
const btnDivided=document.getElementById("btnDivided")

btnMultiply.addEventListener("click",function(){
     // Convert input values to numbers
    const firstNum=parseFloat(firstNumberIn.value);
    const secondNum=parseFloat(secondNumberIn.value)
    const calculation=firstNum*secondNum;
    result.innerHTML=calculation


}

) 
btnDivided.addEventListener("click",function(){
    const firstNumber=parseFloat(firstNumberIn.value)
    const secondNumber=parseFloat(secondNumberIn.value)
    const calculation=firstNumber/secondNumber 
     result.innerHTML=calculation
})

