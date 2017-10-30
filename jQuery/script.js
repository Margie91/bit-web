// $(function() {
//     // var p = document.createElement('p');
//     var text = document.createTextNode('Hello World!')
//     // p.appendChild(text);
//     var body = document.querySelector('body');
//     body.appendChild(text);
// });

$(function() {
    $('li:first').addClass('bottom_border').text('changed text');
    $('li').addClass('uppercase');
    $('li.active').addClass('activeLi');
    var list_items = $('li');
    var middle = Math.floor(list_items.length/2);
    console.log(list_items);
    $(list_items[middle]).addClass('background');
    console.log(middle);

});
