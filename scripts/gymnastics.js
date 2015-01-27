var assert = require('assert');
var events = require('../apis/github/users/adamkarb/events.json');



assert(events.length);

function answer(){
    var index = 0
    var event = events[0];
    var numberOfPushEvents= 0
    
    if (firstEvent.type == "PushEvent" ) {
        numberOfPushEvents++;
    }
    
    return {
        'total': events.length,
        'PushEvent': {
            "total": 0
        
        }
    }
}  //END answer


describe('the setup', function(){
    it('should have events', function(){
        assert(events);   
    });
});

it('should have an `answer` function', function() {
    assert(answer);
    assert(typeof answer == 'function');
});

describe('theanswer', function() {
    var theAnswer = answer();
    
    it('should have 30 total events', function(){
            assert(theAnswer.total === 30);
    });
    
    it('should have some `PushEvent` entries', function() {
        assert(theAnswer.PushEvents.total);
    });
    
    
});


//Dont even know how to start
