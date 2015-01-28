var assert = require('assert');




function solution (x) {

    var sum = 0;
    
        for(i = 0; i < x; i++) {
    
        if (i % 3 === 0 || i % 5 === 0) {
        
            sum+=i;
        }

    }
   
    return sum;
    
};
console.log(solution(10));
console.log(solution(20));
console.log(solution(100));
console.log(solution(1000));



    //    var counter = 0;
//    if (x % 3 === 0 || x % 5 === 0) {
//        return x;
//    } 
//    
//    else {
//        console.log('broken');    
//    }
    


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
    
    