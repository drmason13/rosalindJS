// "requirements"
const analysis = require('./analysis.js');
const fs = require("fs");
const readline = require("readline");
// testing
var path = './io/';
var filename = 'rosalind_prot.txt';
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

function rosalind_gc(DNAstore){
    var answer = DNAstore.reduce((dnaX, dnaY)=>{
    if (dnaX.computeXYcontent() > dnaY.computeXYcontent()){
            return dnaX;
        }
        else {
            return dnaY;
        }
    });
    return answer;
}
rl.on('line', function(line){
    console.log(currentId);
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
        // check to add (limited, single string) support for data without ID's
        if (currentId == undefined){
            currentString = '';
        }
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
    console.log(DNAstore[0].length);
    console.log(DNAstore[0]);
    console.log(DNAstore[0].showProtein());
    process.exit(1);
});