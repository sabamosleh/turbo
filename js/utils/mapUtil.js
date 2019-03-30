// var mapUtil = new function() {

    function getCurrentPsn()  {
        // One-shot position request.
        var pos ="";
        try {
            navigator.geolocation.getCurrentPosition(function(position) {
                    pos = new L.LatLng(
                    position.coords.latitude,
                    position.coords.longitude
                );
                ide.map.setView(pos, settings.coords_zoom);
            });
        } catch (e) {}

        return pos;
    }
// }