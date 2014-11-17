// -------- Panel function by: Devika
var panel='<div data-role="panel" id="panel" data-position-fixed="true">'+
					'<ul id="icons">'+
						'<li><a href="#page-activity"><img src="icons/activityFeed.png" alt=""><span style="	text-shadow: none;"><b>Post Feed</b></span></a></li>'+
						'<li><a href="#page-messages"><img src="icons/messages.png" alt=""><span style="	text-shadow: none;"><b>My Posts</b></span></a></li>'+
						'<li><a href="#page-profile" onclick="getInfo()" ><img src="icons/profile.png" alt=""><span style="text-shadow: none;"><b>Profile</b></span></a></li>'+
						'<li><a href="#page-settings"><img src="icons/Settings.png" alt=""><span style="	text-shadow: none;"><b>Settings</b></span></a></li>'+
						'<li><a id="logOut" href="#" onclick="logout();"><img src="icons/signOut.png" alt=""><span style="	text-shadow: none;"><b>Logout</b></span></a></li>'+
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
   /*$(document).on('swiperight', '.page-panel', function(e){
	   if($.mobile.activePage.jqmData('panel')!=='open'){
		   if(e.type==='swiperight') {
			   $('#panel').panel('open');
		   }
	   }
   }); // this will reveal the panel when swipping right */
}); 

$(document).on("pagecreate", "#page-settings", function(){
    $("#flip-1").on("change", function(){
        if ($(this).val() == "off"){
            $("#flip-2").val("on").slider( "refresh" );
        }
        
        ShowList();
    });
    $("#flip-2").on("change", function(){
            if ($(this).val() == "off"){
            $("#flip-1").val("on").slider( "refresh" );
        }
        
        ShowList();
    });
});


