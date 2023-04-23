console.log("Control Flow");
console.log("Loops");

///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////      Loops     ////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////


// Run the specifiv task times ....

// without for loop 

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// For loop

// for(let i = 1 ; i <= 5 ; i++) {
//     console.log(i);
// }


// Use case of Folr Loop ==>
// let dishes = ['Biryani', 'Karahi' ,'Tikka' ,'Daal']

// // Access the array values
// for(let i = 0 ; i < dishes.length ; i++){     // infinite loop in case we miss conditional statement
//     console.log(dishes[i]);
// }

// iteration
// 0 , 1 , 2, 3 and so on 



///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////    While Loops     ////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

// let i = 0
// while(i <= 5){    // if we miss condition so return Error !!!  
//     console.log("While Loop " +i);
//     i++
// }


// // Loop on Array through While Loop
// let dishes = ['Biryani', 'Karahi' ,'Tikka' ,'Daal']

// let i = 0 ;
// while (i < dishes.length) {
//     console.log(dishes[i]);
//     i++ ;   //without this statemenet we will get infinite loop
// }



///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////  DO While Loops     ///////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
// we don't use do while loop

// let i = 1 ;

// do{
//     console.log(`At least run time ${i}`);
//     i++ ;
// }while(i <= 1) // condition false already





///////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////// if , else , else if statements  //////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////


// let budget = 7000 ;

// if (budget < 6000) {
//     console.log("greater");
// }
// else{
//     console.log("Not Greater");
// }



// if 1st condtion true control get out the scope

// let age = 14 ;
// if (age >= 18) {
//     console.log("you are allowed to drive ...");
// }
// else if (age >= 14 && age < 18) {
//     console.log("Some more time to get 18+ ...");
    
// }
// else if (age > 6 && age < 14) {
//     console.log("You are Kid ((NOT ALLOWED)) ...");
    
// }
// else{
//     console.log("Put invalid Age ...." + age);
        //// Run if all condition false     
// }




// Nested if-statements in JS

// let num = 23; 
// if (num > 22) {
//     console.log("run if 1st condition true");
//     if (num > 21) {
//         console.log("run if both condition true");
//     }
// }




//// Break and continue statements in JS

//// Also called jump Statements 

//// Continue statements 

//// Used to skip some  values of loops

// for(let i = 0 ; i <= 10 ; i++){
//     if (i == 2) {
//         continue ; // move towards the next iteration
//     }
//     console.log("value of i = " + i);
// }




// // Break in Loops

// for(let i = 1 ; i <= 10 ; i++){
//     if (i == 5) {
//         break ; // Terminate the loops
//     }
//     console.log("value of i = " + i);
// }



///////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////// Logical Operators In JS  //////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

// // And && , Or || , ! Not Operator 
// // Example 

// let email = "officialmubashir77@gmail.com"

// if (email.length >= 12 && email.includes("@")) {
//     console.log("Valid Email Address .");
// }
// else{
//     console.log("Please Check Your Email Address ...");
// }


// // Not Operator  ! true to false and false to true

// let statusCheck = true ;
// if (!statusCheck) {
//     console.log("Status is " + statusCheck);
// }


// Priorities 

// Not
// And , OR from left to right

///////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////// Var and Block Scopes  ////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

// Scope >>= area where variable is defined or accessible


// //Globla Scope
// let score = 19 ;



// if(true){

       // block scope 
//     let  score = 50 ;
//     console.log(score);
// }
// console.log(score);  //// Error score is not defined


// ************************************************************************************************
// const score = 23 ;
// if (true ) {

//     const score = 43 ;
//     console.log(score);
// }
// console.log(score);

// ************************************************************************************************



///////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////// Ternary Operator In JS  ////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

// let age = 18 ;

// let finOutput = age >= 18  ?  "You are Eligible ..." : "You are not Eligible ." ;
// console.log(finOutput);



// *************************************** Switch Case Statement **************************************

// let operation = 'multiply';
// let num1 = 5;
// let num2 = 10;
// let result;

// switch (operation) {
//   case 'add':
//     result = num1 + num2;
//     break;
//   case 'subtract':
//     result = num1 - num2;
//     break;
//   case 'multiply':
//     result = num1 * num2;
//     break;
//   case 'divide':
//     result = num1 / num2;
//     break;
//   default:
//     result = 'Invalid operation';
// }

// console.log(result); // Output: 50



// ********************************************************************************************************
// ********************************************************************************************************
// ************************** Revision 2nd Chapeter  Control Flow *****************************************

// for loop 
// while loop
// do while loop
// break ; &&& continue ;
// if else && else if conditions  
// switch case statements ((Always use break in switch case statements))  
// truthy / falsy 
// ternary operator age < 18 ? "kid" : "adult"
