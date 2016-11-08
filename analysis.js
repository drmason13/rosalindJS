function countX(char){
    /* str -> int
    Method of basic object.
    Returns number of times char appears in this string
    char is a single character.
    If more than one character is supplied, return undefined
    */
    if (char.length != 1){
        return undefined;
    }
    var i = 0;
    var count = 0;
    for (i = 0; i < this.length; i++) {
        if (this.string.charAt(i).toUpperCase() == char){
            count ++;
        }
    }
    return count;
}

function test_type(){
    /* -> string
    returns "DNA" or "RNA" as appropriate.
    check is based on presence of T (DNA) and absence of U (RNA)
    */
    if (this.countX('U') == 0 & this.countX('T') > 0){
        return "DNA";
    }
    else return "RNA";
}

function countAll(){
    /* -> array of int
    counts all relevant characters (A,C,G) and T for DNA and U for RNA
    returns counts as array in alphabetical order
    does not return irrelevant counts (i.e. DNA won't return 0 count for U)
    */
    var count_list = [this.countX('A'), this.countX('C'), this.countX('G')];
    if (this.type == "RNA"){
        count_list.push(this.countX('U'));
    }
    else if (this.type == "DNA"){
        count_list.push(this.countX('T'));
    }
    return count_list;
}

function to_RNA(){
        /*
    Returns string with all instances of 'T' replaced with 'U'
    */
    if (this.type == "DNA"){
        var i = 0;
        var current = '';
        var RNA = [];
        for (i = 0; i < this.string.length; i++) {
            current = this.string.charAt(i).toUpperCase();
            if (current == 'T'){
                RNA.push('U');
            }
            else {
                RNA.push(current);
            }
        }
        this.string = RNA.join('');
        this.type = "RNA";
    }
}

function to_DNA(){
        /*
    Returns string with all instances of 'U' replaced with 'T'
    */
    if (this.type == "RNA"){
        var i = 0;
        var current = '';
        var DNA = [];
        for (i = 0; i < this.string.length; i++) {
            current = this.string.charAt(i).toUpperCase();
            if (current == 'U'){
                DNA.push('T');
            }
            else {
                DNA.push(current);
            }
        }
        this.string = DNA.join('');
        this.type = "DNA";
    }
}

function toggle_type(){
    /*
    Tests type of string and calls to_RNA or to_DNA to switch type
    */
    if (this.type == "DNA"){
        this.to_RNA();
    }
    else if (this.type == "RNA"){
        this.to_DNA();
    }
}

function compliment(){
    /*
    Returns string with all characters complimented.
    That is, 'A' <-> 'T' (or 'U' if type RNA)
             'C' <-> 'G'
    */
    var compliments;
    if (this.type == "DNA"){
        compliments = {
            'A' : 'T',
            'C' : 'G',
            'G' : 'C',
            'T' : 'A',
        };
    }
    else if (this.type == "RNA"){
        compliments = {
            'A' : 'U',
            'C' : 'G',
            'G' : 'C',
            'U' : 'A',
        };
    }
    
    var i = 0;
    var current = '';
    var joiner = [];
    for (i = 0; i < this.string.length; i++){
        current = this.string.charAt(i).toUpperCase();
        joiner.push(compliments[current]);
    }
    this.string = joiner.join('');
}

function reverseString(){
    /*
    Returns string with characters reversed.
    */
    var i;
    var joiner = [];
    for (i = 0; i < this.string.length; i++){
        joiner.unshift(this.string.charAt(i).toUpperCase());
    }
    this.string = joiner.join('');
}

function reverseCompliment(){
    /*
    calls both reverse and compliment (the order isn't important)
    */
    this.compliment();
    this.reverseString();
}

function computeXYcontent(X, Y){
    /* str, str -> float
    takes two DNA characters (A,C,G,T or U) and computes the percentage of the
    string that are those two characters.
    Defaults to X = C and Y = G to solve Rosalind problem "GC" unless both
    parameters are provided.
    http://rosalind.info/problems/gc/
    */
    if (X == undefined | Y == undefined){
        X = 'C';
        Y = 'G';
    }
    var XYcontent = 0;
    XYcontent += this.countX(X);
    XYcontent += this.countX(Y);
    var total = this.length;
    return (XYcontent / total) * 100;
}

function computeHammingDistance(otherDNA){
    /* DNA -> int
    calculates the number of characters that differ in the DNA strings of this 
    and another DNA object provided as a parameter.
    */
    if (this.length == otherDNA.length){
        var i;
        var counter = 0;
        for (i = 0; i < this.length; i++){
            if (this.string.charAt(i) != otherDNA.string.charAt(i)){
                counter++;
            }
        }
    return counter;
    }
    else return "Strings are of different lengths, this is not expected.";
}

exports.DNA = function DNA(string, id){
    /* str -> obj
    Creates an object containing basic properties for a single DNA string
    DNA is a string containing many of A,C,G, & T/U and nothing more (no id)
    id is optionally supplied separately as second argument.
    */
    if (id == undefined){
        id = 0;
    }
    //methods
    this.countX = countX;
    this.countAll = countAll;
    this.test_type = test_type;
    this.to_RNA = to_RNA;
    this.to_DNA = to_DNA;
    this.toggle_type = toggle_type;
    this.compliment = compliment;
    this.reverseString = reverseString;
    this.reverseCompliment= reverseCompliment;
    this.computeXYcontent = computeXYcontent;
    this.computeHammingDistance = computeHammingDistance;
    
    //properties
    this.string = string;
    this.length = string.length;
    this.type = this.test_type(string);
    this.id = id;
};