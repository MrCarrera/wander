/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


    //Function to get replies to the currently selected user post
                  
        $(document).on('pageshow', '#individualPost', function(){
                       //loads data everytime page is shown.
                       
                                    $("#replyList").empty();
                                    //Deletes previous list before re-calling it.
                                    var replyIdCheck = $('#replyid').val()
                                    //Gets dynamic userID value to identify post.
                                    var output = $('#replies');
                                    //makes a variable that links to an ID.
                       
                       
                    $.ajax({
                        beforeSend: function() { $.mobile.loading('show'); }, //Show spinner
                        complete: function() { $.mobile.loading('hide'); },//hide spinner
                        url: 'http://wander-app.org/getReply.php',
                        dataType: 'jsonp',
                        jsonp: 'jsoncallback',
                        timeout: 10000,
                        tryCount : 0,
                        retryLimit : 3,
                        success: function(data, status){ //Calls the server
                                          
                            $.each(data, function(i,item){
                                                 
                                if(item.mainPostId == replyIdCheck){
                                //Filters relpies that are linked to the main post using dynamic string.
                                //Only gets replies with matching userID from database
                                
                                   
                                //data-kode stores replyid from database for use within the app
                                //data-replyProfileID stores profileID from database for use within app
                                        console.log(JSON.stringify(item)); //Inject data to the cells
                                                 $('#replyList').append('<li class="ui-nodisc-icon" data-icon="listIcon" ><data-kode='+item.mainPostId+' data-replyProfileID='+item.replyUserProfileID+'><img class="feedImage" href="#page-IndividualProfile" src='+item.replyPic+'></img><p><strong>'+item.replyName+", "+item.replyGender+'</p></strong>'
                                                 + '<p>'+item.mainReplyPost+'<p>'
                                                 
                                                 + '<p class="ui-li-aside" ><time class="timeago" datetime='+item.theTime+'></time></p></li>');
                                                 
                                                 }
                                                 });          
                                                 
                                    $('#linkToProfile a').attr("href", "#individualProfile");
                                    //Updates href of appended linkToProfile div to link to users profile.
                                    //Prevents bug where pages skip.
                           
                                        $( '#replyList' ).listview( "refresh" );
                           
                                        $('.timeago').timeago();
                                                    
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
                           output.text('There Was An Error Loading The Data. Please Restart The App.');
                           } else {
                           output.text('There Was An Error Loading The Data. Please Restart The App.');
                           //handle error
                           }
                           }
                 });
           });


        


