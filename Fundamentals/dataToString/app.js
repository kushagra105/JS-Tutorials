let number = 90210,
    output;

output = String(number);

// Anothers
dato = 4+4;
dato = "4" + "4";


console.log(output);
console.log(output.length);
console.log(typeof output);





// bool to string
output = true;
output = String(true);

// date to string
output = new Date();
output = String( new Date() );

// array to string
output = String( [1,2,3,4] );

// toString()

// output = 20.toString() ; wrong Line
output = true.toString() ;
output = [1,2,3,4].toString() ;

// null cannot be converted since it doesn't exist
output = null.toString() ;