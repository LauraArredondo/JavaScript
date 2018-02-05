var HelloWorld= "Hey There";
alert(HelloWorld);
console.log(HelloWorld);

HelloWorld= ["Hey There","What's up","how are you", "This is my page"];
console.log(HelloWorld[2]);
console.log(HelloWorld[0]);
console.log(HelloWorld[1]);
console.log(HelloWorld[3]);

console.log(HelloWorld.length);

var fruitArray= ["apple","orange","banana","pear"];
console.log(fruitArray[3]);

for(var i= 0; i < fruitArray.length; i++){
			if(fruitArray[i].indexOf('e') != -1){
				console.log(fruitArray[i]);
			}
		}
fruitArray.splice(1, 1);
		console.log(fruitArray);

fruitArray.splice(2, 0, 'orange');
console.log(fruitArray);
