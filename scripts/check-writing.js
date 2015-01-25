var assert = require('assert');


it('should return english string values from numbers', function() {
 assert.equal(giveNumber(0), "zero");   
}

var toEnglish = ['zero', 'one', 'two', 'three', 'four', 'five'];

function giveNumber(a) {
    if (a == 0) {
        return toEnglish[0];  
    }
    else if (a == 1) {
        return toEnglish[1];   
    }
    else if (a == 2) {
        return toEnglish[2];   
    }
    else if (a == 3) {
        return toEnglish[3];
    }
    else if (a == 4) {
        return toEnglish[4];  
    }
    else if (a == 5) {
        return toEnglish[5]; 
    }
    else (a > 5) {
        console.log('I cannot count that high brosef');
    }
}


/* all i get is error messages... We need to review mocha and the 'it' statement plz */







