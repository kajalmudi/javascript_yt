//func ans scope
//why write func very easy
//very inp memory management
//callstack
function myName(){
    console.log("k");
    console.log("a");
    console.log("j");
    console.log("a");
    console.log("l");
    
}
//myName()
function addTwoNum(num1,num2){
    const result=num1+num2
    //console.log(num1+num2);
    console.log("kajal");
    
    return result



}
const result =addTwoNum(3,4)
console.log("result:",result);
//
function loginUser(username){
    if(!username){
        console.log("pls enter a username");
        return
        
    }
    return `${username} just logged in`
}
//console.log(loginUser())

//project for shopping cart
//add sum of things,rest operator
function addCartPrice(val1,val2,...num1){
    return num1

}
console.log(addCartPrice(200,400,500,780));
//obj in func
const user ={
    username:"kajal",
    price:199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
//handleObject(user)
//direct object pass in function
handleObject({
    username:"sam",
    price:199
})
//array is pass function
const myArray=[100,200,300,400]
function secondvalue(getArray){
    return getArray[2]
}
console.log(secondvalue(myArray));



