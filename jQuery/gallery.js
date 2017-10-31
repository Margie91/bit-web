var imgs = [
    'https://images.unsplash.com/photo-1440658172029-9d9e5cdc127c?auto=format&fit=crop&w=1426&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D','https://images.unsplash.com/photo-1484151709479-3996843263cf?auto=format&fit=crop&w=1350&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
    'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&w=634&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
    'https://images.unsplash.com/photo-1463008420065-8274332e2be8?auto=format&fit=crop&w=1350&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
];


var gallery = $('<div>');
for (var image of imgs) {
    var i = $('<img>');
    i.attr('src', image);

    gallery.append(i);
}
$('body').append(gallery);

$('img').each(function(index, element) {
    $(element).height((Math.random() * 400) + 100);
});

$(gallery).before('<h1>Gallery</h1>');