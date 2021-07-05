function scuberGreetingForFeet(feets){
  // Write your code here!
  if(feets > 2500)
    return 'No can do.';
  else if(feets > 2000)
    return 'I will gladly take your thirty bucks.';
  else if(feets <= 400)
    return 'This one is on me!';
}

function ternaryCheckCity(city){
  // Write your code here!
  let message;

  city === 'NYC'? (message = 'Ok, sounds good.'):(message = 'No go.')

  return message;
}

function switchOnCharmFromTip(tips){
  // Write your code here!
  switch(tips){
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}