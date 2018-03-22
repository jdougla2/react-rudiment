//this is stuff to left of dot == Implicit binding

var sayName = function(lang1, lang2, lang3){
	console.log('My name is ' + this.name + ' and I know ' + lang1 + ', ' + lang2 + ', and ' + lang3);
};

var stacey = {
	name: 'Stacey',
	age: '34',
	momStatus: 'Got it going on',
};

var languages = ['JavaScript', 'Ruby', 'Python'];

//explicit binding
//call == takes the object you want to call through the function
//apply == like call, but applies all of an array
//bind == call, but it binds it to a function
var newFn = sayName.bind(stacey, languages[0], languages[1], languages[2]);
console.log('Here');
newFn();