//object creation part two
//singleton by using constructor
//tinder
//const tinderUser=new Object()
const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="kajl"
tinderUser.isLoggedIn=false
//console.log(tinderUser);

const regularUser={
    email:"mudikajal10@gmail.com",
    fullname:{
        userfullname:{
            firstname:"kajal",
            lastname:"mudi"
        }
    }
}
//console.log(regularUser.fullname.userfullname);
//object merging
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

//const obj3=Object.assign({},obj1,obj2)
//spread
//const obj3={...obj1,...obj2}
//console.log(obj3);
//target-{}
//array ka object

const users =[
    {
        id:1,
        email:"mudikajal10@gmail.com"

    },
    {
        id:1,
        email:"mudikajal10@gmail.com"

    },
    {
        id:1,
        email:"mudikajal10@gmail.com"

    },
]


users[1].email
console.log(tinderUser);
//method
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));






