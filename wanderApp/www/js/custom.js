// -------- Panel function by: Devika
var panel='<div data-role="panel" id="panel" data-position-fixed="true">'+
					'<ul id="icons">'+
						'<li><a href="#page-activity"><img src="icons/activityFeed.png" alt=""><span>Post Feed</span></a></li>'+
						'<li><a href="#page-messages"><img src="icons/messages.png" alt=""><span>My post</span></a></li>'+
						'<li><a href="#page-profile" onclick="getInfo()"><img src="icons/profile.png" alt=""><span>Profile</span></a></li>'+
						'<li><a href="#page-settings"><img src="icons/Settings.png" alt=""><span>Settings</span></a></li>'+
						'<li><a href="#page-logout"><img src="icons/signOut.png" alt=""><span>Logout</span></a></li>'+
					'</ul>'+
				'</div>'; // This will create the list in the pannel with the links to the pages and icons : Roberto
				
$(document).one('pagebeforecreate', function(){
    $.mobile.pageContainer.prepend(panel);
    $("#panel").panel().enhanceWithin();
}); // This is the function to reveal the panel

$(document).on('pageinit', '.page-panel', function(){
   $('#panel a').click(function(){
	   if($('.ui-page-active').attr('id')==$(this).attr('href').replace('#', '')) $('#panel').panel('close');
   }); // This will reveal the pannel when toucking the icon panel
   $(document).on('swiperight', '.page-panel', function(e){
	   if($.mobile.activePage.jqmData('panel')!=='open'){
		   if(e.type==='swiperight') {
			   $('#panel').panel('open');
		   }
	   }
   }); // this will reveal the panel when swipping right
}); 