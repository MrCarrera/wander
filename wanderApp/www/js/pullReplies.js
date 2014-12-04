/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


                  
        $(document).on('pageshow', '#individualPost', function(){
                       //loads data everytime page is shown.
                       
                                   $("#replyList").empty();
                                    //Deletes previous list before re-calling it.
                                    var replyIdCheck = $('#replyid').val()
                                    //Gets dynamic id value to identify post.
                                    var output = $('#replies');
                                   //makes a variable that links to an ID. 
                       
                       
                    $.ajax({
                        beforeSend: function() { $.mobile.loading('show'); }, //Show spinner
                        complete: function() { $.mobile.loading('hide'); },//hide spinner
                        url: 'http://wander-app.org/getReply.php',
                        dataType: 'jsonp',
                        jsonp: 'jsoncallback',
                        timeout: 5000,
                        success: function(data, status){ //Calls the server
                                          
                            $.each(data, function(i,item){
                                                 
                                if(item.mainPostId == replyIdCheck){
                                //Filters relpies that are linked to the main post using dynamic id.
                                              
                                        
                                        console.log(JSON.stringify(item)); //Inject data to the cells
                                                 $('#replyList').append('<li class="ui-nodisc-icon" data-icon="listIcon" ><data-kode='+item.mainPostId+' data-replyProfileID='+item.replyUserProfileID+'><img class="feedImage" href="#page-IndividualProfile" src='+item.replyPic+'></img><p><strong>'+item.replyName+", "+item.replyGender+'</p></strong>'
                                                 + '<p>'+item.mainReplyPost+'<p>'
                                                 
                                                 + '<p class="ui-li-aside" ><time class="timeago" datetime='+item.theTime+'></time></p></li>');
                                                 
                                                 }
                                                 });          
                                                 
                                                 
                                                    $( '#replyList' ).listview( "refresh" );
                                                    $('.timeago').timeago();
                                                    
                                                                                              },
                                          error: function(){
                                          output.text('There was an error loading the data.');//Handles error to connect to database
                                          }
                                          });
                                   });


        


