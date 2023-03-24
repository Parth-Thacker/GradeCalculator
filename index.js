let mathsMarks = 0
let englishMarks = 0
let physicsMarks = 0
let chemestryMarks = 0
let computerMarks = 0
const maths = document.getElementById("maths")
const english = document.getElementById("english")
const physics = document.getElementById("physics")
const chemistry = document.getElementById("chemistry")
const computer = document.getElementById("computer")
const btn = document.getElementById("btn")
let Total = document.getElementById("total")
//console.log(total);
let Average = document.getElementById("average")
//console.log(average);
let Grade = document.getElementById("grade")
//console.log(grade);
maths.addEventListener("change",()=>{
    mathsMarks = maths.value
    mathsMarks=parseInt(mathsMarks)
    console.log(mathsMarks);
})
english.addEventListener("change",()=>{
    englishMarks = english.value
    englishMarks=parseInt(englishMarks)
    console.log(englishMarks);
})
physics.addEventListener("change",()=>{
    physicsMarks = physics.value
    physicsMarks=parseInt(physicsMarks)
    console.log(physicsMarks);
})
chemistry.addEventListener("change",()=>{
    chemestryMarks = chemistry.value
    chemestryMarks=parseInt(chemestryMarks)
    console.log(chemestryMarks);
})
computer.addEventListener("change",()=>{
    computerMarks = computer.value
    computerMarks=parseInt(computerMarks)
    console.log(computerMarks);
})

btn.addEventListener("click",()=>{
    if((0<=mathsMarks&&mathsMarks<100)&& (0<=englishMarks&&englishMarks<100)&&
    (0<=physicsMarks&&physicsMarks<100)&&(0<=chemestryMarks&&chemestryMarks<100)&&
    (0<=computerMarks&&computerMarks<100)){
        let total = mathsMarks+englishMarks+physicsMarks+chemestryMarks+computerMarks
        console.log(total);
        Total.innerText = total
        let average = total/5
        Average.innerText = average
        console.log(average);
        if((mathsMarks||englishMarks||physicsMarks||chemestryMarks||computerMarks)<35){
            Grade.innerText = "FAIL"
            return;
        }
        else if(average>=90){
            Grade.innerText = "A"
        }
        else if(average>=80 && average<=89){
            Grade.innerText = "B"
        }
        else if(average>=70 && average<=79){
            Grade.innerText = "C"
        }
        else if(average>=60 && average<=69){
            Grade.innerText = "D"
        }
        else if(average>=35 && average<60){
            Grade.innerText = "F"
        }
        else if(average<35){
            Grade.innerText = "FAIL"
        }
        
    }
    else{
        alert("Please insert Valid Marks")
    }
})
