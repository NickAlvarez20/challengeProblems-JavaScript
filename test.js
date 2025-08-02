function loyalFriendsList(people) {
    var friendsList = [
        {
            name: "Tim",
            friends: ["John", "Sally"],
        },
        {
            name: "John",
            friends: ["Tim", "Mike"],
        },
        {
            name: "Mike",
            friends: [],
        },
        {
            name: "Sally",
            friends: ["Tim"],
        },
    ];

    let timScore = 0;
    let johnScore = 0;
    let mikeScore = 0;
    let sallyScore = 0;

    const timsFriends = friendsList.filter((person) => person.name === "Tim")[0]
        .friends;
    const johnsFriends = friendsList.filter((person) => person.name === "John")[0]
        .friends;
    const mikesFriends = friendsList.filter((person) => person.name === "Mike")[0]
        .friends;
    const sallysFriends = friendsList.filter(
        (person) => person.name === "Sally"
    )[0].friends;

    console.log(johnsFriends);

    for (const friend of johnsFriends) {  //Calculating Tim's total loyal Friends
        if (friend === "Tim") {
            console.log("John and Tim are Friends!");
            for (const friend of timsFriends) {
                if (friend === "John") {
                    console.log("John and Tim are loyal friends");
                    timScore += 1;
                    johnScore += 1;
                    console.log("This is Tim's score = " + timScore);
                    console.log("This is John's score = " + johnScore);
                }
            }
        }
    }

    for (const friend of mikesFriends) {
        if (friend === "Tim") {
            console.log("Mike and Tim are Friends!");
            for (const friend of timsFriends) {
                if (friend === "Mike") {
                    console.log("Mike and Tim are loyal friends");
                    timScore += 1;
                    mikeScore += 1;
                    console.log("This is Tim's score = " + timScore);
                    console.log("This is Mike's score = " + mikeScore);
                }
            }
        }
    }

    for (const friend of sallysFriends) {
        if (friend === "Tim") {
            console.log("Sally and Tim are Friends!");
            for (const friend of timsFriends) {
                if (friend === "Sally") {
                    console.log("Sally and Tim are loyal friends");
                    timScore += 1;
                    sallyScore += 1;
                    console.log("This is Tim's score = " + timScore);
                    console.log("This is Sally's score = " + sallyScore);
                }
            }
        }
    }

    let mostLoyalScore = Math.max(Number(timScore), Number(johnScore), Number(mikeScore), Number(sallyScore));

    let personWithMostLoyalScore;
    if (mostLoyalScore === timScore) {
        personWithMostLoyalScore = "Tim";
    } else if (mostLoyalScore === johnScore) {
        personWithMostLoyalScore = "John";
    } else if (mostLoyalScore === mikeScore) {
        personWithMostLoyalScore = "Mike";
    } else {
        personWithMostLoyalScore = "Sally";
    }

    console.log(`The person with the most loyal friends is ${personWithMostLoyalScore} with a score of ${mostLoyalScore}.`);
}

loyalFriendsList();


//Accepts parameter that contains objects
// Two properties, the first is name and the second is a list of strings called
//friends
//Which person has most loyal friends?
//1. Iterate through the list or use a map to verify correct matches
//2 Next We want to assign an output for each person in the list called people, to
//determine who their most loyal friends are
//3. Then we want to log to the console the loyal friends for each person
/*
Ideally, we want to find matching properties and index values within the friends list
So for example, are checking object properties for name Tim and then we 
see if Tim is in any of the list of the other names
//Now output the person in the list of objects who has the MOST loyal friends

*/
