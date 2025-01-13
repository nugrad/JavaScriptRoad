// 1. const cannot be redeclared or reassigned
const constantValue = 10;
// const constantValue = 20; // Error: Identifier 'constantValue' has already been declared
// constantValue = 20;       // Error: Assignment to constant variable

console.log("const value:", constantValue); // 10

// 2. let allows reassignment but not redeclaration in the same scope
let variableValue = 5;
variableValue = 15; // Allowed
console.log("let reassignment:", variableValue);

// let variableValue = 25; // Error: Identifier 'variableValue' has already been declared in the same scope

// 3. var can be redeclared and has function/global scope
var oldValue = 100;
var oldValue = 200; // Allowed
console.log("var redeclaration:", oldValue);

// 4. Scope demonstration of let and const
if (true) {
    let blockScopedLet = "I am block scoped (let)";
    const blockScopedConst = "I am block scoped (const)";
    console.log(blockScopedLet);  // Accessible
    console.log(blockScopedConst); // Accessible
}
// console.log(blockScopedLet);  // Error: blockScopedLet is not defined
// console.log(blockScopedConst); // Error: blockScopedConst is not defined

// 5. Scope demonstration of var
if (true) {
    var functionScopedVar = "I am function or globally scoped (var)";
}
console.log(functionScopedVar); // Accessible (var ignores block scope)

// 6. Global pollution with var
function testVarScope() {
    var scopedVar = "Inside function";
}
// console.log(scopedVar); // Error: scopedVar is not defined (function scope applies)

// 7. Hoisting behavior
console.log(hoistedVar); // Undefined, but no error (hoisted)
var hoistedVar = "Hoisted variable";

// console.log(hoistedLet); // Error: Cannot access 'hoistedLet' before initialization
let hoistedLet = "Not hoisted like var";

// console.log(hoistedConst); // Error: Cannot access 'hoistedConst' before initialization
const hoistedConst = "Not hoisted like var";

