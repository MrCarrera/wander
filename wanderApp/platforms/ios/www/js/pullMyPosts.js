/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */     
jQuery(document).ready(function() {
    // CHANGES POST THREAD BACK BUTTON HREF TO #page-activity TO RETURN TO ALL POSTS
    $(document).on('click', '.toThisPost', function(){
       $("#postThreadBack").attr("href", "#page-activity");
    });
    // CHANGES POST THREAD BACK BUTTON HREF TO #page-messages TO RETURN TO MY POSTS
    $(document).on('click', "a.toMyPost", function(){
       $("#postThreadBack").attr("href", "#page-messages");
    });
});


$(document).on('pageshow', '#page-messages', function(){
               //loads data everytime page is shown.
               
               
               // function pullTheData () {
               
               $("#myPostsList").empty();
               //Deletes previous list before re-calling it.
               
               
               var myOutput = $('#myPosts');
               
               
               //makes a variable that links to an ID.
               $.ajax({
                      beforeSend: function() { $.mobile.loading('show'); }, //Show spinner
                      complete: function() { $.mobile.loading('hide'); },
                      url: 'http://wander-app.org/getMyPosts.php',
                      dataType: 'jsonp',
                      jsonp: 'jsoncallback',
                      timeout: 5000,
                      success: function(data, status){ //Calls the server
                      
                      $.each(data, function(i,item){
                             
                             if(item.myUserProfileID == $('#profileID').val()){
                             
                             console.log(JSON.stringify(item)); //Inject data to the cells
                             $('#myPostsList').append('<li class="ui-nodisc-icon" data-icon="listIcon" id="' + item.myrandomPostId +'" >'+'<div class="behind"><a href="#myPopupDialog" data-rel="popup" data-position-to="window" data-transition="pop" class="ui-btn delete-btn">Delete</a></div>'+'<a href="" class="toMyPost" data-myProfile='+item.myUserProfileID+' data-key='+item.myrandomPostId+' onClick=""><img class="feedImage" src='+item.myPic+'></img><p><strong>'+item.myName+", "+item.myGender+'</p></strong>'
                                                     + '<p>'+item.myPost+'<p>'
                                                     
                                                     + '<p class="ui-li-aside" ><time class="timeago" datetime='+item.myTime+'></time></p></a></li>'
                                                     );
                             
                                    }
                             
                                    });
                             
                      
                            $('#myPostsList').listview( "refresh" );
                            $('.timeago').timeago();
                      
                      },
                      error: function(){
                      output.text('There was an error loading the data.');//Handles error to connect to database
                      }
                      
                      });
               
               });


// Will handle on tap to switch to single post page

$(document).on('tap', '#myPostsList li a.toMyPost', function(){   //calls for the function on tap
               
               $.mobile.changePage( "#individualPost", { transition: "fade", changeHash: false }); // disply the new #individualPost page after taping
               
               
               
               
               $("#myPost").empty();
               //Clear List Before Clone.
               
               
               document.getElementById("replyid").value = $(this).attr('data-key');
               //place the id from the data-key attribute to the replyid div
               
               $(this).clone().appendTo('#myPost');
               //Clone selected listview Values.
               
               
               
               
               
               
               
               $('#myPost').value(function (index, value) {
                                  return value + ' at ' + index;
                                  });
               
               
               
               $( '#myPost' ).listview( "refresh" );
               //Refresh List After Cloning and Appending.
               
               });









//// Post - userPost
//// Name - userName
//// Gender - userGender
//// Pic - userPic
//// Time - postTime
//// theDate - postDate