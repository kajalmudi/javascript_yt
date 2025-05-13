//arrow functions=>
    //this keyword
//this keyword use in context
const user={
    username:"kajal",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username="raj"
// user.welcomeMessage()
//console.log(this);//denote empty obj

//arroe function
// function chai(){
//     let username="kajal"
//     console.log(this.username);//undefined
    
// }
// chai()

// const chai=function(){
//     let username="kajal"
//     console.log(this.username);
    

// }
//chai()
const chai=()=>{
    let username="kajal"
    console.log(this);
    

}
chai()

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
//console.log(addTwo(4,5));
//implicit function
// const addTwo=(num1,num2)=>(num1+num2)
// console.log(addTwo(4,5));


//const myArray=[2,5,7,,8,3]
//myArray.forEach()=>







