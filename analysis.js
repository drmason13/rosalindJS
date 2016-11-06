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
        if (this.DNA.charAt(i).toUpperCase() == char){
            count ++;
        }
    }
    return count;
}

function is_RNA(){
    /* -> boolean
    returns true if RNA, false if DNA
    check is based on presence of T (DNA) and absence of U (RNA)
    */
    if (this.countX('U') == 0 & this.countX('T') > 0){
        return false;
    }
    else return true;
}

function countAll(){
    /* -> array of int
    counts all relevant characters (A,C,G) and T for DNA and U for RNA
    returns counts as array in alphabetical order
    does not return irrelevant counts (i.e. DNA won't return 0 count for U)
    */
    var count_list = [this.countX('A'), this.countX('C'), this.countX('G')];
    if (this.is_RNA() == true){
        count_list.push(this.countX('U'));
    }
    else {
        count_list.push(this.countX('T'));
    }
    return count_list;
}

function show_RNA(DNA){
        /* str -> str
    Returns DNA with all instances of 'T' replaced with 'U'
    */
    var i = 0;
    var current = '';
    var RNA = [];
    for (i = 0; i < DNA.length; i++) {
        current = DNA.charAt(i).toUpperCase();
        if (current == 'T'){
            RNA.push('U');
        }
        else {
            RNA.push(current);
        }
    }
    return RNA.join('');
}

function to_RNA(){
    this.DNA = this.RNA;
}

exports.basic = function basic(DNA, id){
    /* str -> obj
    Creates an object containing basic properties for a single DNA string
    DNA is a string containing many of A,C,G, & T/U and nothing more (no id)
    id is optionally supplied separately as second argument.
    */
    if (id == undefined) {
        id = 0;
    }
    this.length = DNA.length;
    this.countX = countX;
    this.countAll = countAll;
    this.DNA = DNA;
    this.RNA = show_RNA(DNA);
    this.to_RNA = to_RNA;
    this.is_RNA = is_RNA;
    this.id = id;
};