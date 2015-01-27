var assert = require('assert');




var toEnglish = ['zero', 'one', 'two', 'three', 'four', 'five'];



function print(n) {
   console.log(toEnglish[n]);
   return toEnglish[n];    
}

print(3);

it('should print the string value in words for the number entered', function() {
    assert.equal(print(3), 'three'); 
    assert.equal(print(5), 'seven');
});

//function giveNumber(a) {
//    if (a == 0) {
//        return toEnglish[0];  
//    }
//    else if (a == 1) {
//        return toEnglish[1];   
//    }
//    else if (a == 2) {
//        return toEnglish[2];   
//    }
//    else if (a == 3) {
//        return toEnglish[3];
//    }
//    else if (a == 4) {
//        return toEnglish[4];  
//    }
//    else if (a == 5) {
//        return toEnglish[5]; 
//    }
//    else {
//        console.log('I cannot count that brosef');
//    };
//};





