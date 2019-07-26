function scuberGreetingForFeet(feet){
  // Write your code here!
  //let feet;
  if ( feet <= 400) {
   return "This one is on me!"; 
  }
   else if (2000 < feet && 2500 > feet){
     return "I will gladly take your thirty bucks.";
   }
   else {
     return "No can do.";
   }
}

function ternaryCheckCity(city){
  // Write your code here!

return city === "NYC" ? "Ok, sounds good." : "No go." ;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
 // let tip;
  switch(tip){
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return 'Thank you.' ;
    default:
      return "Bye.";
  }
}