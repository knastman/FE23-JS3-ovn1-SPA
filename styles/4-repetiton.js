//Steg 4. Ytterligare repetition och övning


/************************************
  Funktioner
***********************************/
// Funktioner i JavaScript kan skrivas på flera sätt.
// Skapa exempel på en funktion som är:
// 1. Namngiven - dvs du kan anropa den genom att använda dess namn. function name(){}
// 2. Anonym i en variabel: const f = function() {}
// 3. Pil-funktion: () ⇒ { }



// 1. Namngiven funktion

function summaOvning(y, z){
  summa = y+z;
  console.log('summma är lika med: ', summa);
  return summa;
}

summaOvning(5,4);
console.log('Summan är: ' + summa); // När använder man denna
console.log('Summan är: ', summa); // vs denna

//Kortare version
function summaOvning2(y, z){
  return y+z;
}
console.log(summaOvning2(5,4));


console.log('______________________________');
// 2. Anonym funktion////////////
// const f = function() {}

const minFunktion = function(m){
  console.log(m);
}
console.log(minFunktion);
minFunktion('Meddelande via funktionen'); 

const multiply = function (x, y) {
  return x * y;
};

console.log(multiply);
console.log(multiply(2,3));

const multiplyResult = multiply(2,5);
console.log(multiplyResult);

console.log('______________________________');
// 3. Pil-funktion////////////

const multiplyArrow = (x, y) => x * y;
console.log(multiplyArrow);
console.log(multiplyArrow(4,2));


console.log('______________________________');


/************************************
  Objekt
***********************************/
// Skapa ett objekt som innehåller attribut och metoder. Du har en spargris. Denna kan innehålla ett antal
// pengar - du kan; stoppa i pengar, ta ut pengar, ser hur mycket pengar som finns.

const objectName = {
  key: 'value1',
  key2: 'value2',
  arrayProperty: [1, 2, 3, 4],
  logSomething(parametrar){
    console.log('Text i metoden logSomething');
  },
}

console.log(objectName.key);
console.log(objectName.arrayProperty);

console.log('Under här är objectName.logSomething()');
objectName.logSomething();


const sparGrisTest = {
  saldo: 200,
  uttag(uttagsSumma){
    this.saldo = this.saldo - uttagsSumma;
    console.log('Efter uttag, saldo: ' + this.saldo);
 
  },
  insattning(insattningSumma){
    this.saldo = this.saldo + insattningSumma;
    console.log('Efter insättning, saldo: ' + this.saldo);
  
  },
  saldoUtrakning (insattning, uttag){
    // const saldo = this.nuvarandeSaldo + insattning - uttag;
    // console.log('saldo i method');
    // console.log(saldo);
    console.log('saldoUtrakning');
    
    // this.nuvarandeSaldo = nuvarandeSaldo +insattning - uttag;
    // console.log(this.nuvarandeSaldo);
  },
  visaSaldo (){
    console.log('saldo i method utan uträkning');
    console.log(this.saldo);
    // console.log(this.nuvarandeSaldo);
  }
}

// console.log('Spargristest:');
// // sparGris.saldoUtrakning(100);
// // sparGris.saldoUtrakning(100,0);
// // sparGris.saldoUtrakning(0,100);
// // sparGris.visaSaldo();
// sparGrisTest.uttag(200);
// sparGrisTest.insattning(300);
// sparGrisTest.visaSaldo(100);

console.log('______________________________');

//------SPARGRIS OBJECT --------
const sparGris = {
  balance: 200,
  withdrawal(amount){
    this.balance = this.balance - amount;
    // console.log('After withdrawal, balance: ' + this.balance);
  },
  deposit(amount){
    this.balance = this.balance + amount;
    // console.log('After deposit, balance: ' + this.balance);
  
  },
  showBalance (){
    console.log('The balance is: ' + this.balance + ' kr');
  }
}
sparGris.withdrawal(200);
sparGris.deposit(200);
sparGris.deposit(200);
sparGris.showBalance();


// // Method
// const obj = {
//   multiply(x, y) {
//     return x * y;
//   },
// };

console.log('______________________________');
/************************************
  Klasser
***********************************/
// Skapa en klass som har samma funktionalitet som spargrisen. Skapa spargrisar till "Anders" och
// "Lotta" från klassen.


//------SPARGRIS CLASS --------
class PiggyBank {
  constructor(balance) { 
    this.balance = balance;
  }
  withdrawal(amount){
    this.balance = this.balance - amount;
    // console.log('After withdrawal, balance: ' + this.balance);
  }
  deposit(amount){
    this.balance = this.balance + amount;
    // console.log('After deposit, balance: ' + this.balance);
  }
  showBalance (){
    // console.log('Balance: ' + this.balance + ' kr');
    return this.balance;
  }
}

//ANDERS
const AndersBalance = new PiggyBank(100);

AndersBalance.withdrawal(50);
AndersBalance.deposit(300);

//LOTTA
const LottasBalance = new PiggyBank(0);

LottasBalance.withdrawal(50);
LottasBalance.deposit(300);
LottasBalance.showBalance();

const lottasPengar = LottasBalance.showBalance();
console.log('Lotta har ' + lottasPengar + ' kr kvar.');

console.log('______________________________');


/************************************
  Callbacks
***********************************/
// Callbacks används mycket när man arbetar med asynkron kod. Dvs vi väntar inte på att koden blir klar, utan får "en callback" när den är färdig istället.
// setInterval() är en asynkron funktion som använder att callback. Använd setInterval för att betala ut veckopeng till Lottas spargris. Lotta är ett krävande barn och vill få 10 pengar istoppat i spargrisen var 10 sekund.


const intervalID = setInterval(myCallback, 500, "10", "Lottas");

function myCallback() {
  console.log('Lotta får 10kr');
  LottasBalance.deposit(10);
  console.log(`Lotta har nu: ${LottasBalance.showBalance()} kr på sitt konto`);

  if ((LottasBalance.showBalance()) >= 500){
    clearInterval(intervalID);
  }
}



/************************************
  Promise
***********************************/
// Använd setTimeout() för att skapa ett promise som "resolvar" efter 30 sekunder. När det sker skall du
// ta 10 pengar från Lisas spargris och stoppa in dem i Anders gris. Skriv ut i webbläsarens konsoll hur
// mycket pengar som finns kvar i bådas spargrisar.