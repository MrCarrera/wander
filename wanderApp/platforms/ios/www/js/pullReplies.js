/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


                  
        $(document).on('pageshow', '#individualPost', function(){
                       //loads data everytime page is shown.
                       
                                   $("#replyList").empty();
                                    //Deletes previous list before re-calling it.
                       
                                   var output = $('#replies');
                                   //makes a variable that links to an ID. 
                                   $.ajax({
                                          url: 'http://wander-app.org/getReply.php',
                                          dataType: 'jsonp',
                                          jsonp: 'jsoncallback',
                                          timeout: 5000,
                                          success: function(data, status){ //Calls the server
                                          $.each(data, function(i,item){
                                              console.log(JSON.stringify(item)); //Inject data to the cells
                                                 $('#replyList').append('<li class="ui-nodisc-icon" data-icon="listIcon" ><a href="" data-kode='+item.mainPostId+'><img class="feedImage" src='+item.replyPic+'></img><p><strong>'+item.replyName+", "+item.replyGender+'</p></strong>'
                                                 + '<p>'+item.mainReplyPost+'<p>'
                                                 
                                                 + '<p class="ui-li-aside" ><time class="timeago" datetime='+item.theTime+'></time></p></a></li>');
                                                 });          
                                                 
                                                 
                                                    $( '#replyList' ).listview( "refresh" );
                                                    $('.timeago').timeago();
                                                    
                                                                                              },
                                          error: function(){
                                          output.text('There was an error loading the data.');//Handles error to connect to database
                                          }
                                          });
                                   });


        


 

// Post - userPost
// Name - userName
// Gender - userGender
// Pic - userPic
// Time - postTime
// theDate - postDate