new binding
var Animal = function(color, name, type){
	//this = {}
	this.color = color;
	this.name = name;
	this.type = type;
};

/var zebra = new Animal('black and white', 'Zorro', 'Zebra');

// window binding
var sayAge = function(){
	console.log(this.age);
};

var me = {
	age 25
};

//if you dont apply any other bindings, 
//it defaults to window binding "undefined"
sayAge();