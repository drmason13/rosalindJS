// "requirements"
const analysis = require('./analysis.js');
<<<<<<< HEAD
const fs = require("fs");
const readline = require("readline");

// testing
var path = './io/';
var filename = 'rosalind_gc.txt';
var fullpath = path + filename;

// setting up ready to readline
const rl = readline.createInterface({
    input : fs.createReadStream(fullpath, {
        encoding : "utf8",
    }),
});

//parse data from file using a readstream
var currentId;
var currentString;
var DNAstore = [];

rl.on('line', function(line){
    //console.log();
    //console.log(line);
    if (line.charAt(0) == '>'){
        //console.log('New ID found; making DNA object...');
        try {
            DNAstore.push(new analysis.DNA(currentString, currentId));
            //console.log(DNAstore);
        }
        catch(err){
            //console.log(err);
            //cnosole.log("This is the first ID found, carry on...");
        }
        //console.log("current ID: ", line);
        currentId = line.slice(1);
        currentString = '';
    }
    else {
        currentString += line;
        //console.log("current string: ", currentString, " , after adding: ", line);
    }
});

rl.on('close', function(line){
    ////console.log('last line. Creating last DNA object...');
    ////console.log(currentString);
        DNAstore.push(new analysis.DNA(currentString, currentId));
    ////console.log(DNAstore);
    
    // code here to wait for asynchronous call to finish!
    
    var answer = DNAstore.reduce((dnaX, dnaY) => {
        if (dnaX.computeXYcontent() > dnaY.computeXYcontent()){
            return dnaX;
        }
        else {
            return dnaY;
        }
    });
    console.log(answer.id);
    console.log(answer.computeXYcontent());
});

=======

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
>>>>>>> clipboard
