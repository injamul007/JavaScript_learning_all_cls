const accountId = 144553;
let accountEmail = "injamul007hoque@gmail.com";
var accountPassword = "12345";
accountCity = "Dhaka";

// accountId =2; //? cannot declare CONSTANT / Not Allowed

console.log(accountId);

/*
Prefer not to use var because of issue in block and functional scope in JS.
*/

accountEmail = "abcd@gmail.com";
accountPassword = "2121212";
accountCity = "Rajshahi";

console.table([accountId,accountEmail,accountPassword,accountCity]);