window.onload = function() {

    (function () {
        var inputElts = window.document.getElementsByTagName('input');

        for(var i =0; i < inputElts.length; i++){
           var elt = inputElts[i];

            if (elt.type != 'text' && !elt.getAttribute('data-chars')) {
                continue;
            }


            elt.addEventListener('keypress', filter, false);
        }

        function filter(event) {
            var target = event.target;
            //console.log(event);

                var code = event.charCode || event.keyCode;
                if (code < 32 || event.ctrlKey || event.altKey) {
                    return;
                }
            var text = String.fromCharCode(code);

            var allowed = target.getAttribute('data-allowed-chars');
            var messageId = target.getAttribute('data-id');

            if (messageId) {
                var messageElement = window.document.getElementById(messageId);
            }

            if (allowed.indexOf(text) == -1) {
                
                event.preventDefault();
                if (messageId) {
                    messageElement.style.visibility = 'visible';
                }
            } else {
                if (messageId) {


                    messageElement.style.visibility = 'hidden';
                }
            }

        }

    }) ();






};