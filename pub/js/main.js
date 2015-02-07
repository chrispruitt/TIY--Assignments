$(document).ready(function() {
    
    
    
    $("button").on('click', function {
        $.post("https://api.github.com/repos/TheIronYard--Orlando/FEE--2015--SPRING/issues/252/comment?access_token=8acb8c2be6e24b7a0bda74f57f1225c76bed52e8", JSON.stringify({"body": $("#comments").val()})
                    //$("#comments").val("")
              );
    
    })
    
    
    
    
    
    
    
});


//$.post("https://api.github.com/repos/TheIronYard--Orlando/FEE--2015--SPRING/issues/252/comments?access_token=8acb8c2be6e24b7a0bda74f57f1225c76bed52e8", JSON.stringify({"body": $("#comments").val()}));