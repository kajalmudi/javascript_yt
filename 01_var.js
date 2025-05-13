const accountId=144553
let accountEmail="mudikajal10@gmail.com"
var accountPassword="12345"
var accountCity="raniganj"
let accountState;//undefined

//accountId=2 not allowed
accountCity="bengal"
accountPassword="6262873"
accountEmail="hjdsj@gmail.com"
console.log(accountId);//prefer not to use var
//always use const and let keyword for var declr 
console.table([accountCity,accountEmail,accountId,accountPassword]);
//not use var becuase in issue of block scope and functional scope