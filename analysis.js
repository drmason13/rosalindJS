function countX(char){
    /* str -> int
    Method of basic object.
    Returns number of times char appears in this string
    char is a single character
    */
    var i = 0;
    var count = 0;
    for (i = 0; i < this.length; i++) {
    if (this.DNA.charAt(i).toUpperCase() == char) {count ++;}
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

function show_RNA(DNA){
        /* str -> str
    Returns DNA with all instances of 'T' replaced with 'U'
    */
    var i = 0;
    var current = '';
    var RNA = [];
    for (i = 0; i < DNA.length; i++) {
        current = DNA.charAt(i).toUpperCase();
        if (current == 'T') {RNA.push('U');}
        else {RNA.push(current);}
        }
    return RNA.join('');
}

function to_RNA(){
    this.DNA = this.RNA;
}

function basic(DNA){
    /* str -> obj
    Creates an object containing basic properties for a single DNA string
    DNA is a string containing many of A,C,G, & T and nothing more (no id)
    Properties:
    Count of total
    DNA or RNA?
    if DNA
        Count for each of A,C,G,T
    else if RNA
        Count for each of A,C,G,U
    */
    this.length = DNA.length;
    this.countX = countX;
    this.DNA = DNA;
    this.RNA = show_RNA(DNA);
    this.to_RNA = to_RNA;
    this.is_RNA = is_RNA;
}