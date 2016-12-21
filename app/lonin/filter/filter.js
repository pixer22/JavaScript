window.onload = function() {
    (function () {
        var inputElts = window.document.getElementsByTagName('input');

        for(var i =0; i < inputElts.length; i++){
            var elt = inputElts[i];

            if (elt.type != 'text' || !elt.getAttribute('data-allowed-chars')) {
                continue;
            }
            elt.addEventListener('keypress', filter, false);
        }

        function filter(event) {
            var target = event.target;

            var code = event.charCode || event.keyCode;
            if (code < 32 || event.ctrlKey || event.altKey) {
                return;
            }
            var text = target.value + String.fromCharCode(code);

            var allowed = target.getAttribute('data-allowed-chars');
            var messageId = target.getAttribute('data-id');

            if (messageId) {
                var messageElement = window.document.getElementById(messageId);
            }

            console.log(typeof (allowed));
            var newPat = new RegExp(allowed);
            console.log(typeof (newPat));
            console.log(newPat);
            if (text.search(newPat) == -1) {
                // event.preventDefault();
                if (messageId) {
                    messageElement.style.visibility = 'visible';
                }
            } else {
                if (messageId) {
                    messageElement.style.visibility = 'hidden';
                }
            }


        }

    })();
};