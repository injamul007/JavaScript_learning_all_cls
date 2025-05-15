//? Some of basic Comparison Operator
// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 < 1)
// console.log(2 == 1)
// console.log(2 != 1)

// console.log("2" > 1)
// console.log("02" > 1)

// console.log(null > 0 ); //? false //  comparison operator
// console.log(null == 0 ); //? false // Equality Operator
// console.log(null >= 0 ); //? true
// console.log(undefined >= 0 ); //? false
// console.log(undefined < 0 ); //? false
// console.log(undefined == 0 ); //? false
//?**** The reason is that an equality check {==} and comparisons check { >, <, >=, <= } work differently.
//?**** Comparisons convert null to a number, treating it as 0.
//?**** That's why (LineNumber13) null >= 0 is true and (LineNumber11) null > 0 is false.
//*** it has to be avoided for inconsistency of the code */
//? === This is a strict check for equality chick because of it checks value and also data types.
// console.log("2" == 2) //? it will give true value because of it checks only value,not data types.
// console.log("2" === 2) //? it will give false value because it checks value and also data types. so we can say it is a strict method of equality checking.



