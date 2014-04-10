var balance = 1000;
var response = query();

while(!isQuit(response)){
  var x = getInput();

  switch(response){
  case 'd':
    balance = add(x,balance);
    operation = "deposited";
    adverb = "to";
    break;
  case 'w':
    balance = sub(x,balance);
    operation = "withdrew";
    adverb = "from";
    break;
  default:
    console.log('That was not a valid option. Please try again.');
  }

  var string = getString(x,balance,operation,adverb);
  console.log(string);
  response = query();
}

console.log("Thanks for banking with us!")

function query() {
  console.log("Your balance is $" + balance + ".");
  if (balance < -750) {
    console.log('Your account has been closed.');
    return response = 'q';
  } else {
  var response = prompt("Would you like to make a (d)eposit, a (w)ithdrawal, or (q)uit?");
  return response.toLowerCase();
  }
}

function getInput() {
  var value = prompt('Please enter the amount.');
  return parseInt(value);
}

function isQuit(letter) {
  return letter === 'q';
}

function add(x, balance) {
  if (x > 500) {
    x += 25;
    console.log('As a bonus for being a loyal customer, we\'ve added $25 to your account.');
  }
  return balance += x;
}

function sub(x, balance) {
  balance -= x;
  if (balance < 0) {
    x -= 50;
    console.log('Your account has been assessed a $50 overdraft fee.');
  }
  return balance;
}

function getString(x,balance,operation,adverb) {
  return "You " + operation + " $" + x + " " + adverb + " your account.  Your balance is $" + balance + ".";
}
