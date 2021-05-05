'use strict';

console.log("hello world");

// User greeting
let userName = prompt ('Hello! What is your name?');
console.log(userName);
alert('Welcome '+ userName);

// My location
let userLocation = prompt ('Do I live in Seattle? yes/no?');
console.log(userLocation);

// Make room for upper/lower case
let lowerCaseLocation = userLocation.toLowerCase();
let upperCaseLocation = userLocation.toUpperCase();

console.log(lowerCaseLocation);
console.log(upperCaseLocation);

let rightAnswerCount = 0;

// Do I live in Seattle response alerts. Yes/No
if (lowerCaseLocation === 'yes'|| lowerCaseLocation ==='y'){
  alert('You are right!');
  //console.log ('right');
}else if (lowerCaseLocation ==='no' || lowerCaseLocation ==='n'){
  alert('That is not the answer. Try again!');
  //console.log ('wrong');
}else{
  alert('Hmm I did not understand your answer. Please respond with yes or no');
  //console.log ('try again');
}

// Am I a student prompt. Yes/No
let userStudent = prompt ('Am I a Code Fellows Student? yes/no');
console.log(userStudent);

let lowerCaseStudent = userStudent.toLowerCase();
let upperCaseStudent = userStudent.toUpperCase();

console.log(lowerCaseStudent);
console.log(upperCaseStudent);

// Am I a student response alerts. Yes/No
if (lowerCaseStudent ==='yes' || lowerCaseStudent=='y'){
  alert ('That is correct');
  rightAnswerCount ++;
  //console.log ('right');
}else if(lowerCaseStudent ==='no' || lowerCaseStudent ==='no'){
  alert ('Actually, I am a code fellows student!');
  //console.log ('wrong');
}else{
  alert('Hmm I did not understand your answer. Please respond with yes or no');
  //console.log ('try again');
}

// Do I enjoy ice cream? Yes/No
let userIceCream = prompt('Do I enjoy Ice Cream? yes/no');
console.log(userIceCream);

let lowerCaseIceCream = userIceCream.toLowerCase();
let upperCaseIceCream = userIceCream.toUpperCase();

console.log(lowerCaseIceCream);
console.log(upperCaseIceCream);

// Do I like Ice Cream response alerts. Yes/No
if(lowerCaseIceCream === 'yes' || lowerCaseIceCream ==='y'){
  alert('That is correct! My favorite flavor is Rocky Road!');
  rightAnswerCount ++;
  //console.log ('right');
}else if(lowerCaseIceCream ==='no' || lowerCaseIceCream ==='n'){
  alert('What do you mean no? Of course I love ice cream!');
  //console.log ('wrong');
}else{
  alert('Hmm I did not understand your answer. Please respond with yes or no');
  //console.log ('try again');
}

alert ('you got this many correct Answers' + rightAnswerCount);

// Am I cat lady? Yes/No
let userCatLady = prompt('Am I a Cat Lady? yes/no');
console.log(userCatLady);

let lowerCaseCat = userCatLady.toLowerCase();
let upperCaseCat = userCatLady.toUpperCase();

console.log(lowerCaseCat);
console.log(upperCaseCat);

// Cat Lady response alerts. Yes/No
if (lowerCaseCat ==='yes' || lowerCaseCat ==='y'){
  alert ('Alot of people would agree with you!');
  //console.log ('right');
}else if(lowerCaseCat ==='no' || lowerCaseCat ==='n'){
  alert('Try again! I am deeply obsessed with my cats');
  //console.log ('wrong');
}else{
  alert('Hmm I did not understand your answer. Please respond with yes or no');
  //console.log ('try again');
}

// Am I a huge Harry Potter nerd. Yes/no
let userHarryPotter = prompt ('Am I huge Harry Potter Nerd?, yes/no')
console.log(userHarryPotter);

let lowerCaseHarry = userHarryPotter.toLowerCase();
let upperCaseHarry = userHarryPotter.toUpperCase();

console.log(lowerCaseHarry);
console.log(upperCaseHarry);

// Harry Potter response alerts. Yes/No
if (lowerCaseHarry === 'yes' || lowerCaseHarry ==='y'){
  alert(userName + ', you are correct!')
  //console.log ('right');
}else if (lowerCaseHarry === 'no' || lowerCaseHarry === 'n'){
  alert (userName + ' , you are looking at a Hufflepuff. Try again!');
  //console.log ('wrong');
}else{
  alert('Hmm I did not understand your answer. Please respond with yes or no');
}




//Number Guessing Game     
let correctNum = 3;

for (let i = 0; i<5; i++){
  let userGuess = prompt (' Pick a number');
  let numberGuess = parseInt(userGuess);
  if (numberGuess === correctNum){
    alert ('Great job!');
    break;
  } else if (numberGuess > correctNum){
    alert('too high');
  } else if (numberGuess < correctNum){
    alert ('too low');
  }
}


//Array Guessing Game
let flavorArray = ['strawberry', 'chocolate', 'vanilla', 'rocky road','cookie dough'];
let counter = 5;
let rightAnswer = false;
while(rightAnswer === false && counter >0){
  alert ('you have ' + counter + ' guesses left');
  let flavorGuess1 = prompt ('What is my favorite ice cream flavor?');
  let flavorGuess = flavorGuess1.toLowerCase();
  for(let i =0; i < flavorArray.length; i++){
    if(flavorGuess === flavorArray[1]){
    alert('correct!');
    rightAnswer = true;
    }
  }
  if (rightAnswer === false){
    alert('you are incorrect');
  }
counter --;
}
alert ('These were the right answers ' + flavorArray );