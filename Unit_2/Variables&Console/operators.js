/*! Operators
    These are what help us manipulate our data so that we can update, increase, separate, or simply change it all together.
    - Plus        +
    - Times       *
    - Power       **
    - Dot         .
    - Assignment  =
    - Comparison  ==
    
    Used to:
        - Assign
        - Compare
        - Arithmetic
        - Logical
        - Conditional
*/

    Expressions & Statement:

    keyword name (expression) {
        code block that runs
    }
*/

/*
    Comparison Operators
    - JS is helpful and does something called "coercion" when
    comparing values.
        -coercion is the process of converting a value from one type to another.
*/

// Equal To =
// JS assumed we wanted to check if 3 equals 3, this is checking values

console.log("3" == 3);

// Strict Equal To, ===
// Check if the two values and the two datatypes are equal.
// Equal value and of same datatype.

console.log(3 === 3); // true
console.log("3"=== 3); // false

// Not Equal to, !=
console.log("3" != 3); // false
console.log("3" != 4); // true
35709