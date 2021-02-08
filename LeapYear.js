function isLeap(year) {

  //use modulo to follow the 'evenly divisible' rules set out in the Readme.
  
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return (year + "is a Leap year.");
      } else {
        return (year + "is not a Leap year.");
      }
    } else {
      return (year + "is a Leap year.");
    }
  } else {
    return (year + "is not a Leap year.");
  }
}

isLeap(1998); // calls the function
