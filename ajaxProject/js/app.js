let articleContainer = $('.row');

var request = $.ajax({
    url: 'http://api.tvmaze.com/shows'
});

request.done(function (allShowInfo) {
    for (var i = 0; i < 50; i++) {

        let showName = allShowInfo[i].name;
        let showIMG = allShowInfo[i].image.original;

        let articleDiv = $('<div>');
        articleDiv.addClass('col-sm-12 col-md-6 col-lg-4 col-xl-4');

        let showImage = $('<img>');
        showImage.attr('src', showIMG);
        showImage.css('display', 'inline-block')

        let showLink = $('<a class="showLink">' + showName + '</a>');
        showLink.attr('data-show-id', (i + 1));
        showLink.attr('href', '#');


        articleDiv.append(showImage);
        articleDiv.append(showLink);

        articleContainer.append(articleDiv);
    }
});

$(document).on('click', '.showLink', function (event) {
    var usedLink = $(this).attr('data-show-id');
    localStorage.setItem('data-show-id', usedLink);

    window.location.href = 'single.html';

    // const request = $.ajax({
    //     url: 'http://api.tvmaze.com/shows'
    // });

    // request.done(function (selectedShow) {
    //     let singleShow = null;
    //     for (let i = 0; i < 50; i++) {
    //         // console.log(selectedShow[i]);
    //         if ($(selectedShow[i]).id === usedLink) {
    //             singleShow = selectedShow[i];
    //             console.log(singleShow);
    //             break;
    //         }
    //     }

    //     const showName = singleShow.name;
    //     let title = $('<h1>');
    //     const ffs = title.text(showName);
    //     $('.singlShow').append(ffs);

});