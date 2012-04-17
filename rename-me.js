// SDI Assignment Week 3
// Student: Anthony Torrez
// Date: April , 2012


var pots = [ "Kona", "Komodo Dragon", "Sumatra" ];
	totalcupsPerPot = [ 5, 5, 4 ]; 
	makePot = false;
	
console.log("It's the first day that I moved into my new house.  The house is old and tucked away in the ",
			"woods.  The house is a two story, three bedrooms, an office, a basement and two and half ",
			"bathrooms.  There an old barn that's pretty huge and I'm using it as a storage area and garage.",
			"I've got a lot of stuff to unpack as I wait for my new roommate and best friend Jerry to move in ",
			"but first I've got to brew up a pot of coffee.");
	
// brew coffee

var potOfCoffee = function(coffeeBrewed, cupsPerPot) {
	console.log("I brewed a pot of " + coffeeBrewed + " coffee and pour myself a cup. It should take me " 
		+ cupsPerPot + " cups to finish the pot.");
	for (var cups = 0; cups < cupsPerPot; cups++) {
		var cupsRemain = cupsPerPot - cups;
		if (cupsRemain == 1) {
		console.log("my dog, Kye wants coffee so I give him the last cup");
		}
		else {
		console.log(cupsRemain + " more cups until the pot is empty!");
	}
};

	console.log("I've finished the pot of coffee. Should I make another pot?");
	}

var allPots = function(cupsJoe, cupsPerPot) {
	for (var numberOfCups = 0; numberOfCups < cupsJoe.length; numberOfCups++) {
		var coffeeBrewed = cupsJoe[numberOfCups];
			cupsPerPot = totalcupsPerPot[numberOfCups];
		potOfCoffee(coffeeBrewed, cupsPerPot);
	}	
};   

allPots(pots, totalcupsPerPot); 

console.log("No, I think that should be enough coffee to get me through all the work I've gotta do.  As I put the ",
			"cup in the sink, I see my friend Jerry's truck as he pulls onto the property. Kye hears Jerry's ",
			"truck and is waiting at the door for him.  As I open the door to let Kye out, I see the Jerry is ",
			"not alone.  He's brought a couple of friends, Shaun and Sam, to help out.  ");
			
var useData = function (json) {
	console.log(json);
};

useData(json1);

alert("JavaScript works!");