$(document).bind('deviceready', function(){
                 $(function(){
                   $('form').submit(function(){
                        
                                    
//                        var postTime = fullDate.getHours()+':'+fullDate.getMinutes();
                        var postTime = fullDate.toISOString()
                        var postDate = fullDate.getDate() +' / '+myMonth[fullDate.getMonth()];
                        var postUser = $('#userName').text()
                        var postGender = $('#userGender').text()
                        var postPic = $('#userPic').attr('src')
                        var postData = $(this).serialize()
//                        var postID = $('#userID').id = randomString(8);
                       
            
                                
                                    
        $.ajax({
                type: 'POST',
                data: postData+'&userName='+postUser+'&userGender='+postGender+'&userPic='+postPic+'&postDate='+postDate+'&postTime='+postTime,
                //PHP URL
                url: 'http://wander-app.org/userPosts.php',
                success: function(data){
                console.log(data);
               
               navigator.notification.alert(
                                            "Posted!",
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
                    alert('There Was An Error Adding Your Comment');
                    }
                });
                                    
                //Resets Text Area After Post Is Submitted
                $("#userPost").val('');
                                    
                    return false;
                    
                    });
                   });
                 });

