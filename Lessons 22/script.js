
$(document).ready(function() {
    _.getUser("#getUser", function(obj) {
        console.log(obj);
        var $cont = $(".container");
        for (key in obj) {
            $cont.append(`<h2>${obj[key]}</h2>`);
        }
    });
})