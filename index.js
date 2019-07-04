function scuberGreetingForFeet(feetValue){
  // Write your code here!
  if(feetValue > 2500)
    return 'No can do.';
  else if(feetValue > 2000)
    return 'I will gladly take your thirty bucks.';
  else if(feetValue <= 400)
    return 'This one is on me!';
}

function ternaryCheckCity(city){
  // Write your code here!
  let message;
  
  city === 'NYC'? (message = 'Ok, sounds good.'):(message = 'No go.')
  
  return message;
}

function switchOnCharmFromTip(tipValue){
  // Write your code here!
  switch(tipValue){
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}