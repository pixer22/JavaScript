"use strict"
;(function () {
    function getUserInfo(form, callback) {
        $(form).on('submit', function (event) {
            event.preventDefault();
            var obj = {};
            $(this).find('[type=text]').each(function () {
                obj[$(this).attr('name')] = $(this).val();
                $(this).val('');            });
            console.log (obj);
            callback (obj);
        })
    }
    window._ = {
        'getUserInfo': getUserInfo
    }
})();