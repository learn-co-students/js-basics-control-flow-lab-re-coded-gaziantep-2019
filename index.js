function scuberGreetingForFeet(Value){
  // Write your code here!
  let charge ;
  if ( Value >= 400 ) {
    charge = "This one is on me!";
  }
  else if (Value > 2000 && Value <= 2500){
    charge = "I will gladly take your thirty bucks.";
  }
  else {
    charge = "No can do.";
  }
  return charge;
}

function ternaryCheckCity(city){
  // Write your code here!
  let YourCity;
  if (city === "NYC"){
    YourCity = "Ok, sounds good.";
  }
  else{
    YourCity = "No go.";
  }
  return YourCity;
}

function switchOnCharmFromTip(Tips){
  // Write your code here!
  let Answer;


  if (Tips === "generous"){
    Answer = "Thank you so much.";
  }
  else if (Tips === "not as generous"){
    Answer = "Thank you.";
  }
  else {
    Answer = "Bye.";
  }
  return Answer;
  } 


