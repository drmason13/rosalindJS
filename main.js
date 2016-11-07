// "requirements"
const analysis = require('./analysis.js');

// testing
console.log(analysis);
var testee = new analysis.DNA("ACCGGGTTTT");
console.log(testee.countAll().join(", "));
console.log("Reverse Compliment");
testee.reverseCompliment();
console.log(testee.string);
console.log(testee.computeXYcontent());
console.log(testee.type);
console.log(testee.countAll().join(", "));
testee.toggle_type();
console.log("toggle_type");
console.log(testee.type);
console.log(testee.countAll().join(", "));