'use strict';

console.log("hello world");

// User greeting
let userName = prompt ('Hello! What is your name?');
console.log(userName);
alert('Welcome '+ userName);

//Right Answer Counter
let rightAnswerCount = 0;

// Location, Student, Ice Cream, Cats, POTTAH!?

function seattle() {
  let answer=prompt('Do I live in Seattle? yes/no?');
  if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
    alert('You are correct!');
    rightAnswerCount++
  } else if (answer.toLowerCase() === 'no' || answer.toLowerCase() === 'n') {
    alert('Actually, I do live in Seattle');
  } else {
    alert('Hmm I did not understand your answer. Please respond with yes or no')
  }
}

function student() {
  let answer=prompt('Am I a Code Fellows Student? yes/no')
  if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
    alert('You are correct!');
    rightAnswerCount++
  } else if (answer.toLowerCase() === 'no' || answer.toLowerCase() === 'n') {
    alert('Actually, I am a code fellows student!');
  } else {
    alert('Hmm I did not understand your answer. Please respond with yes or no')
  }
}

function iceCream() {
  let answer=prompt('Do I enjoy Ice Cream? yes/no')
  if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
    alert('That is correct! My favorite flavor is Rocky Road!');
   rightAnswerCount++
  } else if (answer.toLowerCase() === 'no' || answer.toLowerCase() === 'n') {
    alert('What do you mean no? Of course I love ice cream!');
  } else {
    alert('Hmm I did not understand your answer. Please respond with yes or no')
  }
}

function cats() {
  let answer=prompt('Am I a Cat Lady? yes/no')
  if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
    alert('Yes, I am obsessed with my cats!');
   rightAnswerCount++
  } else if (answer.toLowerCase() === 'no' || answer.toLowerCase() === 'n') {
    alert('I am deeply obsessed with my cats');
  } else {
    alert('Hmm I did not understand your answer. Please respond with yes or no')
  }
}

function harryPotter() {
  let answer=prompt('Am I huge Harry Potter Nerd?, yes/no')
  if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
    alert(userName + ', you are correct!');
   rightAnswerCount++
  } else if (answer.toLowerCase() === 'no' || answer.toLowerCase() === 'n') {
    alert(userName + ' , you are looking at a Hufflepuff!');
  } else {
    alert('Hmm I did not understand your answer. Please respond with yes or no')
  }
}

function numberGame() {
  let correctNum = 3;
  for (let i = 0; i<5; i++){
    let userGuess = prompt (' Pick a number');
    let numberGuess = parseInt(userGuess);
    if (numberGuess === correctNum){
      alert ('Great job!');
      rightAnswerCount++
      break;
    } else if (numberGuess > correctNum){
      alert('too high');
    } else if (numberGuess < correctNum){
      alert ('too low');
    }
}
}

function flavorGame() {
  let flavorArray = ['strawberry', 'chocolate', 'vanilla', 'rocky road', 'cookie dough'];
  let counter = 6;
  let rightAnswer = false;
  while(rightAnswer === false && counter >0){
    alert ('you have ' + counter + ' guesses left');
    let flavorGuess1 = prompt ('What is one of my favorite ice cream flavors?');
    let flavorGuess = flavorGuess1.toLowerCase();
    for(let i =0; i < flavorArray.length; i++){
      if(flavorArray.includes(flavorGuess)){
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
}

seattle();
student();
iceCream();
cats();
harryPotter();
numberGame();
flavorGame();



// Below are the the orginal Questions before the turned into functions

// // Question 1: Location
// let userLocation = prompt ('Do I live in Seattle? yes/no?');
// console.log(userLocation);

// let lowerCaseLocation = userLocation.toLowerCase();
// console.log(lowerCaseLocation);

// //Question 1 Answers
// if (lowerCaseLocation === 'yes'|| lowerCaseLocation ==='y'){
//   alert('You are right!');
// }else if (lowerCaseLocation ==='no' || lowerCaseLocation ==='n'){
//   alert('Actually, I do live in Seattle');
// }else{
//   alert('Hmm I did not understand your answer. Please respond with yes or no');
// }

// // Question 2: Student
// let userStudent = prompt ('Am I a Code Fellows Student? yes/no');
// console.log(userStudent);

// let lowerCaseStudent = userStudent.toLowerCase();
// console.log(lowerCaseStudent);

// // Question 2 Answers
// if (lowerCaseStudent ==='yes' || lowerCaseStudent=='y'){
//   alert ('That is correct');
//   rightAnswerCount ++;
// }else if(lowerCaseStudent ==='no' || lowerCaseStudent ==='no'){
//   alert ('Actually, I am a code fellows student!');
// }else{
//   alert('Hmm I did not understand your answer. Please respond with yes or no');
// }

// // Question 3: Ice Cream
// let userIceCream = prompt('Do I enjoy Ice Cream? yes/no');
// console.log(userIceCream);

// let lowerCaseIceCream = userIceCream.toLowerCase();
// console.log(lowerCaseIceCream);

// // Question 3 Answers
// if(lowerCaseIceCream === 'yes' || lowerCaseIceCream ==='y'){
//   alert('That is correct! My favorite flavor is Rocky Road!');
//   rightAnswerCount ++;
// }else if(lowerCaseIceCream ==='no' || lowerCaseIceCream ==='n'){
//   alert('What do you mean no? Of course I love ice cream!');
// }else{
//   alert('Hmm I did not understand your answer. Please respond with yes or no');
// }

// // Question 4: Cats
// let userCatLady = prompt('Am I a Cat Lady? yes/no');
// console.log(userCatLady);

// let lowerCaseCat = userCatLady.toLowerCase();
// console.log(lowerCaseCat);

// // Question 4 Answers
// if (lowerCaseCat ==='yes' || lowerCaseCat ==='y'){
//   alert ('Alot of people would agree with you!');
//   rightAnswerCount ++;
// }else if(lowerCaseCat ==='no' || lowerCaseCat ==='n'){
//   alert('I am deeply obsessed with my cats');
// }else{
//   alert('Hmm I did not understand your answer. Please respond with yes or no');
// }

// // Question 5: Harry Potter
// let userHarryPotter = prompt ('Am I huge Harry Potter Nerd?, yes/no')
// console.log(userHarryPotter);

// let lowerCaseHarry = userHarryPotter.toLowerCase();
// console.log(lowerCaseHarry);

// // Question 5 Answers
// if (lowerCaseHarry === 'yes' || lowerCaseHarry ==='y'){
//   alert(userName + ', you are correct!')
//   rightAnswerCount ++;
// }else if (lowerCaseHarry === 'no' || lowerCaseHarry === 'n'){
//   alert (userName + ' , you are looking at a Hufflepuff!');
// }else{
//   alert('Hmm I did not understand your answer. Please respond with yes or no');
// }

alert ('you got this many correct Answers' + rightAnswerCount);

// // Number Guessing Game     
// let correctNum = 3;

// for (let i = 0; i<5; i++){
//   let userGuess = prompt (' Pick a number');
//   let numberGuess = parseInt(userGuess);
//   if (numberGuess === correctNum){
//     alert ('Great job!');
//     break;
//   } else if (numberGuess > correctNum){
//     alert('too high');
//   } else if (numberGuess < correctNum){
//     alert ('too low');
//   }
// }

// // Array Guessing Game
// let flavorArray = ['strawberry', 'chocolate', 'vanilla', 'rocky road','cookie dough'];
// let counter = 6;
// let rightAnswer = false;
// while(rightAnswer === false && counter >0){
//   alert ('you have ' + counter + ' guesses left');
//   let flavorGuess1 = prompt ('What is one of my favorite ice cream flavors?');
//   let flavorGuess = flavorGuess1.toLowerCase();
//   for(let i =0; i < flavorArray.length; i++){
//     if(flavorGuess === flavorArray[1]){
//     alert('correct!');
//     rightAnswer = true;
//     }
//   }
//   if (rightAnswer === false){
//     alert('you are incorrect');
//   }
// counter --;
// }
// alert ('These were the right answers ' + flavorArray );