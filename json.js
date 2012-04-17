// SDI Assignment Week 3
// my json file
// Student: Anthony Torrez
// Date: April , 2012

friend0.logDetails = friendDetails;
friend1.logDetails = friendDetails;
friend2.logDetails = friendDetails;
friend3.logDetails = friendDetails;

friend0 = { name: "George", age: "25" };
friend1 = { name: "Jerry", age: "25" };
friend2 = { name: "Shaun", age: "27" };
friend3 = { name: "Sam", age: "24" };

function friendDetails() {
    console.log(this.name + " is " + this.age + " years old");
}

friend0.logDetails = friendDetails;
friend1.logDetails = friendDetails;
friend2.logDetails = friendDetails;
friend3.logDetails = friendDetails;

friend0.logDetails();
friend1.logDetails();
friend2.logDetails();
friend3.logDetails();

