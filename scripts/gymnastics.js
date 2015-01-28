var assert = require('assert');
var events = require('../apis/github/users/adamkarb/events.json');
console.log(Date());

it('should pass', function() {
    assert(events);
});


function answer() {
    var pushEvents = events.filter(function(item) {
        return item.type == 'PushEvent';
    });
    return {
            
        'total': events.length,
        'PushEvent': {
                'total': pushEvents.length
            }
        }
};

console.log(answer());

var theAnswer = answer();

it('should show that a function "answer" exists', function(){
    assert(answer);
    assert(events.length === 30);
});

it('should return the length when calling answer function', function() {
    assert.equal(theAnswer.total, 30);
});


it('should have "PushEvent" and count of them', function() {
    assert(theAnswer.PushEvent);
    assert(theAnswer.PushEvent.total);
});

//assert(events.length);
//
//function answer(){
//    var index = 0
//    var event = events[0];
//    var numberOfPushEvents= 0
//    
//    if (firstEvent.type == "PushEvent" ) {
//        numberOfPushEvents++;
//    }
//    
//    return {
//        'total': events.length,
//        'PushEvent': {
//            "total": 0
//        
//        }
//    }
//}  //END answer
//
//
//describe('the setup', function(){
//    it('should have events', function(){
//        assert(events);   
//    });
//});
//
//it('should have an `answer` function', function() {
//    assert(answer);
//    assert(typeof answer == 'function');
//});
//
//describe('theanswer', function() {
//    var theAnswer = answer();
//    
//    it('should have 30 total events', function(){
//            assert(theAnswer.total === 30);
//    });
//    
//    it('should have some `PushEvent` entries', function() {
//        assert(theAnswer.PushEvents.total);
//    });
//    
//    
//});
//

//Dont even know how to start
