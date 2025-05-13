//arrays
//how to declare
const myArray=[1,2,3,4,5,true,"kajal"]
//in js array is resizable
 const myHeros=["shaktiman","nagraj","thor","spiderman"]

 const dc=["superman","nagraj"]
 //myHeros.push(dc)
 //console.log(myHeros[1]);
 const allHeros = myHeros.concat(dc)
 //console.log(allHeros);
//spread
 const another_array=[1,2,3,[4,5,6],7,[6,7, [4,5]]]
 const real_another_array= another_array.flat(Infinity)
 console.log(real_another_array);
 //data scrap
 console.log(Array.isArray("kajal"));
 console.log(Array.from("kajal"));
 console.log(Array.from({name:"kajal"}));//intersting

 let score1=140 
 let score2=150 
 let score4=160 
 let score5=180 
 console.log(Array.of(score1,score2,score4,score5));


 
 
 
