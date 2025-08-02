function howManydays(month) {
  var x = "";
  switch (x) {
    case 2:
      x = 28;
      break;
    case 4:
      x = 30;
      break;
    case 6:
      x = 30;
      break;
    case 9:
      x = 30;
      break;
    case 11:
      x = 30;
      break;

    default:
      x = 31;
      break;
  }
  return x;
}
