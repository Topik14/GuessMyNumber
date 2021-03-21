'use strict';
//s console nam vpise dany element (cely p)
/*
console.log(document.querySelector('.message')); //pristupuje ku class v html.. pre id je to # 
console.log(document.querySelector('.message').textContent); //vybereie len text v elemente
*/
//WHAT IS DOM AND DOM MANIPULATION

//DOM - document object model  connection bod medzi js ->html a css 
//api su web prehlaidace aplication programing interface 
//DOm metody su kniznice pisane v js (patria medzi API).. DOM nie je JS

//JS v browser  fundamentals dom
/*
//nasatvenie textu pre vybraty element.. nasatvi sa okamzite
document.querySelector('.message').textContent = 'Correct number :)';
console.log(document.querySelector('.message').textContent); //vypise new content v konzole

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 21;

//pre input element
console.log(document.querySelector('.guess').value);  //dostal som empty valeu lebo tam nie je nic
document.querySelector('.guess').value = 22; //teraz mam value a preto ju vidime aj na serveri
console.log(document.querySelector('.guess').value); //teraz ju uz vidim
*/
//JS event fundamentals

let secretNumber = Math.trunc(Math.random() * 20) + 1;  //trunc nam odreze desatinne cisla takze maxx hodnota by bola 19 a preto +1

let score = 20;
let highScore = 0;


const displayMessage = function (message) {
  document.querySelector('.message').textContent = message; 
}

// pre nejaku akciu musime pouzit event metodu
//vyberieme teraz pre button check element 
// vyuziva sa na event addEVentListener co chceme? click, druhy parameter caka funckiu ale s value teda RETURN nejaky s value
document.querySelector('.check').addEventListener('click', function () {
  //console.log(document.querySelector('.guess').value); // vkonzole nam ukaze hodnotu guess
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);  //typ value hodi nam string preto convert NUmber

  //ak dame do podmienky !guess pri 0 to bude false kedze je falsy
  if (!guess) {
    //document.querySelector('.message').textContent = 'No number!'; //pri zaidnom cisle napsie no number
    displayMessage('No number!');

    //when win
  } else if (secretNumber === guess) {
    //document.querySelector('.message').textContent = 'Correct number :)';
    displayMessage('Correct number :)');
    document.querySelector('.number').textContent = secretNumber;

    //nastavenie zmeny farby css pouzitim style a background ktore uz nam ukaze aj samo co chceme zmenit
    document.querySelector('body').style.backgroundColor = '#60b347';
    
    //rozsiernie number divu  vzdy pri style priradime v stringu hodnoty
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }


  }  //when guess is wrong  v ramci dry codu namiesto dvoch podmienok mame tut jednu
     //pouzil isme turnery operation
    else if (guess !== secretNumber) {
    if (score > 1) {
      //document.querySelector('.message').textContent =
      //  secretNumber < guess ? 'Too high number' : 'Too low number';
      displayMessage(
        secretNumber < guess ? 'Too high number' : 'Too low number'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game! click Again');
      document.querySelector('.score').textContent = 0;
     }  
    }


  //   //when number is to high
  //   else if (secretNumber < guess) {
  //   if(score > 1){
  //     document.querySelector('.message').textContent = 'Too high number';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game! click Again';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   //when number is to low
  // } else {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low number';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game! click Again';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value  = '';
  
  
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
});

