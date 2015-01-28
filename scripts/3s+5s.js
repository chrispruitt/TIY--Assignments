var assert = require('assert');


var j = 0;
var i = 0;

function solution (x) {

    
    if ( x % 3 == 0 ) {
        for (var i = 0; i < 10; i += 3) {
        
            
            console.log(i);
        };
    } 
    
    if ( x % 5 == 0 ) {
        for (var j = 0; j < 10; j += 5) {

             j; 
            console.log(j);
        };
     }
    
   
    //    var counter = 0;
//    if (x % 3 === 0 || x % 5 === 0) {
//        return x;
//    } 
//    
//    else {
//        console.log('broken');    
//    }
    
};

//console.log(solution(98));

//it('should have a `solution` function', function(){
//  assert(solution);
//  assert.equal(typeof solution, 'function');
//});
//
//it('should have a `solution` for (10, 20, 30)', function(){
//  assert.equal(solution(10), 23);
//  assert.equal(solution(20), undefined);
//  assert.euqal(solution(30), undefined);
//});
//
//it('should have a `solution` for 50', function(){
//  assert.equal(solution(50), undefined);
//});
//
//it('should have a solution for 100', function(){
//  assert.equal(solution(100), undefined);
//});

// What about 1000?
    
    