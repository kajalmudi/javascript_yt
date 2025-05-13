//dates store comparison and access
//alwys read mdm
//jan 1,1970 starts temporal 
let mydate=new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(typeof mydate);

//my own date
let myOwnDate= new Date(2003,5,24)
console.log(myOwnDate.toDateString);
//timestamp
let myTimestamp=Date.now()
 console.log(myTimestamp);
 console.log(myOwnDate.getTime());
 ;
 


