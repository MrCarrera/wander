


$(document).bind('deviceready', function(){
                 $(function(){
                   $('form#replyForm').submit(function(){
                        
                 
//                        var postTime = fullDate.getHours()+':'+fullDate.getMinutes();
                        var postTime = fullDate.toISOString()
                        var postDate = fullDate.getDate() +' / '+myMonth[fullDate.getMonth()];
                        var postUser = $('#userName').text()
                        var postGender = $('#userGender').text()
                        var postPic = $('#userPic').attr('src')
                        var postReply = $('#replyPost').val()
                        var postID = $('#replyid').val() // get data-id of original post.
                        var postCity = $('#profileCity').text()
                        var postAbout = $('#profileAbout').text()
                        var postProfileID = $('#profileID').val()
            
                                
                                    
        $.ajax({
                beforeSend: function() { $.mobile.loading('show'); }, //Show spinner
                complete: function() { $.mobile.loading('hide'); },//hide spinner
                type: 'POST',
                data: '&replyPost='+postReply+'&userName='+postUser+'&userGender='+postGender+'&userPic='+postPic+'&postDate='+postDate+'&postTime='+postTime+'&replyid='+postID+'&profileCity='+postCity+'&profileAbout='+postAbout+'&profileID='+postProfileID,
                //PHP URL
                url: 'http://wander-app.org/replyPosts.php',
                success: function(data){
                console.log(data);
               
               navigator.notification.alert(
                                            "Reply Posted!",
                                            callBackFunctionB, // Specify a function to be called
                                            'Wander',
                                            "OK"
                                            );
               function callBackFunctionB(){
               console.log('ok');
               
               }
               
               
               },
               
               error: function(){
               console.log(data);
               alert('There Was An Error Adding Your Reply');
               }
               });
                                              
                                              //Resets Text Area After Post Is Submitted
                                              $("#replyPost").val('');
                                              
                                              return false;
                                              
                      });
                   });
                 });







