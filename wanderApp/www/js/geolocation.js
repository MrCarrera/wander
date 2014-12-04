/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/***********Geolocation GEOLOCATION*************/        
     

    // Wait for device API libraries to load

    document.addEventListener("deviceready", onDeviceReady, false);

    // device APIs are available
    //
    function onDeviceReady() {
        
        var options = {maximumAge: 0, timeout: 15000, enableHighAccuracy:true};
        
        navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
    }


    // onSuccess Geolocation
    //
    function onSuccess(position) {
        //Store lat and long for use in ajax posts
        document.getElementById('userLat').value = position.coords.latitude;
        document.getElementById('userLong').value = position.coords.longitude;
        //Store second lat and long for ajax pulls
        document.getElementById('extraUserLat').value = position.coords.latitude;
        document.getElementById('extraUserLong').value = position.coords.longitude;
        
    }

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('There Was An Error Getting Your Location. Please Check That You Have WiFi and Location Services Enabled. '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
        
        
    }

