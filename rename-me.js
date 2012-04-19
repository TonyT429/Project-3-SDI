// SDI Assignment Week 3
// Student: Anthony Torrez
// Date: April , 2012


var pots = [ "Kona", "Komodo Dragon", "Sumatra" ];
	totalcupsPerPot = [ 5, 5, 4 ]; 
	makePot = false;
	rifleRounds = 12;
	shotShells = 10;
	magRounds = 10;
	clips45 = 2;
	
	
	
console.log("It's the first day that I moved into my new house.  The house is old and ",
			"tucked away in the woods.  The house is a two story, three bedrooms, an ",
			"office, a basement and two and half bathrooms.  There an old barn that's ",
			"pretty huge and I'm using it as a storage area and garage.",
			"I've got a lot of stuff to unpack as I wait for my new roommate and best ",
			"friend Jerry to move in but first I've got to brew up a pot of coffee.");
	
// brew coffee

var potOfCoffee = function(coffeeBrewed, cupsPerPot) {
	console.log("I brewed a pot of " + coffeeBrewed + " coffee and pour myself a cup. It should take me " 
		+ cupsPerPot + " cups to finish the pot.");
	for (var cups = 0; cups < cupsPerPot; cups++) {
		var cupsRemain = cupsPerPot - cups;
		if (cupsRemain == 1) {
		console.log("my dog, Kye wants coffee so I give him the last cup.  Gonna need a new cup if I want more coffee.");
		}
		else {
		console.log(cupsRemain + " more cups until the pot is empty!");
	}
};

	console.log("Well, I've finished the pot of coffee. Should I make another pot?");
	}

var allPots = function(cupsJoe, cupsPerPot) {
	for (var numberOfCups = 0; numberOfCups < cupsJoe.length; numberOfCups++) {
		var coffeeBrewed = cupsJoe[numberOfCups];
			cupsPerPot = totalcupsPerPot[numberOfCups];
		potOfCoffee(coffeeBrewed, cupsPerPot);
	}	
};   

allPots(pots, totalcupsPerPot); 

console.log("No, I think that should be enough coffee to get me through all the work I've",
			"gotta do.  As I put the cup in the sink, I see my friend Jerry's truck as he ",
			"pulls onto the property. Kye hears Jerry's truck and is waiting at the door ",
			"for him.  As I open the door to let Kye out, I see the Jerry is not alone. ",
			" He's brought a couple of friends, Shaun and Sam, to help out.");
			
console.log('"Hey guys!", I say as they pile out of the truck.  "Hey George!  Hi Kye, how\'s the boy?", says Sam',
			'"Guys, I\'ve had a LOT of coffee as I waited for you',
			', so lemme go to the can and I\'ll be ready to help with the unload.',
			'Cool! say Jerry.  So I head back into the house, head to the can and do my business.  As I step out of',
			'of the bathroom, I shake my head, "Hey Guys?! Am I seein\' things? Where did that door come from?"',
			'There on what was previously a solid wall, is a door.  Jerry, Sam, and Shaun all look at the door',
			'and stare.  Sam laughing at me, "Dude, did you crap yourself silly?", and goes to the door and opens it.  ',
			'He stops laughing when it opens up with a view of a lake with a nice sandy beach.  Did I mention, there\'s ',
			'no lake near my house?  Kye runs past us, and starts sniffing around.  Curious, we all step through - ',
			'leaving the door open.  "What the heck is that over there?", asks Sam.  "Looks like an old man".', 
			' "Greetings strangers, I am Lork, and who might you be?", says the old man and we all try to talk at the same time.');
		
var useData = function (json) {
	for (var i = 0; i < json.buddies.length; i++) {
		var buddy = json.buddies[i];
		console.log("My name is " + buddy.name);
	};
};

useData(json1);

console.log('"You came through the Doorway, you must be the heroes that were foretold of,',
			'but where are your weapons?"  Shaun asks, "Weapons? What are you talking about?',
			' We\'re only here because this strange door appeared in George\'s house and we had ',
			'no idea it led here."  Before I know it, my dog, Kye, chimes in with, "I believe there ',
			'some weapons back at the house, my master is somewhat of a sportsman." All four of us ',
			'stare slack-jawed at Kye, but the old man acts like this is normal.  "Please retrieve your ',
			'weapons and I will lead you to your steeds."  "Uhhh,,, okay, I\'ll just go get them...", I ',
			'say, still staring at Kye.  "Oh, yes, that reminds me, the last who came through the Doorway ',
			'mentioned the same oddity.  That where you are from, you cannot understand animals when they talk.',
			'Do not fear, he is still the same companion he always was."  Sam and I run back to the door, go into ',
			'the house and find my gun safe and return to my friends with a couple of weapons and as much ammo as ',
			'we can carry.  You would think it would occur to us to question why we needed weapons but strangely, ',
			'when you are confronted with your dog talking to you in actual sentences, you kinda take it for granted ', 
			'that you just MIGHT need them.  "I will summon your steeds for you.", replies the old man and he pulls ',
			'some sort of whistle out and blows several times.  "Before they get here, I should prepare you.  Your ',
			'steeds are not found where you are from.  And yet, you will know them when you see them.  But please, ',
			'fear not - they will be extremely loyal you once bonded."  While we waited, we handed the weapons out. ',
			'The old man ask us about ourselves, how old we were and what our weapons were.');

var useData = function (json) {
	for (var i = 0; i < json.buddies.length; i++) {
		var buddy = json.buddies[i];
		console.log("I'm " + buddy.name + ", I'm " + buddy.age + " and my weapon of choice is a " + buddy.weapon + ".  And the old man replies \"Your steed shall be the " + buddy.ride);
		}
};

useData(json1);

console.log('Ahh," says the old man, "and here are your steeds now.  I will let them introduce themselves."');
			
var useData = function (json) {
	for (var i = 0; i < json.dragons.length; i++) {
		var dragon = json.dragons[i];
	console.log("I'm " + dragon.name + ", say the " + dragon.color + " dragon and I am a  " + dragon.type + ", and my method of attack is I " + dragon.attack + ".");
		}
};

useData(json2);

console.log('"Ummm... okay, just to understand this, you dragons each have an attack method? If that is so, why are do you need us? ',
			'I mean, sure, we have weapons but why would even need us?", asked Jerry.  "Each of our attack methods have a limitation, ',
			'when we use our attacks, we do not have an unlimited supply and it takes time to replenish our energy.", replied Sleet. ',
			'So how many times can you use your attacks?" "Usually once a day, possibly more if the attacks are minor, but they ',
			'seldom are." "So we come in when you have expended your attack, is that it?", asks Shaun.  "Something like that", say the ',
			'old man.  "Well if that\'s the case, how much ammo do we have?", asks Jerry.');

var totalAmmo;

function ourAmmo ( ) {
	console.log(rifleRounds);
	totalAmmo = (rifleRounds + shotShells + magRounds + (clips45 * 8));
	console.log(totalAmmo + "totalAmmo");
}

console.log(ourAmmo + "ourAmmo");




//var ammo = (rifleRounds + shotgunShells + magnumRounds + (clips45 * 8))
//	console.log('"We have a total of '+ ammo + ' rounds, I hope that is enough"');
			  			





alert("JavaScript works!");