const name="kajal"
const repoCnt=50
console.log(name+repoCnt+"kajal");
//now we are using string interpulation for better 
console.log(`Hello my name is ${name} and my repo count is ${repoCnt}`);//back tick

const gameName= new String('kajalhjd')
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.__proto__);

const newString=gameName.substring(0,5)
console.log(newString);
const anotherString=gameName.slice(-8,4)
console.log(anotherString);





