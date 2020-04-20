function system_goBack() {
    if(system.id == 1) {
        return false;
    }
    var targetId = system.id - 1;
    system.targetId = system.id;

    $("#content-" + targetId).css({'right':'100%;'});
    $("#content-" + targetId).stop().animate({'right':0}, { duration: 150, queue: false });

    $("#content-" + system.id).css({'left':'auto', 'right':'auto'});
    $("#content-" + system.id).stop().animate({'left':'100%'}, { duration: 150, queue: false, done: function () {
        $("#content-" + system.targetId).remove();
    }});

    system.id = targetId;
}