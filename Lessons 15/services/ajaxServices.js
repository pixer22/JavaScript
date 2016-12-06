//
function ajaxService() {
    // External interface
    return {
        getJSON: _getJSON,
        postJSON: _postJSON,
        updateJSON: _updateJSON
    };
    function _getJSON(){

        var xhr = new XMLHttpRequest();
        xhr.open('GET', './auth/auth.json', false);
        xhr.send(null);

        var obj = JSON.parse(xhr.responseText);
        return obj;

        // xhr.onreadystatechange = function () {
        //     if (xhr.readyState == 4 && xhr.status == 200) {
        //         var obj = JSON.parse(xhr.responseText);
        //         return obj;
        //     }
        //
        // };
    }
    function _postJSON() {
        return 'function _postJSON';
    }
    function _updateJSON() {
        return 'function _updateJSON'
        
    }
}




