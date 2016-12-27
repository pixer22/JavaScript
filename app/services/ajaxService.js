//
function ajaxService() {

    // External interface
    return {
        getJSON: _getJSON, //
        postJSON: _postJSON, //
        updateJSON: _updateJSON //
    };

    //
    function _getJSON(callback) {
        // var callback = advanse;

        var xhr = new XMLHttpRequest();
        xhr.open('GET', './json/auth.json', true);
        xhr.send(null);

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var auth = JSON.parse(xhr.responseText);
                callback(auth);
            }
        };
    }
    //
    function _postJSON() {
        return 'function _postJSON';
    }
    //
    function _updateJSON() {
        return 'function _updateJSON';
    }


}



