const request = $.ajax({
    url: 'http://api.tvmaze.com/shows/'
});

request.done(function (shows) {
    let showID = localStorage.getItem("data-show-id");
    let singleShow;

    for (let i = 0; i < 50; i++) {
        if ($(shows[i]).id === showID) {
            singleShow = shows[i];
            console.log(singleShow);
            break;
        }
    }

    // let showTitle = singleShow.name;
    // console.log(showTitle);

    // const showName = singleShow.name;
    // let title = $('<h1>');
    // const ffs = title.text(showName);
    // $('.singlShow').append(ffs);
});