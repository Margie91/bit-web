function movePlayer(click) {
    var player = document.getElementById('player');
    var playerWidth = 125;
    var centerPlayer = playerWidth/2;

    player.style.left = (click.clientX - centerPlayer) + 'px';
    player.style.top = (click.clientY - centerPlayer) + 'px';



}


document.querySelector('body').addEventListener('click', movePlayer);

function stopMoving() {
    
    document.querySelector('body').removeEventListener('click', movePlayer);
}
