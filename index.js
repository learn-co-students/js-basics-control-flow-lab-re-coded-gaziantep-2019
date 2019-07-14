function scuberGreetingForFeet(amount) {
  if (amount >= 400) {
    return "This one is on me!"

  }

  else if (amount >2000)
  {
    return "I will gladly take your thirty bucks."
  }

  else if (amount > 2500) {
    return "No can do."
  }
}

function ternaryCheckCity(city) {
  // Write your code here!
  let ok;
  city ? "NYC" ? (ok = "Ok, sounds good.") : (ok = "No go.")
  return ok;
}

function switchOnCharmFromTip(tip) {

  // Write your code here!
  let generous;

  switch (tip)
  {
    case "generous":
      return "Thank you so much."
      break;

    case  "not as generous":
      return "Thank you"
      break;

    case "thanks for everything":
      return "Bye";


  }

}
