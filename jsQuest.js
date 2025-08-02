//Test Question #5

let numberFound = [];
let pushedNumberList = []
let changeToList = [];


// Create function mathIsFun with Parameter numberString
function mathIsFun(numberString) {
  //initial checks up front for speed bumps
  if (!isNaN(numberString)) {
    //checks to see if numberString is a number, if not, ask them to enter a string
    console.log("Please enter a string with a delimeter!");
  } else {
    for (let i = 0; i < numberString.length; i++) {
      //starts the loop at index position 1, then goes until the end
      //if numberstring equals a delimeter and it is not at index 0 then perform the next logic block
      if (numberString[i] === "|") {
          changeToList.push(numberString.split("|"));
      }
      }
    }

  const newNew = changeToList[0].slice(0, changeToList[0].length);

  console.log(newNew);

    for (let i = 0; i < newNew.length; i++) {
        pushedNumberList.push(Number(newNew[i]));
    }

    let sortedPushedNumberList = newNew.sort((a, b) => b - a);
    let largestNumber = sortedPushedNumberList[0];
    let secondLargestNumber = sortedPushedNumberList[1];
    function totalSum(largestNumber, secondLargestNumber) {
        return Number(largestNumber) + Number(secondLargestNumber);
    }

    const sum = totalSum(largestNumber, secondLargestNumber);
    console.log(`The largest sum of the numbers are ${largestNumber} + ${secondLargestNumber} = ${sum}`);

}

mathIsFun("-2|-4|-1|-1|-5|-10|15|25|30|100|450");

//node jsQuest.js
