$("#tab01-contant a").click(function(){
    $(this).removeClass("in-active").siblings().addClass("in-active");
    $("#ayamov a").addClass("in-active");
});

$(document).ready(function(){
    $("#my-tabs li").click(function(){
        var myID = $(this).attr("id");
        $(this).removeClass("inactive").siblings().addClass("inactive");
        $(".my-container div").hide();
        $("#" + myID + "-contant").fadeIn("1000");
        $(".my-container a").click(function(){
            $("#" + myID + "-contant a").addClass("in-active");
            $(this).removeClass("in-active").siblings().addClass("in-active");
        });
    });
});