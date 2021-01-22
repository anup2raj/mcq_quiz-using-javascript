var currentquestion=0;
var score=0;
var total=questions.length;

var container=document.getElementById("container");
var question=document.getElementById("question");
var opt1=document.getElementById("opt1");
var opt2=document.getElementById("opt2");
var opt3=document.getElementById("opt3");
var opt4=document.getElementById("opt4");
var next=document.getElementById("nextbutton");
var result=document.getElementById("result");

loadQuestion(currentquestion);
function loadQuestion(index){
	var q=questions[index];
	question.innerHTML=(index+1)+". "+q.question;
	opt1.innerHTML=q.option1;
	opt2.innerHTML=q.option2;
	opt3.innerHTML=q.option3;
	opt4.innerHTML=q.option4;
}

function nextQuestion(){
	var selectedOption=document.querySelector("input[type=radio]:checked");
	if(!selectedOption){
		alert("Please select your answer");
		return;
	}
	var answer=selectedOption.value;
	//alert(answer.valueOf());
	//alert(questions[currentquestion].answer.valueof());
	if(questions[currentquestion].answer == answer){
		score++;
	}
	//alert(score);
	selectedOption.checked=false;
	currentquestion++;
	if(currentquestion==total-1){
		nextbutton.textContent="Submit";
	}
	if(currentquestion==total){
		container.style.display="none";
		result.style.display="";
		result.textContent="Your Score: "+ score;
		return;
	}
	loadQuestion(currentquestion);
}