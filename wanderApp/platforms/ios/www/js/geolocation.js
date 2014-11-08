/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/***********Geolocation GEOLOCATION*************/        
     

    // Wait for device API libraries to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);

    // device APIs are available
    //
    function onDeviceReady() {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }


    // onSuccess Geolocation
    //
    function onSuccess(position) {
        document.getElementById('userLat').value = position.coords.latitude;
        document.getElementById('userLong').value = position.coords.longitude;
        
        document.getElementById('extraUserLat').value = position.coords.latitude;
        document.getElementById('extraUserLong').value = position.coords.longitude;
        //document.getElementById('extraUserTest').innerHTML = position.coords.longitude;

        
    }

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('codey: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

