var assert = require('assert');



//it('should have a `plus` function', function() {
//    assert(plus);
//    assert.equal(typeof plus, 'function');
//    
//});
//
//it('should add "zeros"', function() {
//    assert.equal(plus("zero", "zero"), 0);
//    assert.equal(plus("zero", "one"), 1);
//    assert.equal(plus("zero", "two"), 2);
//    assert.equal(plus("zero", "three"), 3);
//    assert.equal(plus("zero", "four"), 4);
//});


  var numbers = {
        
        'twenty': 20,
        'nineteen': 19,
        'eighteen': 18,
        'seventeen': 17,
        'sixteen': 16,
        'fifteen': 15,
        'fourteen': 14,
        'thirteen': 13,
        'twelve': 12,
        'eleven': 11,
        'ten': 10,
        'nine': 9,
        'eight': 8,
        'seven': 7,
        'six': 6,
        'five': 5,
        'four': 4,
        'three': 3,
        'two': 2,
        'one': 1,
        'zero': 0
        
    };




function plus(a, b) {
    
    return numbers[a] + numbers[b];
    
};

function prod(a, b) {
    
    return numbers[a] * numbers[b];
    
};

function minus(a, b) {
    
    return numbers[a] - numbers[b];
    
};

function div(a, b) {
    
    return numbers[a] / numbers[b];
    
};



console.log(div('twelve', 'six'));


//it('should add one to zero', function() {
//    assert.equal(plus('zero', 'one'), 1);
//});
//    if (b == 'four') {
//        return numbers[b];   
//    }
//    
//    if (b == 'three') {
//        return numbers[b];
//    }
//    
//    if (b == 'two') {
//        return numbers[b];
//    }
//    
//    if (b == 'one') {
//        return numbers[b];
//    }
//    
//    return 0;










//function toEnglish (a) {
//    return "one";
//}
//it('should return 1 as string "one"', function() {
//    assert.equal(toEnglish(1), "one");
//})
//
//function toEnglish(a) {
//    if (a == 2) {
//        return "two";
//    }
//
//    else {
//        return "this is not the number 2";
//    }
//}
//
//console.log(toEnglish(2));
//
//it('should return "two" when 2 is entered and "not two" if any other number is entered', function () {
//    assert.equal(toEnglish(2), "two");
//
//} )
//
//function toEnglish (a) {
//    if (a == 3) {
//        return "three";
//    } else {
//        return "this is not the number 3";
//    }
//}
//console.log(toEnglish(3));
//
//it('should return "three" when 3 is entered and "not the number 3" if any other number is entered', function() {
//    assert.equal(toEnglish(3), "three");
//
//})
//
//function toEnglish (a) {
//    if (a == 4) {
//    return "four";
//    } else {
//        return "this is not the number 4";
//    }
//}
//console.log(toEnglish(4));
//it('should return "four" when 4 is entered and "not the number 4" if any other number is entered', function() {
//    assert.equal(toEnglish(4), "four");
//})
//
//
//function toEnglish (a) {
//    if (a == 5){
//        return "five";
//    } else { 
//        return "this is not the number 5";
//    }
// }
//console.log(toEnglish(5));
//
//
//
//function toEnglish (a) {
//    if (a == 10) {
//        return "ten";
//    } else {
//        return "this is not the number ten";
//    }
//}
//console.log(toEnglish(10));
//
//it('should return "ten" when 10 is entered and "not the number 10" if any other number is entered', function() {
//    assert.equal(toEnglish(10), "ten");
//})