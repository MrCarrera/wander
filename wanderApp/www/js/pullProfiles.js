/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Function to get other users profiles from database ///////////////////////////////////////////////////

$(document).on('pageshow', '#individualProfile', function(){
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
                      // Give profile id of the selected user profile to server to filter results.
                      //PHP uses id value to only return a profile with a matching id
                      url: 'http://wander-app.org/getProfile2.php',
                      dataType: 'jsonp',
                      jsonp: 'jsoncallback',
                      timeout: 5000,
                      success: function(data, status){ 
                      
                      $.each(data, function(i,item){
                             
                            
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


