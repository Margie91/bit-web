let articleContainer = $('.row');

var request = $.ajax({
    url: 'http://api.tvmaze.com/shows'
});

request.done(function (allShowInfo) {
    for (var i = 0; i < 50; i++) {

        let showName = allShowInfo[i].name;
        let showIMG = allShowInfo[i].image.original;

        let articleDiv = $("<div style = 'margin-bottom:20px'>");
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

$(document).on('click', 'a', function (event) {
    var usedLink = $(this).attr('data-show-id');
    localStorage.setItem('data-show-id', usedLink);

    window.location.href = 'single.html';

});

function search() {
    let searchText = $('.search').val();

    let request = $.ajax({
        url: 'http://api.tvmaze.com/search/shows?q=' + searchText
    })


    request.done(function (singleShowInfo) {
        console.log(singleShowInfo);

        $('.row').text('');

        $('h1').text("Search Results");

        for (let i = 0; i < singleShowInfo.length; i++) {
            let searchedShowIMG;
            let searchedShowName = singleShowInfo[i].show.name;
            let searchedURL = singleShowInfo[i].show.id;

            if (singleShowInfo[i].show.image == null) {
                searchedShowIMG = "http://via.placeholder.com/350x500?text=NO+IMAGE"
            } else {
                searchedShowIMG = singleShowInfo[i].show.image.original;
            }

            $('.row').append(`<div class = 'col-sm-12 col-md-6 col-lg-4'>
                                <div style = 'margin-bottom: 5px'>
                                    <img src=` + searchedShowIMG + `>
                                    <a class= 'showLink' href='#' data-show-id=` + searchedURL + `>` + searchedShowName + `</a>
                                </div>
                            <div>`);
        }

    })



}

function searchList() {
    let searchText = $('.search').val();

    let request = $.ajax({
        url: 'http://api.tvmaze.com/search/shows?q=' + searchText
    })
    request.done(function (singleShowInfo) {

        var res = "";
        for (let i = 0; i < singleShowInfo.length; i++) {
            if (i == 5) {
                break;
            }
            let searchedID = singleShowInfo[i].show.id;
            $('#searchList').text("");


            res += `<li><a href="#" data-show-id="` + searchedID + `">` + singleShowInfo[i].show.name + `</a></li>`;
            $('#searchList').append(res);
        }
    })
}
$('.search').on('keydown', function (event) {
    if (event.keyCode == 13) {
        search();
    }
});

$('.search').on('keydown', function (event) {

    searchList();
})
