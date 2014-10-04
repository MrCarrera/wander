/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


                  
$(document).ready(function(){
                  $(document).bind('deviceready', function(){
                                   var output = $('#activityContent');
                                   //makes a variable that links to an ID. 
                                   $.ajax({
                                          url: 'http://wander-app.org/getPost.php',
                                          dataType: 'jsonp',
                                          jsonp: 'jsoncallback',
                                          timeout: 5000,
                                          success: function(data, status){
                                          $.each(data, function(i,item){
                                              console.log(JSON.stringify(item));
                                                 $('#myListView').append('<li><img class="feedImage" src='+item.Pic+'></img><p><strong>'+item.Name+'</p></strong>'
                                                 + '<p>'+item.Post+'<br>'
                                                 + item.Gender+'</p>'
                                                 + '<p>'+item.Time+'<br>' + item.theDate+'</p></li>');                                                
                                                 });                                                
                                          },
                                          error: function(){
                                          output.text('There was an error loading the data.');
                                          }
                                          });
                                   });
                  });

// Post - userPost
// Name - userName
// Gender - userGender
// Pic - userPic
// Time - postTime
// theDate - postDate