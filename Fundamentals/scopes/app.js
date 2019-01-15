let a = "a";
let b = "b";
const c = "c";

// fUNCTION Scope
function function_scope() {
    let a = 'A';
    let b = 'B';
    const c = 'C';
    console.log('Function: '+ a,b,c);
}
function_scope();

console.log('Global:'+ a,b,c);

// Block Scope (if, for, and others delimited by {} )
if(true) {
    let a = 'AA';
    let b = 'BB';
    const c = 'CC';
    console.log('BLOCK LEVEL: '+ a,b,c);
}
// FOR
for(let a = 0; a < 10; a++) {
    console.log(a);
}