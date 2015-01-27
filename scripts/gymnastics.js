var assert = require('assert');
var events = require('../apis/github/users/adamkarb/events.json');



assert(events.length);

function answer(){
    return {
        'total': events.length   
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
