'use strict';
let Score =0;
alert ('Hello Welcome here to know about me');

function age() {


  let age = prompt('Am I 25 years old?');
  if (age.toLowerCase() === 'yes')
  {
  //console.log('no it is 29!');
    alert ('no it is 29!');
  }
  else {
  //console.log('you are right, I am 29!');
    alert ('you are right, I am 29!');
    Score ++;

  }}
age();


function prof() {

  let prof = prompt('Am I a software developer?');
  if (prof.toLowerCase() === 'yes')
  {
  // console.log('no, an architect!');
    alert ('no, an architect!');
  }
  else {
  //console.log('you are right, I am an architect!');
    alert ('you are right, I am an architect!');
    Score ++;
  }}
prof();
function photo() {
  let intrest = prompt('Do you think I like photography?');
  if (intrest.toLowerCase() === 'yes')
  {
  // console.log('you are right');
    alert ('you are right');
    Score ++;
  }
  else {
  //console.log(':( you're wrong I like it');
    alert ('you are wrong I like it');
  }
}
photo();

function cat(){
  let like = prompt('Do you think I like cats?');
  if (like.toLowerCase() === 'yes')
  {
  // console.log('you are right');
    alert ('you are right');
    Score ++;
  }
  else {
  //console.log(':( you're wrong I like it');
    alert ('you are wrong I like it');
  }
}
cat();

function blue(){
  let color = prompt('Do you think I like Blue?');
  if (color.toLowerCase() === 'yes')
  {
  // console.log('you are right and I like red also');
    alert ('you are right and I like red also');
    Score ++;
  }
  else {
  //console.log(':( you're wrong I like it');
    alert ('you are wrong I like it');
  }
}
blue();

let yourName = prompt('what is your name?');
alert ('Welcome nice to meet you, '+yourName);

//question 6
function numb(){
  for( let i=0; i<=3; i=i+1){
    let num=prompt('guess the correct number I liked form 1-15');
    if (num<5) {
      alert ('No, too low');
    } else if (num>5) {
      alert ('No, too high');
    }
    else{
      alert ('yeaaah! it is 5');
      Score ++;
      break;
    }
  }

  alert ('the right answer is 5');
}
numb();
//question 7

function movie(){
  let myMovies=['lionking','mulan','cars'];
  for( let i=0; i<=5; i=i+1){
    let movie=prompt('can you guess what is my fav. disney movie');
    if (movie===myMovies[0]) {
      alert ('yeaaah you alright');
      Score ++;
      break;
    } else if (movie===myMovies[1]) {
      alert ('yeaaah you alright');
      Score ++;
      break;
    }
    else if (movie===myMovies[2]){
      alert ('yeaaah you alright');
      Score ++;
      break;
    }
    else{
      alert ('try again');
    }
  }
  alert('my fav. movies is ' + myMovies);
}
movie();
alert('your Score is:  ' + Score +' from 7 Ques');
