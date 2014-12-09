/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Function to get other users profiles from database 

$(document).on('pagebeforeshow', '#individualProfile', function(){
               //loads data everytime page is shown.
               
               $("#otherProfileContainer").empty();
               //Deletes previous list before re-calling it.
               
               var output3 = $('#otherProfileError');
               //makes a variable that links to an ID.
               
               
               $.ajax({
                      beforeSend: function() { $.mobile.loading('show'); }, //Show spinner
                      complete: function() { $.mobile.loading('hide'); }, //hide spinner
                      type: 'GET',
                      data: 'profileIDVal='+$('#otherProfileID').val(),
                      //Give profileID data of the selected user profile to server to filter results.
                      //PHP uses id value to only return a profile with a matching profileID
                      url: 'http://wander-app.org/getUserProfiles.php',
                      dataType: 'jsonp',
                      jsonp: 'jsoncallback',
                      timeout: 10000,
                      tryCount : 0,
                      retryLimit : 3,
                      success: function(data, status){ 
                      
                      $.each(data, function(i,item){
                             
                            //data-kkkode data attribute stores profileID selected user from database.
                             console.log(JSON.stringify(item)); //Append profile data to div
                             $('#otherProfileContainer').append('<div class="ui-nodisc-icon" data-icon="listIcon" style="text-align: center" ><data-kkkode='+item.otherUserProfileID+'><img class="otherProfilePicture" href="#" src='+item.otherUserProfilePic+'></img><p><strong>'+item.otherUserProfileName+", "+item.otherUserProfileGender+'</strong><br>'+item.otherUserProfileCity+'</p>'
                                                    
                                                                
                                                    + '<p><strong>'+"About"+'</strong><br>'+item.otherUserProfileAbout+'</p>'
                                                                
                                                
                                                    
                                                    + '<p class="ui-li-aside" ></p></div>');
                             
                             });
                    
                      
                      },
                      error: function(){
                      output.text('There was an error loading the data.');
                      //Handles error to connect to database
                      }
                      });
               });


