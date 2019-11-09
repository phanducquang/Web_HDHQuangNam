        function getUrlParameter(sParam) {
            var sPageURL = window.location.search.substring(1),
                sURLVariables = sPageURL.split('&'),
                sParameterName,
                i;

            for (i = 0; i < sURLVariables.length; i++) {
                sParameterName = sURLVariables[i].split('=');

                if (sParameterName[0] === sParam) {
                    return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
                }
            }
        };

        
        var category = getUrlParameter('category');

        function parseDate(date){
            var newYear = date.substr(0,4);
            var newMonth = date.substr(5,2);
            var newDay = date.substr(8,2);
            var newTime = date.substr(11,5)
            return result = newDay + '/'+ newMonth +'/'+ newYear +','+ newTime;
        }