//scope use in function
//closure many topicss
//{}-scope
//problem
var c=300 //global scope
let a = 200
if(true){
    let a=10
    const b=20
    var c=30
    console.log("inner:",a);//scope
    
}
function one(){
    const username="kajal"
    function two(){
        const website="yt"
        console.log(username);
        
    }
   // console.log(website);
    two()
    
}
one()
//block scope document obj model
//console.log(a);
//console.log(b);
//console.log(c);

if(true){
    const username="kajal"
    if(username==="kajal"){
        const website="yt"
       // console.log(username+website);
        
    }
    //console.log(website);
    
}
//console.log(username);

//============================555333333333333333333333%%%%%%
function addone(num){
    return num+1

}
addone(5)

const addTwo=function(num){
    return num+2
}
addTwo(5)

