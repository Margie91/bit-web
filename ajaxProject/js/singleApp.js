let showID = localStorage.getItem("data-show-id");

const request = $.ajax({
    url: 'http://api.tvmaze.com/shows/' + showID,
    data: {
        embed: ['seasons', 'cast']
    }
});

request.done(function (showResult) {
    console.log(showResult);

    let showName = showResult.name;
    let showIMG;
    let summary = showResult.summary;

    if (showResult.image == null) {
        showIMG = "http://via.placeholder.com/350x500?text=NO+IMAGE";
    } else {
        showIMG = showResult.image.original;
    }

    let showSeasons = showResult._embedded.seasons;
    let showCast = showResult._embedded.cast;


    let liCast = '';

    for (let i = 0; i < showResult._embedded.cast.length; i++) {
        liCast += `<li>` + showResult._embedded.cast[i].person.name + `</li>`;
    }


    let liSeasons = '';

    for (let i = 0; i < showSeasons.length; i++) {
        if (showSeasons[i].premiereDate == null || showSeasons[i].endDate == null) {
            liSeasons += `<li> Unknown </li>`;
        } else {
            liSeasons += `<li>` + showSeasons[i].premiereDate + ' - ' + showSeasons[i].endDate + `</li>`;
        }
    }

    $('.row').before(`<h1>` + showName + `</h1>`);

    $('.row').append(`<div class ='col-12 col-md-6'>
                            <img src='`+ showIMG + `'>
                            </div>
                            <div class ='col-12 col-md-6'>
                                <h3>Seasons(` + showSeasons.length + `)</h3>
                                    <ul> ` + liSeasons + ` </ul>
                                <h3>Cast</h3>
                                    <ul> ` + liCast + ` </ul>
                            </div>
                            <div class= 'col-12'>
                                <h2>Show Details</h2> ` + summary + `
                            </div>`
    );

    console.log(liSeasons);

    $()

});


//SEARCH
$('.search').on('keydown', function (event) {
    if (event.keyCode == 13) {
        search();
    }
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

        for(let i = 0; i < singleShowInfo.length; i++) {
            let searchedShowIMG;
            let searchedShowName = singleShowInfo[i].show.name;
            let searchedURL = singleShowInfo[i].show.id;

            if(singleShowInfo[i].show.image == null) {
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
