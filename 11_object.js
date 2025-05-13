//object is very inp for mastering in javascript
//declare literal,constructor
//singleton alwys uses constructor
//obej ltlr
//Object.create
const mySymbol=Symbol("key1")

const jsUser={
    name:"kjsl",
    "full_name":"kajal Mudi",
    [mySymbol]:"mykey1",
    age:18,
    location:"raniganj",
    email:"mudikajal10@gmail.com",
    isLoggedIn:false,
   // lastLoggedIn=["monday","saturday"]
}
//console.log(jsUser.email);
//console.log(jsUser["email"]);
//console.log(jsUser["full_name"]);
//console.log(jsUser[mySymbol]);

jsUser.email="kndfeiuf@gmailcom"
// Object.freeze(jsUser)

//function
jsUser.greeting = function(){
    console.log("hello js user");
    
}
jsUser.greetingTwo = function(){
    console.log(`hello js user,${this.full_name}`);
    
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

//alwys use .dot for accessing
//all about of object
//object part two---------------------------------

//singleton constructor
