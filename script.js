document.addEventListener("DOMContentLoaded",()=>{
let quiz_container= document.getElementById("quiz-container")
let question_container= document.getElementById("question-container")
let question_text= document.getElementById("question-text")
let choices_list= document.getElementById("choices-list")
let next_btn= document.getElementById("next-btn")
let result_container= document.getElementById("result-container")
let scores= document.getElementById("score")
let restart_btn= document.getElementById("restart-btn")
let start_btn= document.getElementById("start-btn")


const questions =[
    {
        question:"What does the Yoga term 'Pranayama' refer to?",
        choices:["Physical postures","Breathing exercises","Meditation techniques","Mindfulness"],
        answer:"Breathing exercises"
    },

    {
        question:"What part of the brain is responsible for memory and learning?",
        choices:["Cerebellum","Hypothalamus","Hippocampus","Medulla oblongata"],
        answer:"Hippocampus"
    },
    {
        question:"What parent company owns both Instagram and WhatsApp?",
        choices:["Google","Apple","Facebook (now Meta) ","Amazon"],
        answer:"Facebook (now Meta) "
    },
    {
        question:"What is the main function of red blood cells?",
        choices:["Carrying oxygen","Fighting infections","Clotting blood","Regulating body temperature"],
        answer:"Carrying oxygen"
    },
    {
        question:"In which city is the Eiffel Tower located?",
        choices:["London","Berlin","Paris","Rome"],
        answer:"Paris"
    }

]

let currentQuestionIndex = 0;
let score=0;

start_btn.addEventListener("click",startQuiz)

function startQuiz(){
    start_btn.classList.add("hidden")
    result_container.classList.add("hidden")
    question_container.classList.remove("hidden")
    showQuestion();
}


function showQuestion(){
    next_btn.classList.add("hidden");
    question_text.textContent= questions[currentQuestionIndex].question;

    choices_list.innerHTML="";
    questions[currentQuestionIndex].choices.forEach(choice=>{
        let li = document.createElement("li");
        li.textContent=choice;
        choices_list.appendChild(li);
        li.addEventListener("click",()=>{
           const allOptions = choices_list.querySelectorAll("li");
       allOptions.forEach(option => option.classList.remove("selected"));

     
         li.classList.add("selected");


         selectAnswer(choice);
        })
      
    })

}

function selectAnswer(choice){
    next_btn.classList.remove("hidden")


    let correctAns= questions[currentQuestionIndex].answer;
    

    if(choice==correctAns){
         score++;
    }


}



next_btn.addEventListener("click",()=>{
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showResult();
    }
})



function showResult(){
    question_container.classList.add("hidden")
    result_container.classList.remove("hidden")
    scores.textContent=`${score} out of ${questions.length}`
}

restart_btn.addEventListener("click",()=>{
    currentQuestionIndex=0;
    score=0;
    startQuiz();
})
})


