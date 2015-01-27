var assert = require('assert');



it('should have a `plus` function', function() {
    assert(plus);
    assert.equal(typeof plus, 'function');
    
});

it('should add "zeros"', function() {
    assert.equal(plus("zero", "zero"), 0);
    assert.equal(plus("zero", "one"), 1);
    assert.equal(plus("zero", "two"), 2);
    assert.equal(plus("zero", "three"), 3);
    assert.equal(plus("zero", "four"), 4);
});

function plus(a, b) {
    
    var numbers = {
        'four': 4,
        'three': 3,
        'two': 2,
        'one': 1,
        'zero': 0
        
    };
    
    if (numbers[b] !== undefined) {
        return numbers[b];
    }
    
};


it('should add one to zero', function() {
    assert.equal(plus('zero', 'one'), 1);
});
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