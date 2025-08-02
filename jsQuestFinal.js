//Test Question 6

//1. JS Console Only
//Create JS function called friends

//Create an object list which is used for testing the function and as a argument for the call of friends() function

const objectList = [
  {
    name1: "Tim",
    friends: ["John", "Sally"],
  },

  {
    name1: "John",
    friends: ["Tim", "Mike"],
  },

  {
    name1: "Mike",
    friends: [],
  },

  { name1: "Sally", friends: ["Tim"] },
];

//creating variables to store the score for each name

//is there a way to create a score for the objects using an algorithm? That way it is not hard coded?
let timScore = 0;
let johnScore = 0;
let mikeScore = 0;
let sallyScore = 0;

//Determine who has the most loyal friends using a function
//A loyal friends consists of both friends having each other in their friends list
//If not, they are not loyal friends
//Which person has the most loyal friends?

//Declare a function called friends with parameter people
//now loop through the object list, for each element within the object list[0], we want to output a new array with the friends for each name
//once we loop through all the name's in the object, we then want to compare the friends list for each name
//if we find that a name in their friends list, we then check that name to see if that person's name is in their friends list, if so we add one point to each of their scores
//if not we continue the loop

//this allows me to console.log(people[0].friends); find specific values in the list of objects provided to the call and retrieve the properties by using dot notation
//now create a for loop

//function to create an array of individual names
function nameList(people) {
  let friendsLoyalCheckNameValue = [];
  for (const person of people) {
    friendsLoyalCheckNameValue.push(person.name1);
  }
  return friendsLoyalCheckNameValue;
}

//function to create an array of friends list
function friendsList(people) {
  let friendsLoyalCheckFriendsList = [];
  for (const person of people) {
    friendsLoyalCheckFriendsList.push(person.friends);
  }
  return friendsLoyalCheckFriendsList;
}

const individualNames = nameList(objectList); // use these variables 

const friendsListArray = friendsList(objectList); //use this new variable for the final function friends list

function friends(people) {
    //find the first value in the list, Tim, then check his friends list and identify the values
    for (let i = 0; i < individualNames[0].length; i++) {
        for (let j = 0; j < friendsListArray[0].length; j++) {
            if (individualNames[i] === friendsListArray[j]) {
                console.log("Complicated")
            }
        }
    }
}

friends(objectList);

// node jsQuestFinal.js


//find the first value of individual names list and then check the names in the list, then check those names to see if that value is in those lists