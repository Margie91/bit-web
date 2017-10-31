// function movePlayer(event) {
//     var player = $('#player');
//     var playerElmentDisplacement = player.width / 2;
        
//     player.style.top = (event.y - playerElmentDisplacement) + "px";
//     player.style.left = (event.x - playerElmentDisplacement) + "px";
// }

// function stopMoving() {
//     body.off('click', movePlayer);
// }
$(function() {
var $body = $('body');
var $stopMovingButton = $('#stop-moving');
var $player = $('#player');
var playerElmentDisplacement = $player.width() / 2;

function movePlayer(event) {

    $player.css({
        "top" : (event.clientY - playerElmentDisplacement) + "px",
        "left": (event.clientX - playerElmentDisplacement) + "px"
    });

};

$body.on('click', movePlayer);


$stopMovingButton.on('click', function () {
    $body.off('click', movePlayer);
});

});