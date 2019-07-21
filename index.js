function scuberGreetingForFeet(Value){
  
 if ( Value <= 400) {
   return "This one is on me!";
 } else if ( Value > 2000 && Value < 2500) {
   
   return "I will gladly take your thirty bucks.";
   
 } else if ( Value > 2500) {
   return "No can do.";
 }
}

function ternaryCheckCity(city) {
  
  return city == "NYC" ? "Ok, sounds good." : "No go.";
}


} 
function switchOnCharmFromTip(tip){
    switch (tip){
    case "generous": return "That is great"; break;
    case "not as generous": return "uhhh"; break;
    
     default: return "Bye.";

 }
}
}
