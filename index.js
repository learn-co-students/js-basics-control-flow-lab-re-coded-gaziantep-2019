  let ride = 199;
function scuberGreetingForFeet(ride){

  if (ride<=400) {
   return 'This one is on me!';
  } else if (ride>2000 && ride <=2500) {
    return 'I will gladly take your thirty bucks.';
  } else {
    return 'No can do.';
  }
 
}


  let city = 'NYC';
function ternaryCheckCity(city) {

  return city == 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

let tip = 100;
function switchOnCharmFromTip(tip) {
  switch(tip){
    case 'generous':
    return 'Thank you so much.';

    case 'not as generous':
    return 'Thank you.';

    default:
    return 'Bye.';
  }
}