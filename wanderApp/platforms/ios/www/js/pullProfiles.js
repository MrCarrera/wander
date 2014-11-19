/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).on('pageshow', '#individualProfile', function(){
               //loads data everytime page is shown.
               
               $("#otherProfileContainer").empty();
               //Deletes previous list before re-calling it.
               //var profileIdCheck = $('#otherProfileId').val();
               //alert($('#otherProfileId').val());
               //Gets dynamic id value to identify post.
               var output3 = $('#otherProfileError');
               //makes a variable that links to an ID.
               
               
               $.ajax({
                      beforeSend: function() { $.mobile.loading('show'); }, //Show spinner
                      complete: function() { $.mobile.loading('hide'); },//hide spinner
                      type: 'GET',
                      data: 'profileIDVal='+$('#otherProfileID').val(),
                      // Give profile id of select user profile to server to filter results.
                      url: 'http://wander-app.org/getProfile2.php',
                      dataType: 'jsonp',
                      jsonp: 'jsoncallback',
                      timeout: 5000,
                      success: function(data, status){ //Calls the server
                      
                      $.each(data, function(i,item){
                             
                            
                             console.log(JSON.stringify(item)); //Inject data to the profile page.
                             $('#otherProfileContainer').append('<div class="ui-nodisc-icon" data-icon="listIcon" ><data-kkkode='+item.otherUserProfileID+'><img class="otherProfilePicture" href="#" src='+item.otherUserProfilePic+'></img><p><strong>'+item.otherUserProfileName+", "+item.otherUserProfileGender+'</p></strong>'
                                                    + '<p>'+item.otherUserProfileCity+'<p>'
                                                                
                                                    + '<h1>'+"About"+'</h1>'
                                                                
                                                    + '<p>'+item.otherUserProfileAbout+'<p>'
                                                    
                                                    + '<p class="ui-li-aside" ></p></div>');
                             
                             });
                    
                      },
                      error: function(){
                      output.text('There was an error loading the data.');//Handles error to connect to database
                      }
                      });
               });


