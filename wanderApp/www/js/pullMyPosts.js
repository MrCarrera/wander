/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



//Function to Populate My Posts page with the active user's posts

$(document).on('pageshow', '#page-messages', function(){
               //loads data everytime page is shown.
               
               
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
                      timeout: 10000,
                      
                      success: function(data, status){ //Calls the server
                      
                      $.each(data, function(i,item){
                             
                             if(item.myUserProfileID == $('#profileID').val()){
                             //If statement only returns posts that match your unique profileID
                             
                             //Hidden userID & ProfileID stored as data-attribute's for use within app.
                             console.log(JSON.stringify(item)); //Append data to list
                             $('#myPostsList').append('<li class="ui-nodisc-icon" data-icon="listIcon" id="' + item.myrandomPostId +'" >'+'<div class="behind"><a href="#myPopupDialog" data-rel="popup" data-position-to="window" data-transition="pop" class="ui-btn delete-btn">Delete</a></div>'+'<a href="" class="toMyPost" data-myProfile='+item.myUserProfileID+' data-myPokey='+item.myrandomPostId+' onClick=""><img class="feedImage" src='+item.myPic+'></img><p><strong>'+item.myName+", "+item.myGender+'</p></strong>'
                                                     + '<p>'+item.myPost+'<p>'
                                                     
                                                     + '<p class="ui-li-aside" ><time class="timeago" datetime='+item.myTime+'></time></p></a></li>'
                                                     );
                             
                                    }
                             
                                    });
                             
                      
                            $('#myPostsList').listview( "refresh" );
                            $('.timeago').timeago(); //  Adds timeago feature to post to shown time past.
                      
                      },
                      //OnError - Retry the ajax if it fails
                      error : function(xhr, textStatus, errorThrown ) {
                      if (textStatus == 'timeout') {
                      this.tryCount++;
                      if (this.tryCount <= this.retryLimit) {
                      //try again
                      $.ajax(this);
                      return;
                      }
                      return;
                      }
                      if (xhr.status == 500) {
                      //handle error
                      output.text('There Was An Error Loading The Data.Please Restart The App.');
                      } else {
                      output.text('There Was An Error Loading The Data.Please Restart The App.');
                      //handle error
                      }
                      }

                      
                      });
               
               });


// Handles 'on tap' to switch to single post page

$(document).on('tap', '#myPostsList li a.toMyPost', function(){   //calls for the function on tap
               
               $.mobile.changePage( "#individualPost", { transition: "fade", changeHash: false });
               // Disply the new #individualPost page after tapping
               
               
               $("#myPost").empty();
               //Clear the page of old data Before Clone.
               
               
               document.getElementById("replyid").value = $(this).attr('data-myPokey');
               //place the id from the data-key attribute to the replyid div
               
               $(this).clone().appendTo('#myPost');
               //Clone selected listview Values.
             
               $('#myPost').value(function (index, value) {
                                  return value + ' at ' + index;
                                  });
               
               $( '#myPost' ).listview( "refresh" );
               //Refresh List After Cloning and Appending.
               
               });


