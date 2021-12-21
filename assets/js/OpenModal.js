$(document).ready(function() {

    var url = window.location.href;
    var modalToOpen = url.substring(url.indexOf("#"));

    if(window.location.href.indexOf(modalToOpen) != -1) {
        $(modalToOpen).modal("show");
    }
});