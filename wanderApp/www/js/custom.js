
// -------- Status bar for IOS7
function onDeviceReady() {
    if (device.platform === 'iOS' && parseFloat(device.version) >= 7.0) {
        $('.ui-header > *').css('margin-top', function (index, curValue) {
            return parseInt(curValue, 10) + 20 + 'px';
        });
    }
}

document.addEventListener('deviceready', onDeviceReady, false);



// -------- Panel function by: Devika
var panel='<div data-role="panel" id="panel" data-position-fixed="true">'+
					'<ul id="icons">'+
						'<li><a href="#page-activity"><img src="icons/activityFeed.png" alt=""><span>Activity Feed</span></a></li>'+
						'<li><a href="#page-messages"><img src="icons/messages.png" alt=""><span>Messages</span></a></li>'+
						'<li><a href="#page-profile"><img src="icons/profile.png" alt=""><span>Profile</span></a></li>'+
						'<li><a href="#page-settings"><img src="icons/Settings.png" alt=""><span>Settings</span></a></li>'+
						'<li><a href="#page-logout"><img src="icons/signOut.png" alt=""><span>Logout</span></a></li>'+
					'</ul>'+
				'</div>';
				
$(document).one('pagebeforecreate', function(){
    $.mobile.pageContainer.prepend(panel);
    $("#panel").panel().enhanceWithin();
});

$(document).on('pageinit', '.page-panel', function(){
   $('#panel a').click(function(){
	   if($('.ui-page-active').attr('id')==$(this).attr('href').replace('#', '')) $('#panel').panel('close');
   });
   $(document).on('swiperight', '.page-panel', function(e){
	   if($.mobile.activePage.jqmData('panel')!=='open'){
		   if(e.type==='swiperight') {
			   $('#panel').panel('open');
		   }
	   }
   });
}); 