function scuberGreetingForFeet(someValue){
  // Write your code here!
  let result1 = "This one is on me!";
  let result2 = "I will gladly take your thirty bucks.";
  if ( someValue <= 400 ) {
    return result1;
  } else if ( someValue > 2000 && someValue <= 2500) {
    return result2;
  } else if ( someValue > 2500 ) {
    return "No can do.";
  }
}
function ternaryCheckCity(){
  // Write your code here!
  
}

function switchOnCharmFromTip() {
  // Write your code here!
  
  let tipType = "generous"; 
  let tipType1 = "is not as generous";
  
  let tipResult;
 switch (tipType) {
   case tipType:
    return "Thank you so much.";
     
   case tipType1 :
     return  "Thank you.";
     
   
   default :
    return "Bye.";
      
 }

}